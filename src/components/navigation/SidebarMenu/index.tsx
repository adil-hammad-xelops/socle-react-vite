import {List, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';

export interface SidebarMenuItem {
    label: string;
    icon?: React.ReactNode;
    onClick?: () => void;
}

interface SidebarMenuProps {
    items: SidebarMenuItem[];
}

const SidebarMenu = ({items}: SidebarMenuProps) => {
    return (
        <List>
            {items.map((item) => (
                <ListItemButton key={item.label} onClick={item.onClick}>
                    {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                    <ListItemText primary={item.label}/>
                </ListItemButton>
            ))}
        </List>
    );
};

export default SidebarMenu;

