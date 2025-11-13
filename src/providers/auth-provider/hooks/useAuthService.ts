import {useToast} from '@chakra-ui/react';
import {useCallback} from 'react';
import {useMsal} from '@azure/msal-react';
import {loginRequest, logoutRequest} from '../authConfig';

export interface AuthError {
    code: string;
    message: string;
    userMessage: string;
}

export const useAuthService = () => {
    const {instance} = useMsal();
    const toast = useToast();

    const handleAuthError = useCallback((error: any): AuthError => {
        const authError: AuthError = {
            code: error.errorCode || 'unknown_error',
            message: error.message || 'An unexpected error occurred',
            userMessage: 'Authentication failed. Please try again.',
        };

        // Map specific error codes to user-friendly messages
        switch (error.errorCode) {
            case 'user_cancelled':
                authError.userMessage = 'Sign-in was cancelled.';
                break;
            case 'popup_window_error':
                authError.userMessage = 'Unable to open sign-in popup. Please check your browser settings.';
                break;
            case 'network_error':
                authError.userMessage = 'Network error. Please check your connection and try again.';
                break;
            case 'interaction_required':
                authError.userMessage = 'Additional authentication is required.';
                break;
            default:
                authError.userMessage = 'Sign-in failed. Please contact support if the problem persists.';
        }

        return authError;
    }, []);

    const showErrorToast = useCallback((error: AuthError) => {
        toast({
            title: 'Authentication Error',
            description: error.userMessage,
            status: 'error',
            duration: 5000,
            isClosable: true,
            position: 'top-right',
        });
    }, [toast]);

    const showSuccessToast = useCallback((message: string) => {
        toast({
            title: 'Success',
            description: message,
            status: 'success',
            duration: 3000,
            isClosable: true,
            position: 'top-right',
        });
    }, [toast]);

    const loginWithPopup = useCallback(async (): Promise<{ success: boolean; error?: AuthError }> => {
        try {
            await instance.loginPopup(loginRequest);
            showSuccessToast('Successfully signed in!');
            return {success: true};
        } catch (error: any) {
            const authError = handleAuthError(error);
            showErrorToast(authError);
            return {success: false, error: authError};
        }
    }, [instance, handleAuthError, showErrorToast, showSuccessToast]);

    const loginWithRedirect = useCallback(async (): Promise<void> => {
        try {
            await instance.loginRedirect(loginRequest);
        } catch (error: any) {
            const authError = handleAuthError(error);
            showErrorToast(authError);
            console.error('Login redirect failed:', authError);
        }
    }, [instance, handleAuthError, showErrorToast]);

    const logoutWithPopup = useCallback(async (): Promise<{ success: boolean; error?: AuthError }> => {
        try {
            await instance.logoutPopup({
                ...logoutRequest,
                mainWindowRedirectUri: '/',
            });
            showSuccessToast('Successfully signed out!');
            return {success: true};
        } catch (error: any) {
            const authError = handleAuthError(error);
            showErrorToast(authError);
            return {success: false, error: authError};
        }
    }, [instance, handleAuthError, showErrorToast, showSuccessToast]);

    const logoutWithRedirect = useCallback(async (): Promise<void> => {
        try {
            await instance.logoutRedirect(logoutRequest);
        } catch (error: any) {
            const authError = handleAuthError(error);
            showErrorToast(authError);
            console.error('Logout redirect failed:', authError);
        }
    }, [instance, handleAuthError, showErrorToast]);

    return {
        loginWithPopup,
        loginWithRedirect,
        logoutWithPopup,
        logoutWithRedirect,
        handleAuthError,
    };
};
