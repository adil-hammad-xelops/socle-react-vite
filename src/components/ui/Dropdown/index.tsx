import {FormControl, InputLabel, MenuItem, Select, type SelectChangeEvent} from '@mui/material';
import {useState} from 'react';

export interface DropdownOption {
    label: string;
    value: string;
    disabled?: boolean;
}

interface DropdownProps {
    label?: string;
    options: DropdownOption[];
    value?: string;
    onChange?: (value: string) => void;
    fullWidth?: boolean;
    size?: 'small' | 'medium';
}

const Dropdown = ({label, options, value, onChange, fullWidth = true, size = 'medium'}: DropdownProps) => {
    const [internalValue, setInternalValue] = useState(options[0]?.value || '');
    const currentValue = value ?? internalValue;

    const handleChange = (e: SelectChangeEvent) => {
        if (value === undefined) setInternalValue(e.target.value);
        onChange?.(e.target.value as string);
    };

    return (
        <FormControl fullWidth={fullWidth} size={size}>
            {label && <InputLabel>{label}</InputLabel>}
            <Select label={label} value={currentValue} onChange={handleChange}>
                {options.map(opt => (
                    <MenuItem key={opt.value} value={opt.value} disabled={opt.disabled}>
                        {opt.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default Dropdown;

