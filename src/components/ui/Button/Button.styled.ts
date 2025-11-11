import styled from 'styled-components';
import {Button} from '@mui/material';

export const StyledButton = styled(Button)`
  text-transform: none;
  font-weight: 500;
  border-radius: ${({theme}) => theme.spacing(1)};
`;

