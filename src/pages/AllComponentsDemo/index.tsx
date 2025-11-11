import {useState} from 'react';
import {Box, Divider, Grid, Stack, Typography} from '@mui/material';
import {Footer, Header, PageLayout} from 'components/layout';
import {Badge, Button, Card, Dropdown, Input, Modal, Tooltip} from 'components/ui';
import {Checkbox, Form, RadioButton, SearchBar, Select, TextArea} from 'components/forms';
import {Breadcrumb, Navbar, Pagination, Sidebar, Tabs} from 'components/navigation';
import {Alert, EmptyState, Loader, Notification, Skeleton, Spinner, Toast} from 'components/feedback';
import {Accordion, List, StatsCard, Table} from 'components/data-display';
import {Avatar} from 'components/misc';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {DemoContainer, ExampleSection, SectionTitle} from './AllComponentsDemo.styled';

const AllComponentsDemo = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [toastOpen, setToastOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [selectedRadio, setSelectedRadio] = useState('option1');
    const [page, setPage] = useState(1);

    return (
        <PageLayout title="All Components Demo" showHeader={false} showFooter={false}>
            <Box sx={{py: 4}}>
                {/* Page Title */}
                <Box sx={{mb: 4, textAlign: 'center'}}>
                    <Typography variant="h2" gutterBottom>
                        Complete Component Library
                    </Typography>
                    <Typography variant="h5" color="text.secondary" paragraph>
                        46 Production-Ready Components
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Explore all available components with interactive examples and code snippets
                    </Typography>
                </Box>

                <Divider sx={{my: 4}}/>

                {/* Layout Components */}
                <ExampleSection>
                    <SectionTitle variant="h3" gutterBottom>
                        Layout Components
                    </SectionTitle>

                    <DemoContainer>
                        <Typography variant="h6" gutterBottom>Header Component</Typography>
                        <Header title="Demo Header" showMenu onMenuClick={() => setSidebarOpen(true)}/>

                        <Box sx={{mt: 3}}>
                            <Typography variant="h6" gutterBottom>Footer Component</Typography>
                            <Footer companyName="Demo Company"/>
                        </Box>
                    </DemoContainer>
                </ExampleSection>

                <Divider sx={{my: 4}}/>

                {/* UI Components */}
                <ExampleSection>
                    <SectionTitle variant="h3" gutterBottom>
                        UI Components
                    </SectionTitle>

                    <DemoContainer>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant="h6" gutterBottom>Buttons</Typography>
                                <Stack direction="row" spacing={2} flexWrap="wrap">
                                    <Button variant="contained" color="primary">Primary</Button>
                                    <Button variant="contained" color="secondary">Secondary</Button>
                                    <Button variant="outlined">Outlined</Button>
                                    <Button variant="text">Text</Button>
                                    <Button loading>Loading</Button>
                                    <Button startIcon={<MailIcon/>}>With Icon</Button>
                                </Stack>
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <Typography variant="h6" gutterBottom>Card</Typography>
                                <Card
                                    title="Sample Card"
                                    subtitle="Card subtitle"
                                    actions={<Button size="small">Action</Button>}
                                >
                                    This is card content with actions and subtitle.
                                </Card>
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <Typography variant="h6" gutterBottom>Tooltip & Badge</Typography>
                                <Stack spacing={2}>
                                    <Tooltip title="This is a tooltip">
                                        <Button>Hover Me</Button>
                                    </Tooltip>
                                    <Box>
                                        <Badge badgeContent={4} color="primary">
                                            <NotificationsIcon/>
                                        </Badge>
                                        <Badge badgeContent={99} color="error" sx={{ml: 3}}>
                                            <MailIcon/>
                                        </Badge>
                                    </Box>
                                </Stack>
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <Typography variant="h6" gutterBottom>Dropdown</Typography>
                                <Dropdown
                                    label="Select Option"
                                    options={[
                                        {label: 'Option 1', value: '1'},
                                        {label: 'Option 2', value: '2'},
                                        {label: 'Option 3', value: '3'},
                                    ]}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Typography variant="h6" gutterBottom>Input Fields</Typography>
                                <form onSubmit={(e) => e.preventDefault()}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={6}>
                                            <Input label="Text Input" placeholder="Enter text..."/>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <Input label="Email" type="email" placeholder="your@email.com"/>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <Input label="Password (Demo)" type="text" placeholder="password123"/>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <Input label="Disabled" disabled value="Disabled input"/>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Grid>

                            <Grid item xs={12}>
                                <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
                            </Grid>
                        </Grid>
                    </DemoContainer>
                </ExampleSection>

                <Divider sx={{my: 4}}/>

                {/* Form Components */}
                <ExampleSection>
                    <SectionTitle variant="h3" gutterBottom>
                        Form Components
                    </SectionTitle>

                    <DemoContainer>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <Typography variant="h6" gutterBottom>Search Bar</Typography>
                                <SearchBar
                                    placeholder="Search..."
                                    value={searchValue}
                                    onChange={setSearchValue}
                                    onSearch={(val) => alert(`Searching: ${val}`)}
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <Typography variant="h6" gutterBottom>Select</Typography>
                                <Select
                                    label="Choose Option"
                                    options={[
                                        {label: 'First', value: 'first'},
                                        {label: 'Second', value: 'second'},
                                        {label: 'Third', value: 'third'},
                                    ]}
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <Typography variant="h6" gutterBottom>Checkboxes</Typography>
                                <Stack>
                                    <Checkbox label="Option 1"/>
                                    <Checkbox label="Option 2" defaultChecked/>
                                    <Checkbox label="Disabled" disabled/>
                                </Stack>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <Typography variant="h6" gutterBottom>Radio Buttons</Typography>
                                <RadioButton
                                    label="Select One"
                                    options={[
                                        {label: 'Option 1', value: 'option1'},
                                        {label: 'Option 2', value: 'option2'},
                                        {label: 'Option 3', value: 'option3'},
                                    ]}
                                    value={selectedRadio}
                                    onChange={setSelectedRadio}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Typography variant="h6" gutterBottom>Text Area</Typography>
                                <TextArea label="Description" placeholder="Enter description..." rows={3}/>
                            </Grid>

                            <Grid item xs={12}>
                                <Typography variant="h6" gutterBottom>Complete Form</Typography>
                                <Form onSubmit={(_) => alert('Form submitted!')}>
                                    <Input label="Name" required/>
                                    <Input label="Email" type="email" required/>
                                    <TextArea label="Message" rows={3}/>
                                    <Button type="submit">Submit Form</Button>
                                </Form>
                            </Grid>
                        </Grid>
                    </DemoContainer>
                </ExampleSection>

                <Divider sx={{my: 4}}/>

                {/* Navigation Components */}
                <ExampleSection>
                    <SectionTitle variant="h3" gutterBottom>
                        Navigation Components
                    </SectionTitle>

                    <DemoContainer>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant="h6" gutterBottom>Navbar</Typography>
                                <Navbar
                                    title="Demo App"
                                    items={[
                                        {label: 'Home', path: '/'},
                                        {label: 'About', path: '/about'},
                                        {label: 'Contact', path: '/contact'},
                                    ]}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Typography variant="h6" gutterBottom>Breadcrumb</Typography>
                                <Breadcrumb
                                    items={[
                                        {label: 'Home', href: '/'},
                                        {label: 'Components', href: '/components'},
                                        {label: 'Demo', href: '/demo'},
                                    ]}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Typography variant="h6" gutterBottom>Pagination</Typography>
                                <Pagination count={10} page={page} onChange={(_, p) => setPage(p)}/>
                            </Grid>

                            <Grid item xs={12}>
                                <Button onClick={() => setSidebarOpen(true)}>Open Sidebar</Button>
                            </Grid>

                            <Grid item xs={12}>
                                <Typography variant="h6" gutterBottom>Tabs</Typography>
                                <Tabs
                                    tabs={[
                                        {label: 'Tab 1', content: <Typography>Content for Tab 1</Typography>},
                                        {label: 'Tab 2', content: <Typography>Content for Tab 2</Typography>},
                                        {label: 'Tab 3', content: <Typography>Content for Tab 3</Typography>},
                                    ]}
                                />
                            </Grid>
                        </Grid>
                    </DemoContainer>
                </ExampleSection>

                <Divider sx={{my: 4}}/>

                {/* Feedback Components */}
                <ExampleSection>
                    <SectionTitle variant="h3" gutterBottom>
                        Feedback Components
                    </SectionTitle>

                    <DemoContainer>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant="h6" gutterBottom>Alerts</Typography>
                                <Stack spacing={2}>
                                    <Alert severity="success" message="Success alert!"/>
                                    <Alert severity="info" message="Info alert"/>
                                    <Alert severity="warning" message="Warning alert"/>
                                    <Alert severity="error" message="Error alert"/>
                                </Stack>
                            </Grid>

                            <Grid item xs={12}>
                                <Typography variant="h6" gutterBottom>Toast</Typography>
                                <Button onClick={() => setToastOpen(true)}>Show Toast</Button>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <Typography variant="h6" gutterBottom>Spinner</Typography>
                                <Spinner text="Loading..."/>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <Typography variant="h6" gutterBottom>Loader</Typography>
                                <Loader text="Processing..."/>
                            </Grid>

                            <Grid item xs={12}>
                                <Typography variant="h6" gutterBottom>Notification</Typography>
                                <Notification severity="info" title="Info" message="This is a notification"/>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <Typography variant="h6" gutterBottom>Skeleton</Typography>
                                <Skeleton lines={3}/>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <Typography variant="h6" gutterBottom>Empty State</Typography>
                                <EmptyState
                                    title="No Data"
                                    description="Nothing to display"
                                    actionLabel="Add Item"
                                    onAction={() => alert('Add clicked')}
                                />
                            </Grid>
                        </Grid>
                    </DemoContainer>
                </ExampleSection>

                <Divider sx={{my: 4}}/>

                {/* Data Display Components */}
                <ExampleSection>
                    <SectionTitle variant="h3" gutterBottom>
                        Data Display Components
                    </SectionTitle>

                    <DemoContainer>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={3}>
                                <StatsCard label="Total Users" value="1,234" color="#4caf50"/>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <StatsCard label="Revenue" value="$45.2K" sublabel="+12% from last month"
                                           color="#2196f3"/>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <StatsCard label="Orders" value="856" color="#ff9800"/>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <StatsCard label="Active Now" value="42" color="#f44336"/>
                            </Grid>

                            <Grid item xs={12}>
                                <Typography variant="h6" gutterBottom>Table</Typography>
                                <Table
                                    columns={[
                                        {key: 'name', label: 'Name'},
                                        {key: 'email', label: 'Email'},
                                        {key: 'role', label: 'Role'},
                                    ]}
                                    data={[
                                        {name: 'John Doe', email: 'john@example.com', role: 'Admin'},
                                        {name: 'Jane Smith', email: 'jane@example.com', role: 'User'},
                                        {name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor'},
                                    ]}
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <Typography variant="h6" gutterBottom>List</Typography>
                                <List
                                    items={['Item 1', 'Item 2', 'Item 3', 'Item 4']}
                                    getLabel={(item) => item}
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <Typography variant="h6" gutterBottom>Accordion</Typography>
                                <Stack spacing={1}>
                                    <Accordion title="Section 1">Content for section 1</Accordion>
                                    <Accordion title="Section 2">Content for section 2</Accordion>
                                    <Accordion title="Section 3" defaultExpanded>Content for section 3 (expanded by
                                        default)</Accordion>
                                </Stack>
                            </Grid>
                        </Grid>
                    </DemoContainer>
                </ExampleSection>

                <Divider sx={{my: 4}}/>

                {/* Misc Components */}
                <ExampleSection>
                    <SectionTitle variant="h3" gutterBottom>
                        Miscellaneous Components
                    </SectionTitle>

                    <DemoContainer>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant="h6" gutterBottom>Avatars</Typography>
                                <Stack direction="row" spacing={2}>
                                    <Avatar alt="User 1" src="https://i.pravatar.cc/150?img=1"/>
                                    <Avatar alt="User 2" src="https://i.pravatar.cc/150?img=2"/>
                                    <Avatar>JD</Avatar>
                                    <Avatar sx={{bgcolor: 'primary.main'}}>AB</Avatar>
                                </Stack>
                            </Grid>

                            <Grid item xs={12}>
                                <Typography variant="h6" gutterBottom>Dividers</Typography>
                                <Box>
                                    <Typography>Content Above</Typography>
                                    <Divider sx={{my: 2}}/>
                                    <Typography>Content Below</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </DemoContainer>
                </ExampleSection>

                {/* Modals and Overlays */}
                <Modal
                    open={modalOpen}
                    onClose={() => setModalOpen(false)}
                    title="Example Modal"
                    actions={
                        <>
                            <Button variant="outlined" onClick={() => setModalOpen(false)}>Cancel</Button>
                            <Button onClick={() => setModalOpen(false)}>Confirm</Button>
                        </>
                    }
                >
                    <Typography>
                        This is the modal content. You can put any content here including forms, text, or other
                        components.
                    </Typography>
                </Modal>

                <Sidebar
                    open={sidebarOpen}
                    onClose={() => setSidebarOpen(false)}
                    items={[
                        {label: 'Home', icon: <HomeIcon/>, onClick: () => setSidebarOpen(false)},
                        {label: 'Settings', icon: <SettingsIcon/>, onClick: () => setSidebarOpen(false)},
                    ]}
                />

                <Toast
                    open={toastOpen}
                    onClose={() => setToastOpen(false)}
                    message="This is a toast notification!"
                    severity="success"
                />
            </Box>
        </PageLayout>
    );
};

export default AllComponentsDemo;

