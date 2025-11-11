import {forwardRef} from 'react';
import {TextField} from '@mui/material';

interface InputProps {
    label?: string;
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
    type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';
    error?: boolean;
    helperText?: string;
    required?: boolean;
    disabled?: boolean;
    fullWidth?: boolean;
    multiline?: boolean;
    rows?: number;
    variant?: 'outlined' | 'filled' | 'standard';
    size?: 'small' | 'medium';
}

const Input = forwardRef<HTMLDivElement, InputProps>(({
                                                          label,
                                                          placeholder,
                                                          value,
                                                          onChange,
                                                          type = 'text',
                                                          error = false,
                                                          helperText,
                                                          required = false,
                                                          disabled = false,
                                                          fullWidth = true,
                                                          multiline = false,
                                                          rows = 4,
                                                          variant = 'outlined',
                                                          size = 'medium',
                                                      }, ref) => {
    return (
        <TextField
            ref={ref}
            label={label}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            type={type}
            error={error}
            helperText={helperText}
            required={required}
            disabled={disabled}
            fullWidth={fullWidth}
            multiline={multiline}
            rows={multiline ? rows : undefined}
            variant={variant}
            size={size}
            sx={{
                '& .MuiOutlinedInput-root': {
                    borderRadius: 1,
                },
            }}
        />
    );
});

Input.displayName = 'Input';

export default Input;

