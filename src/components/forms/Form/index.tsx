import {FormEvent, ReactNode} from 'react';
import {Box} from '@mui/material';
import {StyledForm} from './Form.styled';

interface FormProps {
    children: ReactNode;
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
    spacing?: number;
}

const Form = ({children, onSubmit, spacing = 2}: FormProps) => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(e);
    };

    return (
        <StyledForm onSubmit={handleSubmit}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: spacing,
                }}
            >
                {children}
            </Box>
        </StyledForm>
    );
};

export default Form;

