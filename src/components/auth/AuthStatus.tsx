import {Badge, Box, HStack} from '@chakra-ui/react';
import {useUserInfo} from 'providers/auth-provider/hooks';

interface AuthStatusProps {
    showOnlyWhenAuthenticated?: boolean;
    variant?: 'subtle' | 'solid' | 'outline';
    size?: 'sm' | 'md' | 'lg';
}

export const AuthStatus = ({
                               showOnlyWhenAuthenticated = false,
                               variant = 'subtle',
                               size = 'sm',
                           }: AuthStatusProps) => {
    const userInfo = useUserInfo();

    if (showOnlyWhenAuthenticated && !userInfo.isAuthenticated) {
        return null;
    }

    return (
        <HStack spacing={2}>
            <Badge
                colorScheme={userInfo.isAuthenticated ? 'green' : 'red'}
                variant={variant}
                size={size}
            >
                {userInfo.isAuthenticated ? 'Authenticated' : 'Not Authenticated'}
            </Badge>
            {userInfo.isAuthenticated && userInfo.name && (
                <Box fontSize="sm" color="gray.600">
                    as {userInfo.name}
                </Box>
            )}
        </HStack>
    );
};

export default AuthStatus;
