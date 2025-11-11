import {Box, Button, Typography} from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';

interface EmptyStateProps {
    title?: string;
    description?: string;
    actionLabel?: string;
    onAction?: () => void;
}

const EmptyState = ({
                        title = 'No Data',
                        description = 'There is nothing to show here yet.',
                        actionLabel,
                        onAction,
                    }: EmptyStateProps) => (
    <Box sx={{textAlign: 'center', py: 6, px: 2}}>
        <InboxIcon sx={{fontSize: 48, mb: 2, color: 'text.secondary'}}/>
        <Typography variant="h6" gutterBottom>
            {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{mb: 3}}>
            {description}
        </Typography>
        {actionLabel && (
            <Button variant="contained" onClick={onAction}>
                {actionLabel}
            </Button>
        )}
    </Box>
);

export default EmptyState;

