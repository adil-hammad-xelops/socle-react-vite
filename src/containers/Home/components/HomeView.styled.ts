import styled from 'styled-components';
import type { Theme } from '@mui/material/styles';

export const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 24px;
`;

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

export const HomeTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin: 0;
  color: ${({ theme }: { theme: Theme }) => theme.palette.text.primary};

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const HomeSubtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: normal;
  text-align: center;
  margin: 0;
  color: ${({ theme }: { theme: Theme }) => theme.palette.text.secondary};

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 32px;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const Section = styled.section`
  margin-top: 48px;
  width: 100%;
`;

export const SectionTitle = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  margin: 0 0 24px 0;
  color: ${({ theme }: { theme: Theme }) => theme.palette.text.primary};
`;

export const FeatureGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;
`;

export const FeatureCard = styled.div`
  background-color: ${({ theme }: { theme: Theme }) => theme.palette.background.paper};
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const FeatureTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 8px 0;
  color: ${({ theme }: { theme: Theme }) => theme.palette.text.primary};
`;

export const FeatureDescription = styled.p`
  font-size: 0.875rem;
  margin: 0;
  color: ${({ theme }: { theme: Theme }) => theme.palette.text.secondary};
  line-height: 1.5;
`;

export const CategoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
`;

