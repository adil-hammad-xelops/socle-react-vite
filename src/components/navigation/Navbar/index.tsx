import {AppBar, Box, Button, IconButton, Toolbar, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {NavbarContainer} from './Navbar.styled';

interface NavItem {
    label: string;
    path?: string;
    onClick?: () => void;
}

interface NavbarProps {
    title?: string;
    items?: NavItem[];
    onMenuClick?: () => void;
    showMenuButton?: boolean;
}

const defaultItems: NavItem[] = [
    {label: 'Home', path: '/'},
    {label: 'About', path: '/about'},
    {label: 'Services', path: '/services'},
    {label: 'Contact', path: '/contact'},
];

const Navbar = ({
                    title = 'FS-AI-App',
                    items = defaultItems,
                    onMenuClick,
                    showMenuButton = true,
                }: NavbarProps) => {
    const handleItemClick = (item: NavItem) => {
        if (item.onClick) {
            item.onClick();
        } else if (item.path) {
            window.location.href = item.path;
        }
    };

    return (
        <NavbarContainer>
            <AppBar position="static">
                <Toolbar>
                    {showMenuButton && onMenuClick && (
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={onMenuClick}
                            sx={{mr: 2}}
                        >
                            <MenuIcon/>
                        </IconButton>
                    )}

                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        {title}
                    </Typography>

                    <Box sx={{display: {xs: 'none', md: 'flex'}, gap: 1}}>
                        {items.map((item) => (
                            <Button
                                key={item.label}
                                color="inherit"
                                onClick={() => handleItemClick(item)}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
        </NavbarContainer>
    );
};

export default Navbar;

