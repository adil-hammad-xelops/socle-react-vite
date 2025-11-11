import styled from 'styled-components';
import {Box} from '@mui/material';

export const SpinnerContainer = styled(Box)<{ fullScreen?: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({theme}) => theme.spacing(4)};

    ${({fullScreen}) =>
            fullScreen &&
            `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
  `}
`;

