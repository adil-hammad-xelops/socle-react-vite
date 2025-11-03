import React from 'react';
import {
  TextField as MuiTextField,
  InputAdornment,
  IconButton,
} from '@mui/material';
import type { TextFieldProps as MuiTextFieldProps } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export interface InputProps extends Omit<MuiTextFieldProps, 'variant'> {
  /** Input label */
  label?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Input type */
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  /** Error state */
  error?: boolean;
  /** Helper text below input */
  helperText?: string;
  /** Required field */
  required?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Full width */
  fullWidth?: boolean;
  /** Size variant */
  size?: 'small' | 'medium';
  /** Start icon/adornment */
  startAdornment?: React.ReactNode;
  /** End icon/adornment */
  endAdornment?: React.ReactNode;
  /** Value */
  value?: string | number;
  /** Change handler */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Input component with label, validation, and adornments
 *
 * @example
 * ```tsx
 * <Input
 *   label="Email"
 *   type="email"
 *   placeholder="Enter your email"
 *   required
 *   error={hasError}
 *   helperText="Invalid email format"
 * />
 * ```
 */
export const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  error = false,
  helperText,
  required = false,
  disabled = false,
  fullWidth = false,
  size = 'medium',
  startAdornment,
  endAdornment,
  ...props
}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const inputType = type === 'password' && showPassword ? 'text' : type;

  const endAdornmentContent = type === 'password' ? (
    <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
        onClick={handleTogglePassword}
        edge="end"
        size="small"
      >
        {showPassword ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </InputAdornment>
  ) : endAdornment ? (
    <InputAdornment position="end">{endAdornment}</InputAdornment>
  ) : undefined;

  return (
    <MuiTextField
      label={label}
      type={inputType}
      error={error}
      helperText={helperText}
      required={required}
      disabled={disabled}
      fullWidth={fullWidth}
      size={size}
      variant="outlined"
      InputProps={{
        startAdornment: startAdornment ? (
          <InputAdornment position="start">{startAdornment}</InputAdornment>
        ) : undefined,
        endAdornment: endAdornmentContent,
      }}
      inputProps={{
        'aria-invalid': error,
        'aria-required': required,
      }}
      {...props}
    />
  );
};


