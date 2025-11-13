import {useState} from 'react';
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Alert,
    AlertIcon,
    Avatar,
    AvatarGroup,
    Badge,
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Checkbox,
    Divider,
    Heading,
    HStack,
    IconButton,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Progress,
    Radio,
    RadioGroup,
    SimpleGrid,
    Skeleton,
    Slider,
    SliderFilledTrack,
    SliderThumb,
    SliderTrack,
    Spinner,
    Switch,
    Tab,
    Table,
    TableContainer,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Tag,
    Tbody,
    Td,
    Text,
    Textarea,
    Th,
    Thead,
    Tooltip,
    Tr,
    useDisclosure,
    useToast,
    VStack,
} from '@chakra-ui/react';
import {FaChevronRight, FaEnvelope} from 'react-icons/fa';
import {DemoContainer, ExampleSection, SectionTitle} from './AllComponentsDemo.styled';

const AllComponentsDemo = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [radioValue, setRadioValue] = useState('1');
    const [sliderValue, setSliderValue] = useState(30);
    const toast = useToast();

    const showToast = () => {
        toast({
            title: 'Success!',
            description: 'This is a sample toast notification.',
            status: 'success',
            duration: 3000,
            isClosable: true,
        });
    };

    return (
        <Box p={4}>
            <Box mb={8} textAlign="center">
                <Heading as="h1" size="2xl" mb={4}>
                    Complete Component Library
                </Heading>
                <Text fontSize="xl" color="gray.500">
                    A comprehensive demonstration of all UI components
                </Text>
            </Box>

            <Divider my={6}/>

            {/* Form Components */}
            <ExampleSection>
                <SectionTitle as="h2" size="lg" mb={6}>
                    Form Components
                </SectionTitle>
                <DemoContainer>
                    <VStack spacing={6} align="stretch">
                        <Box>
                            <Text fontWeight="semibold" mb={3}>Buttons</Text>
                            <HStack spacing={4} flexWrap="wrap">
                                <Button colorScheme="blue">Primary Button</Button>
                                <Button colorScheme="gray" variant="outline">Secondary</Button>
                                <Button colorScheme="red" variant="ghost">Ghost</Button>
                                <IconButton aria-label="Email" icon={<FaEnvelope/>} colorScheme="teal"/>
                            </HStack>
                        </Box>

                        <Box>
                            <Text fontWeight="semibold" mb={3}>Input Fields</Text>
                            <VStack spacing={3} align="stretch" maxW="400px">
                                <Input placeholder="Basic input"/>
                                <Input type="password" placeholder="Password field"/>
                                <Textarea placeholder="Enter your message here..." rows={3}/>
                            </VStack>
                        </Box>

                        <Box>
                            <Text fontWeight="semibold" mb={3}>Selection Controls</Text>
                            <VStack spacing={4} align="start">
                                <Checkbox defaultChecked>Accept terms and conditions</Checkbox>
                                <RadioGroup onChange={setRadioValue} value={radioValue}>
                                    <HStack spacing={4}>
                                        <Radio value="1">Option 1</Radio>
                                        <Radio value="2">Option 2</Radio>
                                        <Radio value="3">Option 3</Radio>
                                    </HStack>
                                </RadioGroup>
                                <HStack spacing={4} align="center">
                                    <Text>Toggle Switch:</Text>
                                    <Switch colorScheme="blue"/>
                                </HStack>
                            </VStack>
                        </Box>

                        <Box>
                            <Text fontWeight="semibold" mb={3}>Slider</Text>
                            <Box maxW="300px">
                                <Slider
                                    value={sliderValue}
                                    onChange={(val) => setSliderValue(val)}
                                    colorScheme="blue"
                                >
                                    <SliderTrack>
                                        <SliderFilledTrack/>
                                    </SliderTrack>
                                    <SliderThumb/>
                                </Slider>
                                <Text fontSize="sm" color="gray.500" mt={1}>Value: {sliderValue}</Text>
                            </Box>
                        </Box>
                    </VStack>
                </DemoContainer>
            </ExampleSection>

            {/* Data Display */}
            <ExampleSection>
                <SectionTitle as="h2" size="lg" mb={6}>
                    Data Display
                </SectionTitle>
                <DemoContainer>
                    <SimpleGrid columns={{base: 1, md: 2, lg: 3}} spacing={6}>
                        <Box>
                            <Text fontWeight="semibold" mb={3}>Badges & Tags</Text>
                            <VStack spacing={3} align="start">
                                <HStack spacing={2}>
                                    <Badge colorScheme="blue">New</Badge>
                                    <Badge colorScheme="green">Success</Badge>
                                    <Badge colorScheme="red">Error</Badge>
                                </HStack>
                                <HStack spacing={2}>
                                    <Tag colorScheme="purple">Purple Tag</Tag>
                                    <Tag colorScheme="orange">Orange Tag</Tag>
                                </HStack>
                            </VStack>
                        </Box>

                        <Box>
                            <Text fontWeight="semibold" mb={3}>Avatar & Avatar Group</Text>
                            <VStack spacing={4}>
                                <Avatar name="John Doe" size="lg"/>
                                <AvatarGroup size="md" max={3}>
                                    <Avatar name="Ryan Florence"/>
                                    <Avatar name="Segun Adebayo"/>
                                    <Avatar name="Kent Dodds"/>
                                    <Avatar name="Prosper Otemuyiwa"/>
                                </AvatarGroup>
                            </VStack>
                        </Box>

                        <Box>
                            <Text fontWeight="semibold" mb={3}>Card</Text>
                            <Card maxW="300px">
                                <CardHeader>
                                    <Heading size="md">Sample Card</Heading>
                                </CardHeader>
                                <CardBody>
                                    <Text>This is a sample card with header, body, and footer sections.</Text>
                                </CardBody>
                                <CardFooter>
                                    <Button size="sm" colorScheme="blue">View Details</Button>
                                </CardFooter>
                            </Card>
                        </Box>
                    </SimpleGrid>
                </DemoContainer>
            </ExampleSection>

            {/* Feedback */}
            <ExampleSection>
                <SectionTitle as="h2" size="lg" mb={6}>
                    Feedback Components
                </SectionTitle>
                <DemoContainer>
                    <VStack spacing={4} align="stretch">
                        <Box>
                            <Text fontWeight="semibold" mb={3}>Alerts</Text>
                            <VStack spacing={3}>
                                <Alert status="success">
                                    <AlertIcon/>
                                    Data uploaded successfully!
                                </Alert>
                                <Alert status="error">
                                    <AlertIcon/>
                                    There was an error processing your request.
                                </Alert>
                            </VStack>
                        </Box>

                        <Box>
                            <Text fontWeight="semibold" mb={3}>Loading States</Text>
                            <HStack spacing={6}>
                                <Spinner color="blue.500" size="lg"/>
                                <Progress value={64} colorScheme="green" w="200px"/>
                            </HStack>
                        </Box>

                        <Box>
                            <Text fontWeight="semibold" mb={3}>Skeleton Loading</Text>
                            <VStack spacing={2} align="stretch" maxW="300px">
                                <Skeleton height="20px"/>
                                <Skeleton height="20px"/>
                                <Skeleton height="20px"/>
                            </VStack>
                        </Box>

                        <Box>
                            <Text fontWeight="semibold" mb={3}>Tooltip & Toast</Text>
                            <HStack spacing={4}>
                                <Tooltip label="This is a helpful tooltip" placement="top">
                                    <Button>Hover for tooltip</Button>
                                </Tooltip>
                                <Button onClick={showToast} colorScheme="green">Show Toast</Button>
                            </HStack>
                        </Box>
                    </VStack>
                </DemoContainer>
            </ExampleSection>

            {/* Navigation */}
            <ExampleSection>
                <SectionTitle as="h2" size="lg" mb={6}>
                    Navigation Components
                </SectionTitle>
                <DemoContainer>
                    <VStack spacing={6} align="stretch">
                        <Box>
                            <Text fontWeight="semibold" mb={3}>Breadcrumb</Text>
                            <Breadcrumb spacing="8px" separator={<FaChevronRight color="gray.500"/>}>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="#">Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="#">Components</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbItem isCurrentPage>
                                    <BreadcrumbLink href="#">Demo</BreadcrumbLink>
                                </BreadcrumbItem>
                            </Breadcrumb>
                        </Box>

                        <Box>
                            <Text fontWeight="semibold" mb={3}>Tabs</Text>
                            <Tabs>
                                <TabList>
                                    <Tab>Tab 1</Tab>
                                    <Tab>Tab 2</Tab>
                                    <Tab>Tab 3</Tab>
                                </TabList>
                                <TabPanels>
                                    <TabPanel>
                                        <Text>Content for Tab 1</Text>
                                    </TabPanel>
                                    <TabPanel>
                                        <Text>Content for Tab 2</Text>
                                    </TabPanel>
                                    <TabPanel>
                                        <Text>Content for Tab 3</Text>
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>
                        </Box>
                    </VStack>
                </DemoContainer>
            </ExampleSection>

            {/* Data Structures */}
            <ExampleSection>
                <SectionTitle as="h2" size="lg" mb={6}>
                    Data Structures
                </SectionTitle>
                <DemoContainer>
                    <VStack spacing={6} align="stretch">
                        <Box>
                            <Text fontWeight="semibold" mb={3}>Table</Text>
                            <TableContainer>
                                <Table variant="simple">
                                    <Thead>
                                        <Tr>
                                            <Th>Name</Th>
                                            <Th>Email</Th>
                                            <Th>Role</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr>
                                            <Td>John Doe</Td>
                                            <Td>john@example.com</Td>
                                            <Td>Admin</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>Jane Smith</Td>
                                            <Td>jane@example.com</Td>
                                            <Td>User</Td>
                                        </Tr>
                                    </Tbody>
                                </Table>
                            </TableContainer>
                        </Box>

                        <Box>
                            <Text fontWeight="semibold" mb={3}>Accordion</Text>
                            <Accordion defaultIndex={[0]} allowMultiple>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box flex="1" textAlign="left">
                                                Section 1 title
                                            </Box>
                                            <AccordionIcon/>
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </AccordionPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box flex="1" textAlign="left">
                                                Section 2 title
                                            </Box>
                                            <AccordionIcon/>
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </Box>
                    </VStack>
                </DemoContainer>
            </ExampleSection>

            {/* Overlays */}
            <ExampleSection>
                <SectionTitle as="h2" size="lg" mb={6}>
                    Overlay Components
                </SectionTitle>
                <DemoContainer>
                    <Box>
                        <Text fontWeight="semibold" mb={3}>Modal</Text>
                        <Button onClick={onOpen} colorScheme="blue">Open Modal</Button>
                        <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay/>
                            <ModalContent>
                                <ModalHeader>Sample Modal</ModalHeader>
                                <ModalCloseButton/>
                                <ModalBody>
                                    <Text>This is a sample modal dialog with header, body, and footer.</Text>
                                </ModalBody>
                                <ModalFooter>
                                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                                        Save
                                    </Button>
                                    <Button variant="ghost" onClick={onClose}>Cancel</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </Box>
                </DemoContainer>
            </ExampleSection>
        </Box>
    );
};

export default AllComponentsDemo;

