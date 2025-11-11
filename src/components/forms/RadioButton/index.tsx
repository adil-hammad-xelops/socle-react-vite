import {FormControlLabel, FormLabel, Radio as MuiRadio, RadioGroup} from '@mui/material';

export interface RadioOption {
    label: string;
    value: string;
}

interface RadioButtonProps {
    label?: string;
    options: RadioOption[];
    value?: string;
    onChange?: (value: string) => void;
    row?: boolean;
}

const RadioButton = ({label, options, value, onChange, row = false}: RadioButtonProps) => {
    return (
        <div>
            {label && <FormLabel id="radio-group-label">{label}</FormLabel>}
            <RadioGroup
                row={row}
                value={value}
                onChange={(e) => onChange?.(e.target.value)}
                aria-labelledby="radio-group-label"
            >
                {options.map(opt => (
                    <FormControlLabel key={opt.value} value={opt.value} control={<MuiRadio/>} label={opt.label}/>
                ))}
            </RadioGroup>
        </div>
    );
};

export default RadioButton;

