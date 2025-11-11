import styled from 'styled-components';
import {Snackbar} from '@mui/material';

export const StyledSnackbar = styled(Snackbar)`
  .MuiAlert-root {
    border-radius: ${({theme}) => theme.spacing(1)};
  }
`;

