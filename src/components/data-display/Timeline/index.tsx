import {Box, Divider, List, ListItem, ListItemText} from '@mui/material';

export interface TimelineEvent {
    label: string;
    timestamp: string;
}

interface TimelineProps {
    events: TimelineEvent[];
}

const Timeline = ({events}: TimelineProps) => (
    <Box>
        <List>
            {events.map((e, i) => (
                <Box key={i}>
                    <ListItem>
                        <ListItemText primary={e.label} secondary={e.timestamp}/>
                    </ListItem>
                    {i < events.length - 1 && <Divider component="li"/>}
                </Box>
            ))}
        </List>
    </Box>
);

export default Timeline;

