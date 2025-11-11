import {Checkbox as MuiCheckbox, type CheckboxProps, FormControlLabel} from '@mui/material';

interface AppCheckboxProps extends CheckboxProps {
    label?: string;
}

const Checkbox = ({label, ...rest}: AppCheckboxProps) => {
    if (label) return <FormControlLabel control={<MuiCheckbox {...rest} />} label={label}/>;
    return <MuiCheckbox {...rest} />;
};

export default Checkbox;

