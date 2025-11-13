import {useState} from 'react';
import {Box, Heading, useColorModeValue, VStack} from '@chakra-ui/react';
import {useAuthService} from 'providers/auth-provider/hooks';
import {ErrorMessage, LoadingSpinner, LoginButton, LoginCard, LoginPageWrapper,} from './LoginPage.styled';

export function LoginPage() {
    const {loginWithPopup} = useAuthService();
    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const cardBg = useColorModeValue('white', 'gray.800');
    const textColor = useColorModeValue('gray.900', 'white');

    const handleLogin = async () => {
        setError(null);
        setIsLoggingIn(true);

        const result = await loginWithPopup();

        if (!result.success && result.error) {
            setError(result.error.userMessage);
        }

        setIsLoggingIn(false);
    };

    return (
        <LoginPageWrapper>
            <LoginCard style={{backgroundColor: cardBg}}>
                <VStack spacing={6} align="center">
                    <Heading
                        as="h1"
                        size="xl"
                        color={textColor}
                        textAlign="center"
                    >
                        Welcome
                    </Heading>

                    <Box textAlign="center" color="gray.500">
                        Sign in with your Microsoft account
                    </Box>

                    {error && <ErrorMessage>{error}</ErrorMessage>}

                    <LoginButton onClick={handleLogin} disabled={isLoggingIn}>
                        {isLoggingIn ? (
                            <>
                                <LoadingSpinner/>
                                Signing in...
                            </>
                        ) : (
                            'Sign in with Microsoft'
                        )}
                    </LoginButton>
                </VStack>
            </LoginCard>
        </LoginPageWrapper>
    );
}

export default LoginPage;
