import {Box, LinearProgress, Typography} from '@mui/material';

interface LoaderProps {
    text?: string;
}

const Loader = ({text}: LoaderProps) => (
    <Box sx={{width: '100%'}}>
        {text && (
            <Typography variant="caption" sx={{mb: 0.5}} color="text.secondary">
                {text}
            </Typography>
        )}
        <LinearProgress/>
    </Box>
);

export default Loader;

