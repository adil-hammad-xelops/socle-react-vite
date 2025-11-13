import {useState} from 'react';
import {
    Alert,
    AlertIcon,
    Avatar,
    AvatarGroup,
    Badge,
    Box,
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
    Select,
    SimpleGrid,
    Skeleton,
    Slider,
    SliderFilledTrack,
    SliderThumb,
    SliderTrack,
    Spinner,
    Switch,
    Tag,
    Text,
    Textarea,
    Tooltip,
    useDisclosure,
    VStack,
} from '@chakra-ui/react';
import {FaEnvelope} from 'react-icons/fa';
import {DemoContainer, ExampleSection, SectionTitle} from './AllComponentsDemo.styled';

const AllComponentsDemo = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [radioValue, setRadioValue] = useState('1');
    const [sliderValue, setSliderValue] = useState(30);

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
                    <VStack spacing={4} align="stretch">
                        <Box>
                            <Text fontWeight="semibold" mb={2}>Button & IconButton</Text>
                            <HStack spacing={4}>
                                <Button colorScheme="blue">Primary Button</Button>
                                <Button colorScheme="gray" variant="outline">Secondary</Button>
                                <Button colorScheme="red" variant="ghost">Ghost</Button>
                                <IconButton aria-label="Email" icon={<FaEnvelope/>}/>
                            </HStack>
                        </Box>

                        <Box>
                            <Text fontWeight="semibold" mb={2}>Input & Textarea</Text>
                            <VStack spacing={3} align="stretch">
                                <Input placeholder="Enter your text"/>
                                <Textarea placeholder="Enter your message"/>
                            </VStack>
                        </Box>

                        <Box>
                            <Text fontWeight="semibold" mb={2}>Checkbox & Radio</Text>
                            <VStack spacing={3} align="start">
                                <Checkbox defaultChecked>Accept terms and conditions</Checkbox>
                                <RadioGroup onChange={setRadioValue} value={radioValue}>
                                    <HStack spacing={4}>
                                        <Radio value="1">Option 1</Radio>
                                        <Radio value="2">Option 2</Radio>
                                        <Radio value="3">Option 3</Radio>
                                    </HStack>
                                </RadioGroup>
                            </VStack>
                        </Box>

                        <Box>
                            <Text fontWeight="semibold" mb={2}>Select & Switch</Text>
                            <HStack spacing={4} align="center">
                                <Select placeholder="Choose option" maxW="200px">
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </Select>
                                <Switch colorScheme="blue"/>
                            </HStack>
                        </Box>

                        <Box>
                            <Text fontWeight="semibold" mb={2}>Slider</Text>
                            <Slider
                                aria-label="slider-ex-1"
                                value={sliderValue}
                                onChange={(val) => setSliderValue(val)}
                                maxW="300px"
                            >
                                <SliderTrack>
                                    <SliderFilledTrack/>
                                </SliderTrack>
                                <SliderThumb/>
                            </Slider>
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
                            <Text fontWeight="semibold" mb={2}>Badge & Tag</Text>
                            <HStack spacing={2}>
                                <Badge colorScheme="blue">New</Badge>
                                <Badge colorScheme="green">Success</Badge>
                                <Tag colorScheme="purple">Tag</Tag>
                            </HStack>
                        </Box>

                        <Box>
                            <Text fontWeight="semibold" mb={2}>Avatar & Avatar Group</Text>
                            <VStack spacing={3}>
                                <Avatar name="John Doe"/>
                                <AvatarGroup size="sm" max={3}>
                                    <Avatar name="Ryan Florence"/>
                                    <Avatar name="Segun Adebayo"/>
                                    <Avatar name="Kent Dodds"/>
                                    <Avatar name="Prosper Otemuyiwa"/>
                                </AvatarGroup>
                            </VStack>
                        </Box>

                        <Box>
                            <Text fontWeight="semibold" mb={2}>Card</Text>
                            <Card maxW="300px">
                                <CardHeader>
                                    <Heading size="md">Sample Card</Heading>
                                </CardHeader>
                                <CardBody>
                                    <Text>This is a sample card with header, body, and footer.</Text>
                                </CardBody>
                                <CardFooter>
                                    <Button size="sm">Action</Button>
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
                            <Text fontWeight="semibold" mb={2}>Alert</Text>
                            <Alert status="success">
                                <AlertIcon/>
                                Data uploaded successfully!
                            </Alert>
                        </Box>

                        <Box>
                            <Text fontWeight="semibold" mb={2}>Loading States</Text>
                            <HStack spacing={4}>
                                <Spinner color="blue.500"/>
                                <Progress value={64} colorScheme="blue" w="200px"/>
                            </HStack>
                        </Box>

                        <Box>
                            <Text fontWeight="semibold" mb={2}>Skeleton</Text>
                            <VStack spacing={2} align="stretch" maxW="300px">
                                <Skeleton height="20px"/>
                                <Skeleton height="20px"/>
                                <Skeleton height="20px"/>
                            </VStack>
                        </Box>

                        <Box>
                            <Text fontWeight="semibold" mb={2}>Tooltip</Text>
                            <Tooltip label="This is a helpful tooltip">
                                <Button>Hover me</Button>
                            </Tooltip>
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
                        <Text fontWeight="semibold" mb={2}>Modal</Text>
                        <Button onClick={onOpen}>Open Modal</Button>
                        <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay/>
                            <ModalContent>
                                <ModalHeader>Modal Title</ModalHeader>
                                <ModalCloseButton/>
                                <ModalBody>
                                    This is a sample modal with header, body, and footer.
                                </ModalBody>
                                <ModalFooter>
                                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                                        Close
                                    </Button>
                                    <Button variant="ghost">Secondary Action</Button>
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
