import {Paper, Table as MuiTable, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';

export interface TableColumn<T = any> {
    key: string;
    label: string;
    render?: (row: T) => React.ReactNode;
}

interface TableProps<T = any> {
    columns: TableColumn<T>[];
    data: T[];
    dense?: boolean;
}

const Table = <T, >({columns, data, dense = false}: TableProps<T>) => (
    <TableContainer component={Paper}>
        <MuiTable size={dense ? 'small' : 'medium'}>
            <TableHead>
                <TableRow>
                    {columns.map(col => (
                        <TableCell key={col.key}>{col.label}</TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((row, idx) => (
                    <TableRow key={idx} hover>
                        {columns.map(col => (
                            <TableCell key={col.key}>{col.render ? col.render(row) : (row as any)[col.key]}</TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </MuiTable>
    </TableContainer>
);

export default Table;
