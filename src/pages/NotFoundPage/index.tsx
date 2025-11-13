import {Link} from 'react-router-dom';
import {Button} from 'components/ui';
import {NotFoundCode, NotFoundContainer, NotFoundWrapper,} from './NotFoundPage.styled';
import {Heading, Text, VStack} from "@chakra-ui/react";

export function NotFoundPage() {
    return (
        <NotFoundWrapper>
            <NotFoundContainer>
                <VStack spacing={6} align="center">
                    <NotFoundCode>404</NotFoundCode>
                    <Heading as="h1" size="xl" textAlign="center">
                        Page Not Found
                    </Heading>
                    <Text color="gray.600" textAlign="center" fontSize="lg">
                        The page you're looking for doesn't exist or has been moved.
                    </Text>
                    <Link to="/" style={{textDecoration: 'none'}}>
                        <Button size="lg" colorScheme="blue">
                            Back to Home
                        </Button>
                    </Link>
                </VStack>
            </NotFoundContainer>
        </NotFoundWrapper>
    );
}

export default NotFoundPage;

