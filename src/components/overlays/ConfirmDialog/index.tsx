const ConfirmDialog = ({
                           open,
                           title = 'Confirm',
                           content = 'Are you sure?',
                           confirmText = 'Confirm',
                           cancelText = 'Cancel',
                           onConfirm,
                           onCancel,
                       }: ConfirmDialogProps) => (
    <Dialog open={open} onClose={onCancel}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
            {typeof content === 'string' ? <Typography>{content}</Typography> : content}
        </DialogContent>
        <DialogActions>
            <Button variant="outlined" onClick={onCancel}>{cancelText}</Button>
            <Button onClick={onConfirm}>{confirmText}</Button>
        </DialogActions>
    </Dialog>
);

export default ConfirmDialog;
import {Dialog, DialogActions, DialogContent, DialogTitle, Typography} from '@mui/material';
import {ReactNode} from 'react';
import {Button} from '../../ui';

interface ConfirmDialogProps {
    open: boolean;
    title?: string;
    content?: ReactNode;
    confirmText?: string;
    cancelText?: string;
    onConfirm: () => void;
    onCancel: () => void;
}


