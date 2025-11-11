import styled from 'styled-components';
import {Card} from '@mui/material';

export const StyledCard = styled(Card)`
  border-radius: ${({theme}) => theme.spacing(1)};
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    ${({onClick}) => onClick && `
      transform: translateY(-4px);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    `}
  }
`;

