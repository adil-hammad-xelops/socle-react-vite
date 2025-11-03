import React from 'react';
import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  TableSortLabel,
  Checkbox,
  Paper,
  Box,
  IconButton,
  Collapse,
  Typography,
} from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowRight } from '@mui/icons-material';

// ============ Table Component ============
export interface TableColumn {
  id: string;
  label: string;
  minWidth?: number;
  align?: 'left' | 'center' | 'right';
  format?: (value: any) => string | React.ReactNode;
  sortable?: boolean;
}

export interface TableProps {
  columns: TableColumn[];
  rows: any[];
  selectable?: boolean;
  selectedRows?: string[];
  onSelectRow?: (ids: string[]) => void;
  sortable?: boolean;
  pagination?: boolean;
  rowsPerPageOptions?: number[];
  dense?: boolean;
  stickyHeader?: boolean;
}

export const Table: React.FC<TableProps> = ({
  columns,
  rows,
  selectable = false,
  selectedRows = [],
  onSelectRow,
  sortable = false,
  pagination = false,
  rowsPerPageOptions = [10, 25, 50],
  dense = false,
  stickyHeader = false,
}) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(rowsPerPageOptions[0]);
  const [orderBy, setOrderBy] = React.useState<string>('');
  const [order, setOrder] = React.useState<'asc' | 'desc'>('asc');

  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const allIds = rows.map((row) => row.id);
      onSelectRow?.(allIds);
    } else {
      onSelectRow?.([]);
    }
  };

  const handleSelectRow = (id: string) => {
    const newSelected = selectedRows.includes(id)
      ? selectedRows.filter((rowId) => rowId !== id)
      : [...selectedRows, id];
    onSelectRow?.(newSelected);
  };

  const handleSort = (columnId: string) => {
    const isAsc = orderBy === columnId && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(columnId);
  };

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const sortedRows = React.useMemo(() => {
    if (!sortable || !orderBy) return rows;

    return [...rows].sort((a, b) => {
      const aValue = a[orderBy];
      const bValue = b[orderBy];

      if (order === 'asc') {
        return aValue > bValue ? 1 : -1;
      }
      return aValue < bValue ? 1 : -1;
    });
  }, [rows, orderBy, order, sortable]);

  const displayedRows = pagination
    ? sortedRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    : sortedRows;

  return (
    <Paper>
      <TableContainer>
        <MuiTable stickyHeader={stickyHeader} size={dense ? 'small' : 'medium'}>
          <TableHead>
            <TableRow>
              {selectable && (
                <TableCell padding="checkbox">
                  <Checkbox
                    indeterminate={
                      selectedRows.length > 0 && selectedRows.length < rows.length
                    }
                    checked={rows.length > 0 && selectedRows.length === rows.length}
                    onChange={handleSelectAll}
                  />
                </TableCell>
              )}
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {sortable && column.sortable !== false ? (
                    <TableSortLabel
                      active={orderBy === column.id}
                      direction={orderBy === column.id ? order : 'asc'}
                      onClick={() => handleSort(column.id)}
                    >
                      {column.label}
                    </TableSortLabel>
                  ) : (
                    column.label
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedRows.map((row) => {
              const isSelected = selectedRows.includes(row.id);

              return (
                <TableRow
                  key={row.id}
                  hover
                  selected={isSelected}
                  role="checkbox"
                  aria-checked={isSelected}
                >
                  {selectable && (
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isSelected}
                        onChange={() => handleSelectRow(row.id)}
                      />
                    </TableCell>
                  )}
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </MuiTable>
      </TableContainer>

      {pagination && (
        <TablePagination
          rowsPerPageOptions={rowsPerPageOptions}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )}
    </Paper>
  );
};

// ============ TreeView Component ============
export interface TreeNode {
  id: string;
  label: string;
  children?: TreeNode[];
  icon?: React.ReactNode;
}

interface TreeItemProps {
  node: TreeNode;
  level?: number;
  onNodeClick?: (node: TreeNode) => void;
}

const TreeItem: React.FC<TreeItemProps> = ({ node, level = 0, onNodeClick }) => {
  const [open, setOpen] = React.useState(false);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          py: 1,
          px: 2,
          pl: 2 + level * 2,
          cursor: 'pointer',
          '&:hover': {
            bgcolor: 'action.hover',
          },
        }}
        onClick={() => {
          if (hasChildren) {
            setOpen(!open);
          }
          onNodeClick?.(node);
        }}
      >
        {hasChildren ? (
          <IconButton size="small" sx={{ mr: 1 }}>
            {open ? <KeyboardArrowDown /> : <KeyboardArrowRight />}
          </IconButton>
        ) : (
          <Box sx={{ width: 40 }} />
        )}

        {node.icon && <Box sx={{ mr: 1, display: 'flex' }}>{node.icon}</Box>}

        <Typography>{node.label}</Typography>
      </Box>

      {hasChildren && (
        <Collapse in={open}>
          {node.children!.map((child) => (
            <TreeItem
              key={child.id}
              node={child}
              level={level + 1}
              onNodeClick={onNodeClick}
            />
          ))}
        </Collapse>
      )}
    </Box>
  );
};

export interface TreeViewProps {
  data: TreeNode[];
  onNodeClick?: (node: TreeNode) => void;
}

export const TreeView: React.FC<TreeViewProps> = ({ data, onNodeClick }) => {
  return (
    <Paper>
      {data.map((node) => (
        <TreeItem key={node.id} node={node} onNodeClick={onNodeClick} />
      ))}
    </Paper>
  );
};

/**
 * Table and TreeView components examples:
 *
 * @example
 * ```tsx
 * <Table
 *   columns={[
 *     { id: 'name', label: 'Name', sortable: true },
 *     { id: 'age', label: 'Age', align: 'right' },
 *     { id: 'status', label: 'Status', format: (val) => <Chip label={val} /> }
 *   ]}
 *   rows={[
 *     { id: '1', name: 'John', age: 30, status: 'active' }
 *   ]}
 *   selectable
 *   sortable
 *   pagination
 * />
 *
 * <TreeView
 *   data={[
 *     {
 *       id: '1',
 *       label: 'Root',
 *       children: [
 *         { id: '1-1', label: 'Child 1' },
 *         { id: '1-2', label: 'Child 2' }
 *       ]
 *     }
 *   ]}
 *   onNodeClick={(node) => console.log(node)}
 * />
 * ```
 */

