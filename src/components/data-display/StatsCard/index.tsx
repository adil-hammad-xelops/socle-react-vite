import {Card, CardContent, Typography} from '@mui/material';

interface StatsCardProps {
    label: string;
    value: string | number;
    sublabel?: string;
    color?: string;
}

const StatsCard = ({label, value, sublabel, color}: StatsCardProps) => (
    <Card sx={{borderLeft: color ? `4px solid ${color}` : undefined}}>
        <CardContent>
            <Typography variant="caption" color="text.secondary" gutterBottom>
                {label}
            </Typography>
            <Typography variant="h5" gutterBottom>{value}</Typography>
            {sublabel && (
                <Typography variant="body2" color="text.secondary">{sublabel}</Typography>
            )}
        </CardContent>
    </Card>
);

export default StatsCard;

