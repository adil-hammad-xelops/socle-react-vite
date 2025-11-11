import styled from 'styled-components';
import {Box, Typography} from '@mui/material';

export const FooterContainer = styled(Box)`
    background-color: ${({theme}) => theme.palette.background.paper};
    margin-top: auto;
    padding-top: ${({theme}) => theme.spacing(1)};
`;

export const FooterContent = styled(Box)`
    padding: ${({theme}) => theme.spacing(4, 0)};
`;

export const Copyright = styled(Typography)`
    text-align: center;
    margin-top: ${({theme}) => theme.spacing(3)};
    padding-top: ${({theme}) => theme.spacing(2)};
`;

export const LinkList = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({theme}) => theme.spacing(1)};
`;

