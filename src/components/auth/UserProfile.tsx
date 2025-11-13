import {useState} from 'react';
import {
    Avatar,
    Button,
    HStack,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Spinner,
    Text,
    useColorModeValue,
    VStack,
} from '@chakra-ui/react';
import {FaChevronDown, FaCog, FaSignOutAlt} from 'react-icons/fa';
import {useAuthService, useUserInfo} from 'providers/auth-provider/hooks';

/**
 * User Profile Component
 * Displays user information and logout functionality
 */
export function UserProfile() {
    const userInfo = useUserInfo();
    const {logoutWithPopup} = useAuthService();
    const [isLoggingOut, setIsLoggingOut] = useState(false);

    const bgColor = useColorModeValue('white', 'gray.800');
    const borderColor = useColorModeValue('gray.200', 'gray.600');

    if (!userInfo.isAuthenticated) {
        return null;
    }

    const handleLogout = async () => {
        setIsLoggingOut(true);
        await logoutWithPopup();
        setIsLoggingOut(false);
    };

    return (
        <Menu>
            <MenuButton
                as={Button}
                variant="ghost"
                size="sm"
                rightIcon={<FaChevronDown/>}
                p={2}
                bg={bgColor}
                border="1px"
                borderColor={borderColor}
                _hover={{
                    bg: useColorModeValue('gray.50', 'gray.700'),
                }}
                disabled={isLoggingOut}
            >
                <HStack spacing={3}>
                    <Avatar
                        size="sm"
                        name={userInfo.name}
                        bg="blue.500"
                        color="white"
                    />
                    <VStack spacing={0} align="start" display={{base: 'none', md: 'flex'}}>
                        <Text fontSize="sm" fontWeight="medium" lineHeight="1.2">
                            {userInfo.name}
                        </Text>
                        <Text fontSize="xs" color="gray.500" lineHeight="1.2">
                            {userInfo.email}
                        </Text>
                    </VStack>
                </HStack>
            </MenuButton>

            <MenuList>
                <VStack spacing={2} align="start" px={3} py={2} display={{base: 'flex', md: 'none'}}>
                    <Text fontSize="sm" fontWeight="medium">
                        {userInfo.name}
                    </Text>
                    <Text fontSize="xs" color="gray.500">
                        {userInfo.email}
                    </Text>
                </VStack>

                <MenuDivider display={{base: 'block', md: 'none'}}/>

                <MenuItem icon={<FaCog/>}>
                    Settings
                </MenuItem>

                <MenuDivider/>

                <MenuItem
                    onClick={handleLogout}
                    color="red.500"
                    disabled={isLoggingOut}
                    icon={isLoggingOut ? <Spinner size="sm"/> : <FaSignOutAlt/>}
                >
                    {isLoggingOut ? 'Signing out...' : 'Sign out'}
                </MenuItem>
            </MenuList>
        </Menu>
    );
}

export default UserProfile;
