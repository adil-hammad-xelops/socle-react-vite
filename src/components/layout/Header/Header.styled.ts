import styled from 'styled-components';
import {Typography} from '@mui/material';

export const HeaderContainer = styled.div`
  width: 100%;
`;

export const LogoText = styled(Typography)`
  font-weight: 600;
  cursor: pointer;
  user-select: none;
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({theme}) => theme.spacing(1)};
`;

