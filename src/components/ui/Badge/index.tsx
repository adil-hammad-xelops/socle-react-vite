import {Badge as MuiBadge, type BadgeProps} from '@mui/material';

interface AppBadgeProps extends BadgeProps {
}

const Badge = ({children, color = 'primary', max = 99, ...rest}: AppBadgeProps) => {
    return (
        <MuiBadge color={color} max={max} {...rest}>
            {children}
        </MuiBadge>
    );
};

export default Badge;

