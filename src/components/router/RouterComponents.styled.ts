import styled from 'styled-components';
import type { Theme } from '@mui/material/styles';

/**
 * Loading Fallback Styled Wrappers
 */
export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
`;

export const LoadingContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid ${({ theme }: { theme: Theme }) => theme.palette.primary.main};
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LoadingText = styled.div`
  color: ${({ theme }: { theme: Theme }) => theme.palette.text.secondary};
  font-size: 0.875rem;
`;

/**
 * Not Found Page Styled Wrappers
 */
export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  text-align: center;
  padding: 0 24px;
`;

export const NotFoundCode = styled.div`
  font-size: 6rem;
  font-weight: bold;
  color: ${({ theme }: { theme: Theme }) => theme.palette.primary.main};
  line-height: 1;
`;

export const NotFoundTitle = styled.div`
  font-size: 1.5rem;
  margin-bottom: 16px;
  color: ${({ theme }: { theme: Theme }) => theme.palette.text.primary};
`;

export const NotFoundMessage = styled.div`
  color: ${({ theme }: { theme: Theme }) => theme.palette.text.secondary};
  margin-bottom: 32px;
`;

export const NotFoundLink = styled.div`
  text-decoration: none;
`;

/**
 * Footer Styled Wrappers
 */
export const FooterContainer = styled.footer`
  background-color: ${({ theme }: { theme: Theme }) => theme.palette.background.paper};
  border-top: 1px solid ${({ theme }: { theme: Theme }) => theme.palette.divider};
  padding: 24px 16px;
  text-align: center;
`;

export const FooterText = styled.div`
  color: ${({ theme }: { theme: Theme }) => theme.palette.text.secondary};
  font-size: 0.875rem;
`;

export const FooterCopyright = styled.div`
  color: ${({ theme }: { theme: Theme }) => theme.palette.text.secondary};
  font-size: 0.75rem;
  margin-top: 4px;
`;

