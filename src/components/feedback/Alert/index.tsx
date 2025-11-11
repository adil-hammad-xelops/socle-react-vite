import {AlertTitle, Collapse, IconButton} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {useState} from 'react';
import {StyledAlert} from './Alert.styled';

interface AlertProps {
    severity?: 'error' | 'warning' | 'info' | 'success';
    variant?: 'filled' | 'outlined' | 'standard';
    title?: string;
    message: string;
    closable?: boolean;
    onClose?: () => void;
    icon?: React.ReactNode;
}

const Alert = ({
                   severity = 'info',
                   variant = 'standard',
                   title,
                   message,
                   closable = true,
                   onClose,
                   icon,
               }: AlertProps) => {
    const [open, setOpen] = useState(true);

    const handleClose = () => {
        setOpen(false);
        onClose?.();
    };

    return (
        <Collapse in={open}>
            <StyledAlert
                severity={severity}
                variant={variant}
                icon={icon}
                action={
                    closable ? (
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={handleClose}
                        >
                            <CloseIcon fontSize="inherit"/>
                        </IconButton>
                    ) : undefined
                }
            >
                {title && <AlertTitle>{title}</AlertTitle>}
                {message}
            </StyledAlert>
        </Collapse>
    );
};

export default Alert;

