import styled from 'styled-components';
import {Box, Paper} from '@mui/material';

export const ExampleSection = styled(Box)`
    margin-bottom: ${({theme}) => theme.spacing(6)};
`;

export const DemoContainer = styled(Paper)`
    padding: ${({theme}) => theme.spacing(3)};
    background-color: ${({theme}) => theme.palette.background.paper};
    border-radius: ${({theme}) => theme.spacing(1)};
    margin-top: ${({theme}) => theme.spacing(2)};
`;

export const CodeBlock = styled(Box)`
    margin-top: ${({theme}) => theme.spacing(3)};
    padding: ${({theme}) => theme.spacing(2)};
    background-color: ${({theme}) => theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.05)'};
    border-radius: ${({theme}) => theme.spacing(1)};
    border-left: 4px solid ${({theme}) => theme.palette.primary.main};
    overflow-x: auto;

    pre {
        margin: 0;
        font-family: 'Courier New', monospace;
        font-size: 0.875rem;
        color: ${({theme}) => theme.palette.text.primary};
        white-space: pre-wrap;
        word-wrap: break-word;
    }
`;

