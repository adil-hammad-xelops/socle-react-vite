import styled from 'styled-components';
import type { Theme } from '@mui/material/styles';

export const NavContainer = styled.nav`
  background-color: ${({ theme }: { theme: Theme }) => theme.palette.background.paper};
  border-bottom: 1px solid ${({ theme }: { theme: Theme }) => theme.palette.divider};
  overflow-x: auto;
`;

export const NavList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0;
  padding: 0 16px;
  min-width: fit-content;
`;

export const NavItem = styled.div`
  text-decoration: none;
`;

export const NavButton = styled.button<{ $isActive?: boolean; $isDisabled?: boolean }>`
  background: transparent;
  border: none;
  border-radius: 0;
  border-bottom: ${(props: { $isActive?: boolean; theme: Theme }) => 
    props.$isActive ? `2px solid ${props.theme.palette.primary.main}` : '2px solid transparent'};
  color: ${(props: { $isDisabled?: boolean; theme: Theme }) => 
    props.$isDisabled ? props.theme.palette.text.disabled : props.theme.palette.text.primary};
  padding: 12px 16px;
  font-size: 0.875rem;
  cursor: ${(props: { $isDisabled?: boolean }) => (props.$isDisabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props: { $isDisabled?: boolean }) => (props.$isDisabled ? 0.4 : 1)};
  transition: all 0.2s ease;
  font-family: inherit;
  white-space: nowrap;

  &:hover:not(:disabled) {
    background-color: ${({ theme }: { theme: Theme }) => theme.palette.action.hover};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

