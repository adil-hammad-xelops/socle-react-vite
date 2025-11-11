import styled from 'styled-components';
import {Box} from '@mui/material';

export const SidebarContainer = styled(Box)`
    .MuiDrawer-paper {
        border-right: 1px solid ${({theme}) => theme.palette.divider};
        background-color: ${({theme}) => theme.palette.background.paper};
    }
`;

export const SidebarHeader = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({theme}) => theme.spacing(2)};
    min-height: 64px;
`;

export const SidebarFooter = styled(Box)`
    padding: ${({theme}) => theme.spacing(2)};
`;

