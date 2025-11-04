import styled from 'styled-components';
import type { Theme } from '@mui/material/styles';

export const DashboardWrapper = styled.div`
  display: grid;
  gap: 16px;
  padding: 24px;
  max-width: 1400px;
  margin: 0 auto;
`;

export const DashboardHeader = styled.header`
  display: flex;
  gap: 8px;
  align-items: center;
  flex-wrap: wrap;
`;

export const DashboardTitle = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }: { theme: Theme }) => theme.palette.text.primary};
`;

export const CardsGrid = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const CardValue = styled.strong`
  font-size: 1.25rem;
  color: ${({ theme }: { theme: Theme }) => theme.palette.text.primary};
`;

export const CardDate = styled.small`
  font-size: 0.75rem;
  color: ${({ theme }: { theme: Theme }) => theme.palette.text.secondary};
`;

export const ChartWrapper = styled.div`
  margin-top: 8px;
`;

