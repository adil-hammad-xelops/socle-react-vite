import {Backdrop, CircularProgress} from '@mui/material';

interface OverlayProps {
    open: boolean;
    showSpinner?: boolean;
    onClick?: () => void;
}

const Overlay = ({open, showSpinner = false, onClick}: OverlayProps) => (
    <Backdrop open={open} onClick={onClick} sx={{color: '#fff', zIndex: (theme) => theme.zIndex.modal + 1}}>
        {showSpinner && <CircularProgress color="inherit"/>}
    </Backdrop>
);

export default Overlay;

