import {Alert, type SnackbarOrigin} from '@mui/material';
import {StyledSnackbar} from './Toast.styled';

interface ToastProps {
    open: boolean;
    message: string;
    severity?: 'error' | 'warning' | 'info' | 'success';
    duration?: number;
    onClose: () => void;
    position?: SnackbarOrigin;
}

const Toast = ({
                   open,
                   message,
                   severity = 'info',
                   duration = 6000,
                   onClose,
                   position = {vertical: 'bottom', horizontal: 'right'},
               }: ToastProps) => {
    return (
        <StyledSnackbar
            open={open}
            autoHideDuration={duration}
            onClose={onClose}
            anchorOrigin={position}
        >
            <Alert
                onClose={onClose}
                severity={severity}
                variant="filled"
                sx={{width: '100%'}}
            >
                {message}
            </Alert>
        </StyledSnackbar>
    );
};

export default Toast;

