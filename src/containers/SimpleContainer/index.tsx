import {type ReactNode, useState} from 'react';
import {
    AppBar,
    Box,
    Container,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import {useLocation, useNavigate} from 'react-router-dom';
import {MainContent, PageContainer, SidebarContainer} from './SimpleContainer.styled';

interface MenuItem {
    label: string;
    icon: ReactNode;
    path: string;
}

const menuItems: MenuItem[] = [
    {label: 'Home', icon: <HomeIcon/>, path: '/'},
    {label: 'Users', icon: <PeopleIcon/>, path: '/users'},
    {label: 'Components Demo', icon: <DashboardIcon/>, path: '/components-demo'},
    {label: 'Feedback Demo', icon: <DashboardIcon/>, path: '/feedback-components'},
    {label: 'Navigation Demo', icon: <DashboardIcon/>, path: '/navigation-overlay-demo'},
    {label: 'Settings', icon: <SettingsIcon/>, path: '/settings'},
];

interface SimpleContainerProps {
    children: ReactNode;
    title?: string;
}

const SimpleContainer = ({children, title = 'FS-AI-App'}: SimpleContainerProps) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigate = (path: string) => {
        navigate(path);
        setDrawerOpen(false);
    };

    return (
        <PageContainer>
            {/* Top AppBar */}
            <AppBar position="sticky" elevation={1}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={() => setDrawerOpen(true)}
                        sx={{mr: 2}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* Sidebar Drawer */}
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            >
                <SidebarContainer>
                    <Box sx={{p: 2}}>
                        <Typography variant="h6" gutterBottom>
                            Navigation
                        </Typography>
                    </Box>
                    <Divider/>
                    <List>
                        {menuItems.map((item) => (
                            <ListItemButton
                                key={item.path}
                                selected={location.pathname === item.path}
                                onClick={() => handleNavigate(item.path)}
                            >
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.label}/>
                            </ListItemButton>
                        ))}
                    </List>
                </SidebarContainer>
            </Drawer>

            {/* Main Content */}
            <MainContent>
                <Container maxWidth="lg">
                    {children}
                </Container>
            </MainContent>
        </PageContainer>
    );
};

export default SimpleContainer;

