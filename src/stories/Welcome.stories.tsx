import type {Meta, StoryObj} from '@storybook/react';
import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  Divider,
  Heading,
  HStack,
  Icon,
  Link,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import {FaBook, FaCheckCircle, FaCode, FaPalette, FaReact, FaRocket} from 'react-icons/fa';

const meta: Meta = {
    title: 'Welcome/Getting Started',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Welcome to the UI Component Library! This is your starting point for exploring all available components.',
            },
        },
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Welcome: Story = {
    render: () => (
        <Box bg="gray.50" minH="100vh">
            <Box maxW="1200px" mx="auto" p={8}>
                <VStack spacing={12} align="stretch">
                    {/* Hero Section */}
                    <Box textAlign="center" py={12}>
                        <Badge colorScheme="blue" mb={4} px={3} py={1} rounded="full">
                            v2.0.0
                        </Badge>
                        <Heading as="h1" size="3xl" mb={6} bgGradient="linear(to-r, blue.400, purple.500)"
                                 bgClip="text">
                            UI Component Library
                        </Heading>
                        <Text fontSize="xl" color="gray.600" mb={8} maxW="600px" mx="auto">
                            A comprehensive collection of reusable UI components built with Chakra UI,
                            TypeScript, and modern React patterns. Perfect for building consistent,
                            accessible, and beautiful user interfaces.
                        </Text>
                        <HStack spacing={4} justify="center">
                            <Button colorScheme="blue" size="lg" leftIcon={<FaRocket/>}>
                                Explore Components
                            </Button>
                            <Button variant="outline" size="lg" leftIcon={<FaBook/>}>
                                Documentation
                            </Button>
                        </HStack>
                    </Box>

                    <Divider/>

                    {/* Features Section */}
                    <Box>
                        <Heading as="h2" size="xl" textAlign="center" mb={8}>
                            Key Features
                        </Heading>
                        <SimpleGrid columns={{base: 1, md: 2, lg: 3}} spacing={8}>
                            <Card>
                                <CardBody textAlign="center">
                                    <Icon as={FaReact} w={12} h={12} color="blue.500" mb={4}/>
                                    <Heading as="h3" size="md" mb={3}>
                                        React + TypeScript
                                    </Heading>
                                    <Text color="gray.600">
                                        Built with modern React patterns and full TypeScript support for better
                                        development experience.
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardBody textAlign="center">
                                    <Icon as={FaPalette} w={12} h={12} color="purple.500" mb={4}/>
                                    <Heading as="h3" size="md" mb={3}>
                                        Chakra UI Foundation
                                    </Heading>
                                    <Text color="gray.600">
                                        Leverages Chakra UI's design system for consistent theming, accessibility, and
                                        responsive design.
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardBody textAlign="center">
                                    <Icon as={FaCode} w={12} h={12} color="green.500" mb={4}/>
                                    <Heading as="h3" size="md" mb={3}>
                                        Developer Friendly
                                    </Heading>
                                    <Text color="gray.600">
                                        Well-documented components with Storybook integration and comprehensive
                                        examples.
                                    </Text>
                                </CardBody>
                            </Card>
                        </SimpleGrid>
                    </Box>

                    <Divider/>

                    {/* What's Included */}
                    <SimpleGrid columns={{base: 1, lg: 2}} spacing={12}>
                        <Box>
                            <Heading as="h2" size="lg" mb={6}>
                                What's Included
                            </Heading>
                            <List spacing={3}>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500"/>
                                    <strong>30+ UI Components</strong> - From basic buttons to complex data tables
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500"/>
                                    <strong>Form Controls</strong> - Inputs, selects, checkboxes, radios, and switches
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500"/>
                                    <strong>Data Display</strong> - Tables, cards, avatars, badges, and more
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500"/>
                                    <strong>Feedback Components</strong> - Alerts, spinners, progress bars, skeletons
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500"/>
                                    <strong>Navigation</strong> - Breadcrumbs, tabs, menus, and pagination
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500"/>
                                    <strong>Overlay Components</strong> - Modals, tooltips, and popovers
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500"/>
                                    <strong>Responsive Design</strong> - Mobile-first approach with breakpoint support
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500"/>
                                    <strong>Dark Mode Support</strong> - Built-in theme switching capabilities
                                </ListItem>
                            </List>
                        </Box>

                        <Box>
                            <Heading as="h2" size="lg" mb={6}>
                                Getting Started
                            </Heading>
                            <VStack spacing={4} align="stretch">
                                <Card variant="outline">
                                    <CardBody>
                                        <Heading as="h3" size="sm" mb={2}>
                                            1. Explore Components
                                        </Heading>
                                        <Text fontSize="sm" color="gray.600">
                                            Browse through the component library to see all available UI elements and
                                            their variations.
                                        </Text>
                                    </CardBody>
                                </Card>

                                <Card variant="outline">
                                    <CardBody>
                                        <Heading as="h3" size="sm" mb={2}>
                                            2. View Interactive Examples
                                        </Heading>
                                        <Text fontSize="sm" color="gray.600">
                                            Each component includes interactive examples with customizable props and
                                            live previews.
                                        </Text>
                                    </CardBody>
                                </Card>

                                <Card variant="outline">
                                    <CardBody>
                                        <Heading as="h3" size="sm" mb={2}>
                                            3. Copy & Use
                                        </Heading>
                                        <Text fontSize="sm" color="gray.600">
                                            Copy the code examples and integrate them directly into your React
                                            application.
                                        </Text>
                                    </CardBody>
                                </Card>

                                <Card variant="outline">
                                    <CardBody>
                                        <Heading as="h3" size="sm" mb={2}>
                                            4. Customize & Extend
                                        </Heading>
                                        <Text fontSize="sm" color="gray.600">
                                            Modify themes, extend components, and adapt them to match your design
                                            requirements.
                                        </Text>
                                    </CardBody>
                                </Card>
                            </VStack>
                        </Box>
                    </SimpleGrid>

                    <Divider/>

                    {/* Quick Links */}
                    <Box textAlign="center">
                        <Heading as="h2" size="lg" mb={8}>
                            Quick Navigation
                        </Heading>
                        <SimpleGrid columns={{base: 2, md: 4}} spacing={4} maxW="600px" mx="auto">
                            <Link href="?path=/story/ui-button--default" _hover={{textDecoration: 'none'}}>
                                <Card _hover={{transform: 'translateY(-2px)', transition: 'all 0.2s'}}>
                                    <CardBody textAlign="center" py={6}>
                                        <Text fontWeight="medium">Buttons</Text>
                                    </CardBody>
                                </Card>
                            </Link>

                            <Link href="?path=/story/ui-input--default" _hover={{textDecoration: 'none'}}>
                                <Card _hover={{transform: 'translateY(-2px)', transition: 'all 0.2s'}}>
                                    <CardBody textAlign="center" py={6}>
                                        <Text fontWeight="medium">Forms</Text>
                                    </CardBody>
                                </Card>
                            </Link>

                            <Link href="?path=/story/ui-card--default" _hover={{textDecoration: 'none'}}>
                                <Card _hover={{transform: 'translateY(-2px)', transition: 'all 0.2s'}}>
                                    <CardBody textAlign="center" py={6}>
                                        <Text fontWeight="medium">Layout</Text>
                                    </CardBody>
                                </Card>
                            </Link>

                            <Link href="?path=/story/overview-all-components--component-showcase"
                                  _hover={{textDecoration: 'none'}}>
                                <Card _hover={{transform: 'translateY(-2px)', transition: 'all 0.2s'}}>
                                    <CardBody textAlign="center" py={6}>
                                        <Text fontWeight="medium">Overview</Text>
                                    </CardBody>
                                </Card>
                            </Link>
                        </SimpleGrid>
                    </Box>

                    {/* Footer */}
                    <Box textAlign="center" pt={8} pb={4}>
                        <Text color="gray.500" fontSize="sm">
                            Built with ❤️ using{' '}
                            <Link href="https://chakra-ui.com" color="blue.500" isExternal>
                                Chakra UI
                            </Link>
                            {' '}and{' '}
                            <Link href="https://storybook.js.org" color="purple.500" isExternal>
                                Storybook
                            </Link>
                        </Text>
                    </Box>
                </VStack>
            </Box>
        </Box>
    ),
};
