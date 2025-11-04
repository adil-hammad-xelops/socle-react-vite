import styled from 'styled-components';
import type { Theme } from '@mui/material/styles';

export const FormContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 32px 24px;
`;

export const FormHeader = styled.header`
  margin-bottom: 24px;
`;

export const FormTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0 0 8px 0;
  color: ${({ theme }: { theme: Theme }) => theme.palette.text.primary};
`;

export const FormSubtitle = styled.p`
  font-size: 1rem;
  margin: 0;
  color: ${({ theme }: { theme: Theme }) => theme.palette.text.secondary};
`;

export const FormDivider = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }: { theme: Theme }) => theme.palette.divider};
  margin: 24px 0;
`;

export const FormSection = styled.section`
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

export const FormGrid = styled.div<{ $columns?: number }>`
  display: grid;
  grid-template-columns: repeat(${({ $columns }) => $columns || 2}, 1fr);
  gap: 24px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FieldGroup = styled.div`
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 8px;
  color: ${({ theme }: { theme: Theme }) => theme.palette.text.primary};
`;

export const SubLabel = styled.p`
  font-size: 0.875rem;
  margin: 0 0 12px 0;
  color: ${({ theme }: { theme: Theme }) => theme.palette.text.secondary};
`;

export const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SliderValue = styled.p`
  text-align: center;
  margin-top: 8px;
  font-size: 0.875rem;
  color: ${({ theme }: { theme: Theme }) => theme.palette.text.secondary};
`;

