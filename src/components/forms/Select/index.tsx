import {FormControl, InputLabel, MenuItem, Select as MuiSelect, type SelectChangeEvent} from '@mui/material';
import {useState} from 'react';

export interface SelectOption {
    label: string;
    value: string;
}

interface SelectProps {
    label?: string;
    options: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    fullWidth?: boolean;
    size?: 'small' | 'medium';
}

const Select = ({label, options, value, onChange, fullWidth = true, size = 'medium'}: SelectProps) => {
    const [internal, setInternal] = useState(options[0]?.value || '');
    const current = value ?? internal;

    const handleChange = (e: SelectChangeEvent) => {
        const val = e.target.value as string;
        if (value === undefined) setInternal(val);
        onChange?.(val);
    };

    return (
        <FormControl fullWidth={fullWidth} size={size}>
            {label && <InputLabel>{label}</InputLabel>}
            <MuiSelect label={label} value={current} onChange={handleChange}>
                {options.map(opt => (
                    <MenuItem key={opt.value} value={opt.value}>{opt.label}</MenuItem>
                ))}
            </MuiSelect>
        </FormControl>
    );
};

export default Select;

