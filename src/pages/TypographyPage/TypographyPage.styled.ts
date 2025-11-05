import styled from 'styled-components';
import type { Theme } from '@mui/material/styles';

export const TypographyPageWrapper = styled.div`
  padding: 2rem 0;
  background-color: ${({ theme }: { theme: Theme }) => theme.palette.background.default};
  min-height: 100vh;
`;

export const Section = styled.section`
  margin-bottom: 2rem;
`;

export const SectionTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 1.75rem;
  font-weight: 600;
  color: ${({ theme }: { theme: Theme }) => theme.palette.text.primary};
  margin-bottom: 1.5rem;
`;

export const ExampleContainer = styled.div`
  background-color: ${({ theme }: { theme: Theme }) => theme.palette.background.paper};
  border: 1px solid ${({ theme }: { theme: Theme }) => theme.palette.divider};
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 1rem;

  & > * + * {
    margin-top: 1rem;
  }
`;

export const CodeSnippet = styled.pre`
  font-family: 'Fira Code', 'Source Code Pro', monospace;
  font-size: 0.875rem;
  background-color: ${({ theme }: { theme: Theme }) => theme.palette.grey[900]};
  color: ${({ theme }: { theme: Theme }) => theme.palette.grey[100]};
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
  margin-top: 0.5rem;

  /* Scrollbar styling */
  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }: { theme: Theme }) => theme.palette.grey[800]};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }: { theme: Theme }) => theme.palette.grey[600]};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }: { theme: Theme }) => theme.palette.grey[500]};
  }
`;

