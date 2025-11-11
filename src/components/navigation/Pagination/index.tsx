import {Pagination as MuiPagination, type PaginationProps} from '@mui/material';

const Pagination = ({color = 'primary', ...rest}: PaginationProps) => {
    return <MuiPagination color={color} {...rest} />;
};

export default Pagination;

