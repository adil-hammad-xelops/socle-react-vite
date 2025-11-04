import styled from 'styled-components';
import type { Theme } from '@mui/material/styles';

export const BasicContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 32px 24px;
`;

export const PageHeader = styled.header`
  margin-bottom: 24px;
`;

export const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0 0 8px 0;
  color: ${({ theme }: { theme: Theme }) => theme.palette.text.primary};
`;

export const PageSubtitle = styled.p`
  font-size: 1rem;
  margin: 0;
  color: ${({ theme }: { theme: Theme }) => theme.palette.text.secondary};
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }: { theme: Theme }) => theme.palette.divider};
  margin: 24px 0;
`;

export const SectionCard = styled.section`
  background-color: ${({ theme }: { theme: Theme }) => theme.palette.background.paper};
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 16px 0;
  color: ${({ theme }: { theme: Theme }) => theme.palette.text.primary};
`;

export const SubsectionTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({ theme }: { theme: Theme }) => theme.palette.text.primary};
`;

export const ComponentGroup = styled.div`
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  align-items: center;
`;

export const StackVertical = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-top: 24px;
`;

export const BadgeContainer = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;

export const ChipContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

