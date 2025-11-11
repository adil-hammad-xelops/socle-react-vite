import {List as MuiList, ListItem, ListItemText, Paper} from '@mui/material';

interface ListProps<T = any> {
    items: T[];
    getKey?: (item: T, index: number) => string | number;
    getLabel?: (item: T) => string;
}

const List = <T, >({items, getKey, getLabel}: ListProps<T>) => (
    <Paper>
        <MuiList>
            {items.map((item, i) => (
                <ListItem key={getKey ? getKey(item, i) : i} divider>
                    <ListItemText primary={getLabel ? getLabel(item) : String(item)}/>
                </ListItem>
            ))}
        </MuiList>
    </Paper>
);

export default List;

