import {useState} from 'react';
import {Divider, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Typography} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleIcon from '@mui/icons-material/People';
import DashboardIcon from '@mui/icons-material/Dashboard';
import {SidebarContainer, SidebarHeader} from './Sidebar.styled';

export interface MenuItem {
    label: string;
    icon?: React.ReactNode;
    path?: string;
    onClick?: () => void;
}

interface SidebarProps {
    open: boolean;
    onClose: () => void;
    items?: MenuItem[];
    width?: number;
    variant?: 'permanent' | 'persistent' | 'temporary';
}

const defaultItems: MenuItem[] = [
    {label: 'Home', icon: <HomeIcon/>, path: '/'},
    {label: 'Dashboard', icon: <DashboardIcon/>, path: '/dashboard'},
    {label: 'Users', icon: <PeopleIcon/>, path: '/users'},
    {label: 'Settings', icon: <SettingsIcon/>, path: '/settings'},
];

const Sidebar = ({
                     open,
                     onClose,
                     items = defaultItems,
                     width = 240,
                     variant = 'temporary',
                 }: SidebarProps) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleItemClick = (index: number, item: MenuItem) => {
        setSelectedIndex(index);
        if (item.onClick) {
            item.onClick();
        } else if (item.path) {
            window.location.href = item.path;
        }
    };

    return (
        <SidebarContainer>
            <Drawer
                variant={variant}
                open={open}
                onClose={onClose}
                sx={{
                    width: width,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: width,
                        boxSizing: 'border-box',
                    },
                }}
            >
                <SidebarHeader>
                    <Typography variant="h6" noWrap component="div">
                        Menu
                    </Typography>
                    <IconButton onClick={onClose}>
                        <ChevronLeftIcon/>
                    </IconButton>
                </SidebarHeader>

                <Divider/>

                <List>
                    {items.map((item, index) => (
                        <ListItemButton
                            key={item.label}
                            selected={selectedIndex === index}
                            onClick={() => handleItemClick(index, item)}
                        >
                            {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                            <ListItemText primary={item.label}/>
                        </ListItemButton>
                    ))}
                </List>
            </Drawer>
        </SidebarContainer>
    );
};

export default Sidebar;

