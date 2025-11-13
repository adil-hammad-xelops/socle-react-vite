import type {Meta, StoryObj} from '@storybook/react';
import {
    Alert,
    Avatar,
    AvatarGroup,
    Badge,
    Button,
    Card,
    Checkbox,
    Divider,
    IconButton,
    Input,
    LoadingSpinner as Spinner,
    ProgressBar as Progress,
    Radio,
    Select,
    Skeleton,
    Tag,
    Textarea,
    ToggleSwitch as Switch,
} from '../components/ui';
import {
    AlertIcon,
    Box,
    CardBody,
    CardFooter,
    CardHeader,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    RadioGroup,
    SimpleGrid,
    Stack,
    Text,
    VStack,
    Wrap,
    WrapItem,
} from '@chakra-ui/react';
import {FaEdit, FaHeart, FaTrash} from 'react-icons/fa';

const meta: Meta = {
    title: 'Overview/All Components',
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: 'A comprehensive overview of all available UI components in the design system.',
            },
        },
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ComponentShowcase: Story = {
    render: () => (
        <Box maxW="1200px" mx="auto" p={6}>
            <VStack spacing={8} align="stretch">
                {/* Header */}
                <Box textAlign="center" mb={8}>
                    <Heading as="h1" size="2xl" mb={4} color="blue.600">
                        UI Component Library
                    </Heading>
                    <Text fontSize="lg" color="gray.600">
                        A comprehensive collection of reusable UI components built with Chakra UI
                    </Text>
                </Box>

                {/* Buttons Section */}
                <Box>
                    <Heading as="h2" size="lg" mb={4} color="gray.700">
                        Buttons & Actions
                    </Heading>
                    <Card>
                        <CardBody>
                            <Wrap spacing={4}>
                                <WrapItem>
                                    <Button colorScheme="blue">Primary</Button>
                                </WrapItem>
                                <WrapItem>
                                    <Button colorScheme="green" variant="outline">Secondary</Button>
                                </WrapItem>
                                <WrapItem>
                                    <Button variant="ghost">Ghost</Button>
                                </WrapItem>
                                <WrapItem>
                                    <Button isLoading colorScheme="purple">Loading</Button>
                                </WrapItem>
                                <WrapItem>
                                    <IconButton aria-label="Like" icon={<FaHeart/>} colorScheme="red"/>
                                </WrapItem>
                                <WrapItem>
                                    <IconButton aria-label="Edit" icon={<FaEdit/>} variant="outline"/>
                                </WrapItem>
                                <WrapItem>
                                    <IconButton aria-label="Delete" icon={<FaTrash/>} colorScheme="red"
                                                variant="ghost"/>
                                </WrapItem>
                            </Wrap>
                        </CardBody>
                    </Card>
                </Box>

                {/* Form Controls */}
                <Box>
                    <Heading as="h2" size="lg" mb={4} color="gray.700">
                        Form Controls
                    </Heading>
                    <SimpleGrid columns={{base: 1, md: 2}} spacing={6}>
                        <Card>
                            <CardHeader>
                                <Heading size="md">Inputs</Heading>
                            </CardHeader>
                            <CardBody>
                                <Stack spacing={4}>
                                    <Input placeholder="Basic input"/>
                                    <Input type="email" placeholder="Email input"/>
                                    <Textarea placeholder="Textarea for longer content"/>
                                    <Select placeholder="Select an option">
                                        <option value="option1">Option 1</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                    </Select>
                                </Stack>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardHeader>
                                <Heading size="md">Selection Controls</Heading>
                            </CardHeader>
                            <CardBody>
                                <Stack spacing={4}>
                                    <Checkbox defaultChecked>Checkbox option</Checkbox>
                                    <Checkbox>Another checkbox</Checkbox>

                                    <RadioGroup defaultValue="2">
                                        <Stack spacing={2}>
                                            <Radio value="1">First radio</Radio>
                                            <Radio value="2">Second radio</Radio>
                                            <Radio value="3">Third radio</Radio>
                                        </Stack>
                                    </RadioGroup>

                                    <FormControl display="flex" alignItems="center">
                                        <FormLabel htmlFor="email-alerts" mb="0">
                                            Enable notifications
                                        </FormLabel>
                                        <Switch id="email-alerts"/>
                                    </FormControl>
                                </Stack>
                            </CardBody>
                        </Card>
                    </SimpleGrid>
                </Box>

                {/* Data Display */}
                <Box>
                    <Heading as="h2" size="lg" mb={4} color="gray.700">
                        Data Display
                    </Heading>
                    <SimpleGrid columns={{base: 1, md: 2, lg: 3}} spacing={6}>
                        <Card>
                            <CardHeader>
                                <Heading size="md">Badges & Tags</Heading>
                            </CardHeader>
                            <CardBody>
                                <Stack spacing={3}>
                                    <HStack spacing={2}>
                                        <Badge colorScheme="green">Active</Badge>
                                        <Badge colorScheme="red">Inactive</Badge>
                                        <Badge colorScheme="yellow">Pending</Badge>
                                    </HStack>
                                    <HStack spacing={2}>
                                        <Tag colorScheme="blue">React</Tag>
                                        <Tag colorScheme="purple">TypeScript</Tag>
                                        <Tag colorScheme="orange">Chakra UI</Tag>
                                    </HStack>
                                </Stack>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardHeader>
                                <Heading size="md">Avatars</Heading>
                            </CardHeader>
                            <CardBody>
                                <Stack spacing={4}>
                                    <HStack spacing={3}>
                                        <Avatar size="sm" name="John Doe"/>
                                        <Avatar size="md" name="Jane Smith"/>
                                        <Avatar size="lg" name="Bob Johnson"/>
                                    </HStack>
                                    <AvatarGroup size="md" max={3}>
                                        <Avatar name="Ryan Florence"/>
                                        <Avatar name="Segun Adebayo"/>
                                        <Avatar name="Kent Dodds"/>
                                        <Avatar name="Prosper Otemuyiwa"/>
                                    </AvatarGroup>
                                </Stack>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardHeader>
                                <Heading size="md">Progress & Loading</Heading>
                            </CardHeader>
                            <CardBody>
                                <Stack spacing={4}>
                                    <Box>
                                        <Text fontSize="sm" mb={2}>Progress Bar</Text>
                                        <Progress value={64} colorScheme="blue"/>
                                    </Box>
                                    <HStack spacing={4}>
                                        <Spinner size="sm" color="blue.500"/>
                                        <Spinner size="md" color="green.500"/>
                                        <Spinner size="lg" color="purple.500"/>
                                    </HStack>
                                    <Stack spacing={2}>
                                        <Skeleton height="20px"/>
                                        <Skeleton height="15px" width="80%"/>
                                    </Stack>
                                </Stack>
                            </CardBody>
                        </Card>
                    </SimpleGrid>
                </Box>

                {/* Feedback */}
                <Box>
                    <Heading as="h2" size="lg" mb={4} color="gray.700">
                        Feedback
                    </Heading>
                    <Stack spacing={4}>
                        <Alert status="success">
                            <AlertIcon/>
                            Data uploaded successfully!
                        </Alert>
                        <Alert status="warning">
                            <AlertIcon/>
                            Your session will expire in 5 minutes.
                        </Alert>
                        <Alert status="error">
                            <AlertIcon/>
                            There was an error processing your request.
                        </Alert>
                        <Alert status="info">
                            <AlertIcon/>
                            New features are now available.
                        </Alert>
                    </Stack>
                </Box>

                {/* Sample Card Layout */}
                <Box>
                    <Heading as="h2" size="lg" mb={4} color="gray.700">
                        Card Examples
                    </Heading>
                    <SimpleGrid columns={{base: 1, md: 2, lg: 3}} spacing={6}>
                        <Card>
                            <CardHeader>
                                <HStack>
                                    <Avatar size="sm" name="Sarah Connor"/>
                                    <Box>
                                        <Heading size="sm">Sarah Connor</Heading>
                                        <Text fontSize="sm" color="gray.500">2 hours ago</Text>
                                    </Box>
                                </HStack>
                            </CardHeader>
                            <CardBody>
                                <Text>
                                    Just finished implementing the new dashboard. The user experience is much better
                                    now!
                                </Text>
                            </CardBody>
                            <CardFooter>
                                <HStack spacing={2}>
                                    <IconButton
                                        aria-label="Like post"
                                        icon={<FaHeart/>}
                                        size="sm"
                                        variant="ghost"
                                        colorScheme="red"
                                    />
                                    <Text fontSize="sm" color="gray.500">24 likes</Text>
                                </HStack>
                            </CardFooter>
                        </Card>

                        <Card>
                            <CardBody>
                                <Stack spacing={3}>
                                    <Heading size="md">Product Analytics</Heading>
                                    <Text color="gray.600">
                                        View detailed analytics and insights for your products.
                                    </Text>
                                    <HStack>
                                        <Badge colorScheme="green">+12.5%</Badge>
                                        <Text fontSize="sm">vs last month</Text>
                                    </HStack>
                                </Stack>
                            </CardBody>
                            <CardFooter>
                                <Button colorScheme="blue" size="sm">
                                    View Details
                                </Button>
                            </CardFooter>
                        </Card>

                        <Card>
                            <CardHeader>
                                <Heading size="md">Team Settings</Heading>
                            </CardHeader>
                            <CardBody>
                                <Stack spacing={3}>
                                    <FormControl display="flex" alignItems="center" justifyContent="space-between">
                                        <FormLabel htmlFor="notifications" mb="0" fontSize="sm">
                                            Email notifications
                                        </FormLabel>
                                        <Switch id="notifications"/>
                                    </FormControl>
                                    <FormControl display="flex" alignItems="center" justifyContent="space-between">
                                        <FormLabel htmlFor="auto-save" mb="0" fontSize="sm">
                                            Auto-save changes
                                        </FormLabel>
                                        <Switch id="auto-save" defaultChecked/>
                                    </FormControl>
                                </Stack>
                            </CardBody>
                        </Card>
                    </SimpleGrid>
                </Box>

                {/* Footer */}
                <Divider/>
                <Box textAlign="center" py={4}>
                    <Text color="gray.500">
                        Built with ❤️ using Chakra UI and Storybook
                    </Text>
                </Box>
            </VStack>
        </Box>
    ),
};

