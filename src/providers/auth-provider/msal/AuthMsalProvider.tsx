import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
    AuthenticatedTemplate,
    MsalProvider,
    UnauthenticatedTemplate,
    useIsAuthenticated,
    useMsal,
} from '@azure/msal-react';
import type {AccountInfo} from '@azure/msal-browser';
import {CacheLookupPolicy, InteractionRequiredAuthError, InteractionStatus} from '@azure/msal-browser';
import {Box, Spinner, Text, VStack} from '@chakra-ui/react';
import {security} from 'services/internals/security';
import LoginPage from 'pages/LoginPage';
import {isDefined, isUndefined} from 'utils/validation.ts';
import msalInstance from 'utils/auth/authProvider';
import {AuthContext} from '../AuthContext';
import type {AuthContextProps, User} from '../types';
import {loginRequest, tokenRequest} from '../authConfig';

const CustomAuthProvider: React.FC<React.PropsWithChildren> = function ({children}) {
    const [idToken, setIdToken] = useState<string>();
    const [_user, setUser] = useState<User>();
    const [_isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [_isLoading, setIsLoading] = useState<boolean>(false);
    const {accounts, instance, inProgress} = useMsal();

    const activeAccount = useMemo<any | AccountInfo>(
        () => instance.getActiveAccount() != null || accounts?.[0],
        [instance, accounts],
    );

    const isAuthenticated = useIsAuthenticated();

    useEffect(() => {
        setIsAuthenticated(isAuthenticated);
    }, [isAuthenticated]);

    useEffect(() => {
        if (!isAuthenticated || isUndefined(activeAccount)) return;
        setUser({
            name: activeAccount.idTokenClaims?.name as string,
            email: activeAccount.username ?? '',
        });
    }, [isAuthenticated, activeAccount]);

    const _loginWithRedirect = useCallback(async (): Promise<void> => {
        if (_isLoading || inProgress !== InteractionStatus.None) {
            await Promise.resolve();
            return;
        }

        setIsLoading(true);
        try {
            const tokenResponse = await instance.handleRedirectPromise();
            if (tokenResponse == null) {
                const instanceAccounts = instance.getAllAccounts();
                if (instanceAccounts.length === 0) {
                    await instance.loginRedirect({
                        ...loginRequest,
                        redirectStartPage: window.location.href,
                    });
                }
            }
        } catch (err) {
            console.error('Login redirect failed:', err);
        } finally {
            setIsLoading(false);
        }
    }, [instance, inProgress, _isLoading]);

    const _logout = useCallback(async (): Promise<void> => {
        try {
            await instance.logoutRedirect({
                idTokenHint: idToken,
                postLogoutRedirectUri: window.location.origin,
            });
        } catch (error) {
            console.error('Logout failed:', error);
        }
    }, [instance, idToken]);

    const _getAccessToken = useCallback(async (): Promise<string> => {
        if (inProgress !== InteractionStatus.None) {
            return '';
        }

        try {
            const _accounts = instance.getAllAccounts();
            const account = isDefined(_accounts) && _accounts.length > 0
                ? _accounts[0]
                : instance.getActiveAccount();

            if (account == null) throw new Error('login_required');

            const result = await instance.acquireTokenSilent({
                ...tokenRequest,
                account,
                cacheLookupPolicy: CacheLookupPolicy.Default,
            });

            setIdToken(result?.idToken);
            return result?.accessToken ?? '';
        } catch (error) {
            if (error instanceof InteractionRequiredAuthError) {
                const _accounts = instance.getAllAccounts();
                const account = _accounts.length > 0 ? _accounts[0] : null;

                if (account) {
                    void instance.acquireTokenRedirect({
                        ...tokenRequest,
                        loginHint: account?.username,
                        account,
                    });
                }
            }
            console.error('Token acquisition failed:', error);
            return '';
        }
    }, [instance, inProgress]);

    // Initialize token function for API requests
    useEffect(() => {
        security.setAccessTokenFunction(async (): Promise<string> => {
            const request = {
                ...tokenRequest,
                account: instance.getAllAccounts()?.[0] ?? '',
                cacheLookupPolicy: CacheLookupPolicy.Default,
            };

            try {
                const response = await instance.acquireTokenSilent(request);
                return response?.accessToken ?? '';
            } catch (error) {
                console.error('Silent token acquisition failed:', error);
                await instance.acquireTokenRedirect(request);
                return '';
            }
        });
    }, [instance]);

    const contextValue = useMemo<AuthContextProps>(() => {
        return {
            isLoading: _isLoading || inProgress !== InteractionStatus.None,
            isAuthenticated: _isAuthenticated,
            user: _user,
            getAccessToken: _getAccessToken,
            loginWithRedirect: _loginWithRedirect,
            logout: _logout,
        };
    }, [
        _isLoading,
        inProgress,
        _isAuthenticated,
        _user,
        _loginWithRedirect,
        _logout,
        _getAccessToken,
    ]);

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

interface AuthMsalProviderProps {
    children?: React.ReactNode;
}

const MsalInitializer = ({children}: AuthMsalProviderProps) => {
    const [isInitialized, setIsInitialized] = useState(false);
    const [initError, setInitError] = useState<string | null>(null);

    useEffect(() => {
        msalInstance.initialize()
            .then(() => msalInstance.handleRedirectPromise())
            .then(() => {
                setIsInitialized(true);
            })
            .catch((error) => {
                console.error('Failed to initialize MSAL:', error);
                setInitError('Authentication service initialization failed');
            });
    }, []);

    if (initError) {
        return (
            <Box
                height="100vh"
                display="flex"
                alignItems="center"
                justifyContent="center"
                bg="red.50"
            >
                <VStack spacing={4}>
                    <Text fontSize="xl" fontWeight="bold" color="red.600">
                        Authentication Error
                    </Text>
                    <Text color="red.500" textAlign="center">
                        {initError}
                    </Text>
                </VStack>
            </Box>
        );
    }

    if (!isInitialized) {
        return (
            <Box
                height="100vh"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <VStack spacing={4}>
                    <Spinner size="xl" color="blue.500"/>
                    <Text>Initializing authentication...</Text>
                </VStack>
            </Box>
        );
    }

    return <>{children}</>;
};

const AuthMsalProvider = ({children}: AuthMsalProviderProps) => {
    return (
        <MsalInitializer>
            <MsalProvider instance={msalInstance}>
                <CustomAuthProvider>
                    <UnauthenticatedTemplate>
                        <LoginPage/>
                    </UnauthenticatedTemplate>
                    <AuthenticatedTemplate>{children}</AuthenticatedTemplate>
                </CustomAuthProvider>
            </MsalProvider>
        </MsalInitializer>
    );
};

export default AuthMsalProvider;
