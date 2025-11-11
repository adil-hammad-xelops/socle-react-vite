import {AppBar, Avatar, Box, IconButton, Toolbar} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {ActionsContainer, HeaderContainer, LogoText} from './Header.styled';

interface HeaderProps {
    title?: string;
    onMenuClick?: () => void;
    showMenu?: boolean;
    userName?: string;
    avatarUrl?: string;
}

const Header = ({
                    title = 'FS-AI-App',
                    onMenuClick,
                    showMenu = true,
                    userName,
                    avatarUrl
                }: HeaderProps) => {
    return (
        <HeaderContainer>
            <AppBar position="static" elevation={1}>
                <Toolbar>
                    {showMenu && (
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

                    <LogoText variant="h6" component="div">
                        {title}
                    </LogoText>

                    <Box sx={{flexGrow: 1}}/>

                    <ActionsContainer>
                        <IconButton color="inherit" aria-label="notifications">
                            <NotificationsIcon/>
                        </IconButton>

                        {avatarUrl ? (
                            <Avatar alt={userName} src={avatarUrl} sx={{width: 32, height: 32}}/>
                        ) : (
                            <IconButton color="inherit" aria-label="account">
                                <AccountCircleIcon/>
                            </IconButton>
                        )}
                    </ActionsContainer>
                </Toolbar>
            </AppBar>
        </HeaderContainer>
    );
};

export default Header;

