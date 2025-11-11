import {ReactNode} from 'react';
import {CardActions, CardContent, CardHeader, CardMedia} from '@mui/material';
import {StyledCard} from './Card.styled';

interface CardProps {
    children: ReactNode;
    title?: string;
    subtitle?: string;
    image?: string;
    actions?: ReactNode;
    elevation?: number;
    variant?: 'elevation' | 'outlined';
    onClick?: () => void;
}

const Card = ({
                  children,
                  title,
                  subtitle,
                  image,
                  actions,
                  elevation = 1,
                  variant = 'elevation',
                  onClick,
              }: CardProps) => {
    return (
        <StyledCard
            elevation={elevation}
            variant={variant}
            onClick={onClick}
            sx={{cursor: onClick ? 'pointer' : 'default'}}
        >
            {title && (
                <CardHeader
                    title={title}
                    subheader={subtitle}
                />
            )}

            {image && (
                <CardMedia
                    component="img"
                    height="200"
                    image={image}
                    alt={title || 'Card image'}
                />
            )}

            <CardContent>
                {children}
            </CardContent>

            {actions && (
                <CardActions>
                    {actions}
                </CardActions>
            )}
        </StyledCard>
    );
};

export default Card;

