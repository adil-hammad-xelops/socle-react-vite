import styled from 'styled-components';
import {Dialog, DialogTitle} from '@mui/material';

export const StyledDialog = styled(Dialog)`
  .MuiDialog-paper {
    border-radius: ${({theme}) => theme.spacing(1.5)};
  }
`;

export const DialogTitleContainer = styled(DialogTitle)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({theme}) => theme.spacing(2, 3)};
`;

