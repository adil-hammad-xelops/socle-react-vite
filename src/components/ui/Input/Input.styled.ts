import styled from 'styled-components';
import {TextField} from '@mui/material';

export const StyledTextField = styled(TextField)`
    .MuiOutlinedInput-root {
        border-radius: ${({theme}) => theme.spacing(1)};
    }
`;

