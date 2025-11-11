import {IconButton, Tooltip} from '@mui/material';
import {Brightness4, Brightness7} from '@mui/icons-material';
import {useTheme} from 'theme/ThemeContext';

export const ThemeToggle = () => {
    const {mode, toggleTheme} = useTheme();

    return (
        <Tooltip title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`} arrow>
            <IconButton onClick={toggleTheme} color="inherit" aria-label="toggle theme">
                {mode === 'light' ? <Brightness4/> : <Brightness7/>}
            </IconButton>
        </Tooltip>
    );
};

export default ThemeToggle;

