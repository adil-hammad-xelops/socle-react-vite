import {Button, useToast, type UseToastOptions} from '@chakra-ui/react';
import {useCallback} from 'react';

interface SnackbarProps {
    message: string;
    status?: 'success' | 'error' | 'warning' | 'info';
    duration?: number;
    isClosable?: boolean;
    onClose?: () => void;
}

export const useSnackbar = () => {
    const toast = useToast();

    const showSnackbar = useCallback((options: UseToastOptions) => {
        return toast({
            duration: 5000,
            isClosable: true,
            position: 'top-right',
            ...options,
        });
    }, [toast]);

    return {showSnackbar};
};

export const Snackbar = ({
                             message,
                             status = 'info',
                             duration = 5000,
                             isClosable = true,
                             onClose
                         }: SnackbarProps) => {
    const {showSnackbar} = useSnackbar();

    const handleClick = () => {
        showSnackbar({
            title: message,
            status,
            duration,
            isClosable,
            onCloseComplete: onClose,
        });
    };

    return (
        <Button onClick={handleClick} variant="outline">
            Show Toast
        </Button>
    );
};

