import styled from 'styled-components';
import {Alert} from '@mui/material';

export const StyledAlert = styled(Alert)`
  border-radius: ${({theme}) => theme.spacing(1)};
  margin-bottom: ${({theme}) => theme.spacing(2)};
`;

