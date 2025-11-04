import styled from 'styled-components';
import type { Theme } from '@mui/material/styles';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const MainContent = styled.main`
  flex-grow: 1;
  background-color: ${({ theme }: { theme: Theme }) => theme.palette.background.default};
`;

