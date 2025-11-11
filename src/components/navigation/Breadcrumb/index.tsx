import {Breadcrumbs as MuiBreadcrumbs, Link, Typography} from '@mui/material';

export interface CrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbProps {
    items: CrumbItem[];
    separator?: string | JSX.Element;
}

const Breadcrumb = ({items, separator = '/'}: BreadcrumbProps) => {
    return (
        <MuiBreadcrumbs aria-label="breadcrumb" separator={separator}>
            {items.map((item, idx) =>
                item.href && idx < items.length - 1 ? (
                    <Link key={item.label} color="inherit" href={item.href} underline="hover">
                        {item.label}
                    </Link>
                ) : (
                    <Typography key={item.label} color="text.primary">
                        {item.label}
                    </Typography>
                )
            )}
        </MuiBreadcrumbs>
    );
};

export default Breadcrumb;

