import {useState} from 'react';
import {Box, Divider, Grid, Paper, Stack, Typography} from '@mui/material';
import {PageLayout} from 'components/layout';
import {Button, Card} from 'components/ui';
import {Breadcrumb, Navbar, Pagination, Sidebar, SidebarMenu, Tabs} from 'components/navigation';
import {ConfirmDialog, Drawer, Overlay} from 'components/overlays';
import {Toast} from 'components/feedback';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleIcon from '@mui/icons-material/People';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import {CodeBlock, DemoContainer, ExampleSection, SectionTitle} from './NavigationOverlayDemo.styled';

const NavigationOverlayDemo = () => {
    // Navigation states
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [page, setPage] = useState(1);
    const [activeTab, setActiveTab] = useState(0);

    // Overlay states
    const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
    const [overlayOpen, setOverlayOpen] = useState(false);
    const [toastOpen, setToastOpen] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    const showToast = (message: string) => {
        setToastMessage(message);
        setToastOpen(true);
    };

    const handleConfirm = () => {
        setConfirmDialogOpen(false);
        showToast('Action confirmed!');
    };

    const handleCancel = () => {
        setConfirmDialogOpen(false);
        showToast('Action cancelled');
    };

    const sidebarItems = [
        {label: 'Home', icon: <HomeIcon/>, onClick: () => showToast('Home clicked')},
        {label: 'Dashboard', icon: <DashboardIcon/>, onClick: () => showToast('Dashboard clicked')},
        {label: 'Users', icon: <PeopleIcon/>, onClick: () => showToast('Users clicked')},
        {label: 'Settings', icon: <SettingsIcon/>, onClick: () => showToast('Settings clicked')},
    ];

    const navbarItems = [
        {label: 'Home', onClick: () => showToast('Home clicked')},
        {label: 'About', onClick: () => showToast('About clicked')},
        {label: 'Services', onClick: () => showToast('Services clicked')},
        {label: 'Contact', onClick: () => showToast('Contact clicked')},
    ];

    const breadcrumbItems = [
        {label: 'Home', href: '/'},
        {label: 'Components', href: '/components'},
        {label: 'Navigation Demo'},
    ];

    const tabItems = [
        {
            label: 'Overview',
            icon: <InfoIcon/>,
            content: (
                <Card title="Overview">
                    <Typography paragraph>
                        This is the overview tab. It contains general information about navigation and overlay
                        components.
                    </Typography>
                    <Typography>
                        Click through the tabs to see different content sections.
                    </Typography>
                </Card>
            ),
        },
        {
            label: 'Features',
            icon: <DashboardIcon/>,
            content: (
                <Card title="Features">
                    <Typography variant="h6" gutterBottom>Key Features:</Typography>
                    <ul>
                        <li>Interactive navigation components</li>
                        <li>Sidebar with icons and callbacks</li>
                        <li>Tabbed interface with content panels</li>
                        <li>Breadcrumb navigation</li>
                        <li>Pagination controls</li>
                        <li>Drawer overlays</li>
                        <li>Confirmation dialogs</li>
                    </ul>
                </Card>
            ),
        },
        {
            label: 'Contact',
            icon: <ContactMailIcon/>,
            content: (
                <Card title="Contact Information">
                    <Typography paragraph>
                        This tab demonstrates how to organize different types of content in a tabbed interface.
                    </Typography>
                    <Button onClick={() => showToast('Contact button clicked')}>
                        Contact Us
                    </Button>
                </Card>
            ),
        },
    ];

    return (
        <PageLayout title="Navigation & Overlay Demo" showHeader showFooter>
            <Box sx={{py: 4}}>
                {/* Page Title */}
                <Box sx={{mb: 4, textAlign: 'center'}}>
                    <Typography variant="h2" gutterBottom>
                        Navigation & Overlay Components
                    </Typography>
                    <Typography variant="h5" color="text.secondary" paragraph>
                        Interactive Examples
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Explore navigation patterns and overlay components with live demos
                    </Typography>
                </Box>

                <Divider sx={{my: 4}}/>

                {/* Navbar Component */}
                <ExampleSection>
                    <SectionTitle variant="h3" gutterBottom>
                        1. Navbar Component
                    </SectionTitle>
                    <Typography variant="body2" color="text.secondary" paragraph>
                        Top navigation bar with menu items. Click menu items to see toast notifications.
                    </Typography>

                    <DemoContainer>
                        <Navbar
                            title="Demo Application"
                            items={navbarItems}
                            showMenuButton
                            onMenuClick={() => setSidebarOpen(true)}
                        />

                        <CodeBlock>
                            <Typography variant="caption" component="pre">
                                {`import { Navbar } from 'components/navigation';

<Navbar
  title="Demo Application"
  items={[
    { label: 'Home', onClick: handleHome },
    { label: 'About', onClick: handleAbout },
    { label: 'Contact', onClick: handleContact },
  ]}
  onMenuClick={() => setSidebarOpen(true)}
/>`}
                            </Typography>
                        </CodeBlock>
                    </DemoContainer>
                </ExampleSection>

                <Divider sx={{my: 4}}/>

                {/* Sidebar Component */}
                <ExampleSection>
                    <SectionTitle variant="h3" gutterBottom>
                        2. Sidebar Component
                    </SectionTitle>
                    <Typography variant="body2" color="text.secondary" paragraph>
                        Drawer navigation with icons. Click the button to open the sidebar.
                    </Typography>

                    <DemoContainer>
                        <Button variant="contained" onClick={() => setSidebarOpen(true)}>
                            Open Sidebar
                        </Button>

                        <CodeBlock>
                            <Typography variant="caption" component="pre">
                                {`import { Sidebar } from 'components/navigation';
import HomeIcon from '@mui/icons-material/Home';

const [open, setOpen] = useState(false);

<Sidebar
  open={open}
  onClose={() => setOpen(false)}
  items={[
    { label: 'Home', icon: <HomeIcon />, onClick: handleClick },
    { label: 'Settings', icon: <SettingsIcon />, onClick: handleClick },
  ]}
  width={240}
  variant="temporary"
/>`}
                            </Typography>
                        </CodeBlock>
                    </DemoContainer>
                </ExampleSection>

                <Divider sx={{my: 4}}/>

                {/* Tabs Component */}
                <ExampleSection>
                    <SectionTitle variant="h3" gutterBottom>
                        3. Tabs Component
                    </SectionTitle>
                    <Typography variant="body2" color="text.secondary" paragraph>
                        Tabbed interface with content panels. Click tabs to switch content.
                    </Typography>

                    <DemoContainer>
                        <Tabs
                            tabs={tabItems}
                            defaultTab={activeTab}
                            onChange={(index) => setActiveTab(index)}
                        />

                        <CodeBlock>
                            <Typography variant="caption" component="pre">
                                {`import { Tabs } from 'components/navigation';

<Tabs
  tabs={[
    {
      label: 'Overview',
      icon: <InfoIcon />,
      content: <div>Overview content</div>,
    },
    {
      label: 'Features',
      content: <div>Features content</div>,
    },
  ]}
  onChange={(index) => console.log('Tab changed:', index)}
/>`}
                            </Typography>
                        </CodeBlock>
                    </DemoContainer>
                </ExampleSection>

                <Divider sx={{my: 4}}/>

                {/* Breadcrumb Component */}
                <ExampleSection>
                    <SectionTitle variant="h3" gutterBottom>
                        4. Breadcrumb Component
                    </SectionTitle>
                    <Typography variant="body2" color="text.secondary" paragraph>
                        Navigation breadcrumb trail showing current location in hierarchy.
                    </Typography>

                    <DemoContainer>
                        <Breadcrumb items={breadcrumbItems}/>

                        <Box sx={{mt: 3}}>
                            <Typography variant="body2" gutterBottom>With Custom Separator:</Typography>
                            <Breadcrumb items={breadcrumbItems} separator="›"/>
                        </Box>

                        <CodeBlock>
                            <Typography variant="caption" component="pre">
                                {`import { Breadcrumb } from 'components/navigation';

<Breadcrumb
  items={[
    { label: 'Home', href: '/' },
    { label: 'Components', href: '/components' },
    { label: 'Current Page' },
  ]}
  separator="/"
/>`}
                            </Typography>
                        </CodeBlock>
                    </DemoContainer>
                </ExampleSection>

                <Divider sx={{my: 4}}/>

                {/* Pagination Component */}
                <ExampleSection>
                    <SectionTitle variant="h3" gutterBottom>
                        5. Pagination Component
                    </SectionTitle>
                    <Typography variant="body2" color="text.secondary" paragraph>
                        Navigate through pages of content. Current page: {page}
                    </Typography>

                    <DemoContainer>
                        <Stack spacing={3} alignItems="center">
                            <Pagination
                                count={10}
                                page={page}
                                onChange={(e, p) => {
                                    setPage(p);
                                    showToast(`Navigated to page ${p}`);
                                }}
                                color="primary"
                            />

                            <Typography variant="body2">
                                Selected Page: <strong>{page}</strong> of 10
                            </Typography>

                            <Pagination
                                count={20}
                                page={page}
                                onChange={(e, p) => setPage(p)}
                                color="secondary"
                                size="small"
                            />
                        </Stack>

                        <CodeBlock>
                            <Typography variant="caption" component="pre">
                                {`import { Pagination } from 'components/navigation';

const [page, setPage] = useState(1);

<Pagination
  count={10}
  page={page}
  onChange={(e, p) => setPage(p)}
  color="primary"
/>`}
                            </Typography>
                        </CodeBlock>
                    </DemoContainer>
                </ExampleSection>

                <Divider sx={{my: 4}}/>

                {/* SidebarMenu Component */}
                <ExampleSection>
                    <SectionTitle variant="h3" gutterBottom>
                        6. SidebarMenu Component
                    </SectionTitle>
                    <Typography variant="body2" color="text.secondary" paragraph>
                        Menu list for use in sidebars or panels.
                    </Typography>

                    <DemoContainer>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <Paper elevation={2} sx={{p: 2}}>
                                    <Typography variant="subtitle1" gutterBottom>
                                        Navigation Menu
                                    </Typography>
                                    <SidebarMenu
                                        items={[
                                            {
                                                label: 'Dashboard',
                                                icon: <DashboardIcon/>,
                                                onClick: () => showToast('Dashboard')
                                            },
                                            {label: 'Users', icon: <PeopleIcon/>, onClick: () => showToast('Users')},
                                            {
                                                label: 'Settings',
                                                icon: <SettingsIcon/>,
                                                onClick: () => showToast('Settings')
                                            },
                                        ]}
                                    />
                                </Paper>
                            </Grid>
                        </Grid>

                        <CodeBlock>
                            <Typography variant="caption" component="pre">
                                {`import { SidebarMenu } from 'components/navigation';

<SidebarMenu
  items={[
    { label: 'Dashboard', icon: <DashboardIcon />, onClick: handleClick },
    { label: 'Users', icon: <PeopleIcon />, onClick: handleClick },
  ]}
/>`}
                            </Typography>
                        </CodeBlock>
                    </DemoContainer>
                </ExampleSection>

                <Divider sx={{my: 4}}/>

                {/* Drawer Overlay */}
                <ExampleSection>
                    <SectionTitle variant="h3" gutterBottom>
                        7. Drawer Component (Overlay)
                    </SectionTitle>
                    <Typography variant="body2" color="text.secondary" paragraph>
                        Material-UI drawer that slides in from the side.
                    </Typography>

                    <DemoContainer>
                        <Grid container spacing={2}>
                            <Grid item>
                                <Button onClick={() => setDrawerOpen(true)}>
                                    Open Drawer (Right)
                                </Button>
                            </Grid>
                        </Grid>

                        <Drawer
                            anchor="right"
                            open={drawerOpen}
                            onClose={() => setDrawerOpen(false)}
                        >
                            <Box sx={{width: 300, p: 3}}>
                                <Typography variant="h6" gutterBottom>
                                    Drawer Content
                                </Typography>
                                <Typography paragraph>
                                    This is a drawer overlay that slides in from the right side.
                                </Typography>
                                <Stack spacing={2}>
                                    <Button variant="outlined" onClick={() => showToast('Option 1 clicked')}>
                                        Option 1
                                    </Button>
                                    <Button variant="outlined" onClick={() => showToast('Option 2 clicked')}>
                                        Option 2
                                    </Button>
                                    <Button onClick={() => setDrawerOpen(false)}>
                                        Close Drawer
                                    </Button>
                                </Stack>
                            </Box>
                        </Drawer>

                        <CodeBlock>
                            <Typography variant="caption" component="pre">
                                {`import { Drawer } from 'components/overlays';

<Drawer
  anchor="right"
  open={open}
  onClose={() => setOpen(false)}
>
  <Box sx={{ width: 300, p: 3 }}>
    {/* Drawer content */}
  </Box>
</Drawer>`}
                            </Typography>
                        </CodeBlock>
                    </DemoContainer>
                </ExampleSection>

                <Divider sx={{my: 4}}/>

                {/* ConfirmDialog Component */}
                <ExampleSection>
                    <SectionTitle variant="h3" gutterBottom>
                        8. ConfirmDialog Component (Overlay)
                    </SectionTitle>
                    <Typography variant="body2" color="text.secondary" paragraph>
                        Confirmation dialog for important actions.
                    </Typography>

                    <DemoContainer>
                        <Grid container spacing={2}>
                            <Grid item>
                                <Button variant="contained" color="error" onClick={() => setConfirmDialogOpen(true)}>
                                    Delete Item
                                </Button>
                            </Grid>
                        </Grid>

                        <ConfirmDialog
                            open={confirmDialogOpen}
                            title="Confirm Delete"
                            content="Are you sure you want to delete this item? This action cannot be undone."
                            confirmText="Delete"
                            cancelText="Cancel"
                            onConfirm={handleConfirm}
                            onCancel={handleCancel}
                        />

                        <CodeBlock>
                            <Typography variant="caption" component="pre">
                                {`import { ConfirmDialog } from 'components/overlays';

<ConfirmDialog
  open={open}
  title="Confirm Delete"
  content="Are you sure?"
  confirmText="Delete"
  cancelText="Cancel"
  onConfirm={handleConfirm}
  onCancel={handleCancel}
/>`}
                            </Typography>
                        </CodeBlock>
                    </DemoContainer>
                </ExampleSection>

                <Divider sx={{my: 4}}/>

                {/* Overlay Component */}
                <ExampleSection>
                    <SectionTitle variant="h3" gutterBottom>
                        9. Overlay Component (Backdrop)
                    </SectionTitle>
                    <Typography variant="body2" color="text.secondary" paragraph>
                        Full-screen backdrop overlay with optional spinner.
                    </Typography>

                    <DemoContainer>
                        <Grid container spacing={2}>
                            <Grid item>
                                <Button variant="contained" onClick={() => setOverlayOpen(true)}>
                                    Show Overlay (3 seconds)
                                </Button>
                            </Grid>
                        </Grid>

                        <Overlay
                            open={overlayOpen}
                            showSpinner
                            onClick={() => setOverlayOpen(false)}
                        />

                        {overlayOpen && setTimeout(() => setOverlayOpen(false), 3000)}

                        <CodeBlock>
                            <Typography variant="caption" component="pre">
                                {`import { Overlay } from 'components/overlays';

<Overlay
  open={open}
  showSpinner
  onClick={() => setOpen(false)}
/>`}
                            </Typography>
                        </CodeBlock>
                    </DemoContainer>
                </ExampleSection>

                <Divider sx={{my: 4}}/>

                {/* Combined Example */}
                <ExampleSection>
                    <SectionTitle variant="h3" gutterBottom>
                        10. Combined Navigation Example
                    </SectionTitle>
                    <Typography variant="body2" color="text.secondary" paragraph>
                        A realistic example combining multiple navigation components.
                    </Typography>

                    <DemoContainer>
                        <Card title="Complete Navigation System">
                            <Stack spacing={3}>
                                <Box>
                                    <Typography variant="subtitle2" gutterBottom>Breadcrumb Navigation</Typography>
                                    <Breadcrumb
                                        items={[
                                            {label: 'Dashboard', href: '/dashboard'},
                                            {label: 'Users', href: '/users'},
                                            {label: 'Profile'},
                                        ]}
                                    />
                                </Box>

                                <Divider/>

                                <Box>
                                    <Typography variant="subtitle2" gutterBottom>Content Tabs</Typography>
                                    <Tabs
                                        tabs={[
                                            {
                                                label: 'Profile',
                                                content: <Typography>User profile information</Typography>
                                            },
                                            {
                                                label: 'Settings',
                                                content: <Typography>User settings and preferences</Typography>
                                            },
                                            {label: 'Activity', content: <Typography>Recent activity log</Typography>},
                                        ]}
                                    />
                                </Box>

                                <Divider/>

                                <Box>
                                    <Typography variant="subtitle2" gutterBottom>Pagination</Typography>
                                    <Stack direction="row" justifyContent="center">
                                        <Pagination count={5} page={page} onChange={(e, p) => setPage(p)}/>
                                    </Stack>
                                </Box>

                                <Stack direction="row" spacing={2}>
                                    <Button variant="outlined" onClick={() => setSidebarOpen(true)}>
                                        Open Menu
                                    </Button>
                                    <Button variant="outlined" onClick={() => setConfirmDialogOpen(true)}>
                                        Delete Account
                                    </Button>
                                </Stack>
                            </Stack>
                        </Card>
                    </DemoContainer>
                </ExampleSection>

                {/* Sidebar (shared across examples) */}
                <Sidebar
                    open={sidebarOpen}
                    onClose={() => setSidebarOpen(false)}
                    items={sidebarItems}
                    width={260}
                />

                {/* Toast notifications */}
                <Toast
                    open={toastOpen}
                    onClose={() => setToastOpen(false)}
                    message={toastMessage}
                    severity="success"
                    duration={3000}
                />
            </Box>
        </PageLayout>
    );
};

export default NavigationOverlayDemo;

