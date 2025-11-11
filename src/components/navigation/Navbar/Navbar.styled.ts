import styled from 'styled-components';
import {Box} from '@mui/material';

export const NavbarContainer = styled(Box)`
  width: 100%;
  
  .MuiAppBar-root {
    box-shadow: ${({theme}) => theme.shadows[2]};
  }
`;

