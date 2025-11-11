import {Box, Typography} from '@mui/material';

interface ChartProps {
    title?: string;
    description?: string;
    height?: number;
}

// Placeholder chart component. Replace with real chart library integration later.
const Chart = ({title = 'Chart', description, height = 240}: ChartProps) => (
    <Box sx={{border: theme => `1px solid ${theme.palette.divider}`, borderRadius: 2, p: 2}}>
        <Typography variant="subtitle1" gutterBottom>{title}</Typography>
        {description && <Typography variant="caption" color="text.secondary" gutterBottom>{description}</Typography>}
        <Box sx={{
            height,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'action.hover',
            borderRadius: 1
        }}>
            <Typography variant="body2" color="text.secondary">Chart Placeholder</Typography>
        </Box>
    </Box>
);

export default Chart;