export const QuickReference: Story = {
    render: () => (
        <Box maxW="800px" mx="auto" p={6}>
            <VStack spacing={6} align="stretch">
                <Heading as="h1" size="xl" textAlign="center" color="blue.600">
                    Component Quick Reference
                </Heading>

                <SimpleGrid columns={{base: 1, md: 2}} spacing={6}>
                    <Card>
                        <CardHeader>
                            <Heading size="md">Form Components</Heading>
                        </CardHeader>
                        <CardBody>
                            <Stack spacing={2} fontSize="sm">
                                <Text>• Button - Primary actions and interactions</Text>
                                <Text>• IconButton - Icon-only actions</Text>
                                <Text>• Input - Text input fields</Text>
                                <Text>• Textarea - Multi-line text input</Text>
                                <Text>• Select - Dropdown selection</Text>
                                <Text>• Checkbox - Multiple selections</Text>
                                <Text>• Radio - Single selection from options</Text>
                                <Text>• Switch - Toggle on/off states</Text>
                            </Stack>
                        </CardBody>
                    </Card>

                    <Card>
                        <CardHeader>
                            <Heading size="md">Display Components</Heading>
                        </CardHeader>
                        <CardBody>
                            <Stack spacing={2} fontSize="sm">
                                <Text>• Avatar - User profile pictures</Text>
                                <Text>• Badge - Status indicators</Text>
                                <Text>• Tag - Categorization labels</Text>
                                <Text>• Card - Content containers</Text>
                                <Text>• Alert - Important messages</Text>
                                <Text>• Table - Tabular data</Text>
                                <Text>• Skeleton - Loading placeholders</Text>
                                <Text>• Spinner - Loading indicators</Text>
                            </Stack>
                        </CardBody>
                    </Card>

                    <Card>
                        <CardHeader>
                            <Heading size="md">Feedback Components</Heading>
                        </CardHeader>
                        <CardBody>
                            <Stack spacing={2} fontSize="sm">
                                <Text>• Alert - System messages</Text>
                                <Text>• Progress - Task completion</Text>
                                <Text>• Spinner - Loading states</Text>
                                <Text>• Skeleton - Content loading</Text>
                                <Text>• Modal - Overlays and dialogs</Text>
                                <Text>• Toast - Temporary notifications</Text>
                            </Stack>
                        </CardBody>
                    </Card>

                    <Card>
                        <CardHeader>
                            <Heading size="md">Navigation Components</Heading>
                        </CardHeader>
                        <CardBody>
                            <Stack spacing={2} fontSize="sm">
                                <Text>• Breadcrumb - Navigation trail</Text>
                                <Text>• Tabs - Content organization</Text>
                                <Text>• Menu - Action menus</Text>
                                <Text>• Pagination - Data navigation</Text>
                            </Stack>
                        </CardBody>
                    </Card>
                </SimpleGrid>
            </VStack>
        </Box>
    ),
};
