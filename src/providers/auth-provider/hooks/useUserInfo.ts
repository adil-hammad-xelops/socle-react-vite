import {useIsAuthenticated, useMsal} from '@azure/msal-react';
import {useMemo} from 'react';

export interface UserInfo {
    id?: string;
    name?: string;
    email?: string;
    initials?: string;
    avatar?: string;
    roles?: string[];
    isAuthenticated: boolean;
}

export const useUserInfo = (): UserInfo => {
    const isAuthenticated = useIsAuthenticated();
    const {accounts} = useMsal();

    const userInfo = useMemo<UserInfo>(() => {
        if (!isAuthenticated || !accounts || accounts.length === 0) {
            return {
                isAuthenticated: false,
            };
        }

        const account = accounts[0];
        const name = account.name || account.idTokenClaims?.name || 'User';
        const email = account.username || account.idTokenClaims?.preferred_username || '';

        // Generate initials from name
        const getInitials = (fullName: string): string => {
            if (!fullName) return '?';
            const parts = fullName.trim().split(' ');
            if (parts.length >= 2) {
                return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
            }
            return fullName.substring(0, 2).toUpperCase();
        };

        // Extract roles from token claims if available
        const roles = account.idTokenClaims?.roles || [];

        return {
            id: account.homeAccountId,
            name,
            email,
            initials: getInitials(name),
            roles: Array.isArray(roles) ? roles : [],
            isAuthenticated: true,
        };
    }, [isAuthenticated, accounts]);

    return userInfo;
};
