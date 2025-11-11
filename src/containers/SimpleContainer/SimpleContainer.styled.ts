import styled from 'styled-components';
import {Box} from '@mui/material';

export const PageContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

export const MainContent = styled(Box)`
    flex: 1;
    padding: ${({theme}) => theme.spacing(3, 0)};
    background-color: ${({theme}) => theme.palette.background.default};
`;

export const SidebarContainer = styled(Box)`
    width: 280px;
    height: 100%;
    background-color: ${({theme}) => theme.palette.background.paper};
`;

