import {Drawer as MuiDrawer, type DrawerProps} from '@mui/material';

const Drawer = ({anchor = 'left', ...rest}: DrawerProps) => (
    <MuiDrawer anchor={anchor} {...rest} />
);

export default Drawer;

