import {ReactNode} from 'react';
import {Box, Typography} from '@mui/material';

interface FormGroupProps {
    label?: string;
    helperText?: string;
    children: ReactNode;
}

const FormGroup = ({label, helperText, children}: FormGroupProps) => (
    <Box sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
        {label && (
            <Typography variant="subtitle2" color="text.secondary">
                {label}
            </Typography>
        )}
        {children}
        {helperText && (
            <Typography variant="caption" color="text.secondary">
                {helperText}
            </Typography>
        )}
    </Box>
);

export default FormGroup;

