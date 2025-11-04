import styled from 'styled-components';
import type { Theme } from '@mui/material/styles';

export const SalesWrapper = styled.div`
  display: grid;
  gap: 12px;
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const SalesTitle = styled.h2`
  margin: 0 0 16px 0;
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }: { theme: Theme }) => theme.palette.text.primary};
`;

export const SalesCard = styled.div`
  background-color: ${({ theme }: { theme: Theme }) => theme.palette.background.paper};
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const SalesDetail = styled.div`
  margin-bottom: 8px;
  color: ${({ theme }: { theme: Theme }) => theme.palette.text.secondary};
  font-size: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

