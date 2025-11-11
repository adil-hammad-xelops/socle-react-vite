import {TextField, type TextFieldProps} from '@mui/material';

type TextAreaProps = Omit<TextFieldProps, 'multiline' | 'rows'> & {
    rows?: number;
};

const TextArea = ({rows = 4, ...rest}: TextAreaProps) => {
    return <TextField {...rest} multiline rows={rows} fullWidth/>;
};

export default TextArea;

