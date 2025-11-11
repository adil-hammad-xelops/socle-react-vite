import {Box, CircularProgress, Typography} from '@mui/material';
import {SpinnerContainer} from './Spinner.styled';

interface SpinnerProps {
    size?: number;
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'inherit';
    text?: string;
    fullScreen?: boolean;
    thickness?: number;
}

const Spinner = ({
                     size = 40,
                     color = 'primary',
                     text,
                     fullScreen = false,
                     thickness = 3.6,
                 }: SpinnerProps) => {
    const content = (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
            }}
        >
            <CircularProgress size={size} color={color} thickness={thickness}/>
            {text && (
                <Typography variant="body2" color="text.secondary">
                    {text}
                </Typography>
            )}
        </Box>
    );

    if (fullScreen) {
        return (
            <SpinnerContainer fullScreen>
                {content}
            </SpinnerContainer>
        );
    }

    return <SpinnerContainer>{content}</SpinnerContainer>;
};

export default Spinner;

