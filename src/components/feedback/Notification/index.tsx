import {Alert, AlertTitle} from '@mui/material';

interface NotificationProps {
    severity?: 'error' | 'warning' | 'info' | 'success';
    title?: string;
    message: string;
    variant?: 'filled' | 'outlined' | 'standard';
}

const Notification = ({severity = 'info', title, message, variant = 'standard'}: NotificationProps) => (
    <Alert severity={severity} variant={variant}>
        {title && <AlertTitle>{title}</AlertTitle>}
        {message}
    </Alert>
);

export default Notification;

