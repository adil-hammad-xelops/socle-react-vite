import type {ReactNode} from 'react';
import {forwardRef} from 'react';
import {Button as MuiButton, CircularProgress} from '@mui/material';

interface ButtonProps {
    children: ReactNode;
    variant?: 'contained' | 'outlined' | 'text';
    color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    loading?: boolean;
    fullWidth?: boolean;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
                                                               children,
                                                               variant = 'contained',
                                                               color = 'primary',
                                                               size = 'medium',
                                                               disabled = false,
                                                               loading = false,
                                                               fullWidth = false,
                                                               startIcon,
                                                               endIcon,
                                                               onClick,
                                                               type = 'button',
                                                           }, ref) => {
    return (
        <MuiButton
            ref={ref}
            variant={variant}
            color={color}
            size={size}
            disabled={disabled || loading}
            fullWidth={fullWidth}
            startIcon={loading ? <CircularProgress size={16}/> : startIcon}
            endIcon={endIcon}
            onClick={onClick}
            type={type}
            sx={{
                textTransform: 'none',
                fontWeight: 500,
                borderRadius: 1,
            }}
        >
            {children}
        </MuiButton>
    );
});

Button.displayName = 'Button';

export default Button;

