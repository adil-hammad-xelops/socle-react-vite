import React from 'react';
import {
  Card as MuiCard,
  CardHeader,
  CardContent,
  CardActions,
  CardMedia,
  List as MuiList,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  Avatar,
  AvatarGroup as MuiAvatarGroup,
  Accordion as MuiAccordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Divider,
  Box,
  Paper,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

// ============ Card Component ============
export interface CardProps {
  title?: string;
  subtitle?: string;
  image?: string;
  imageHeight?: number;
  avatar?: React.ReactNode;
  action?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  elevation?: number;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  image,
  imageHeight = 140,
  avatar,
  action,
  children,
  footer,
  elevation = 1,
  onClick,
}) => {
  return (
    <MuiCard elevation={elevation} onClick={onClick} sx={{ cursor: onClick ? 'pointer' : 'default' }}>
      {(title || subtitle) && (
        <CardHeader
          avatar={avatar}
          action={action}
          title={title}
          subheader={subtitle}
        />
      )}

      {image && (
        <CardMedia
          component="img"
          height={imageHeight}
          image={image}
          alt={title}
        />
      )}

      <CardContent>{children}</CardContent>

      {footer && <CardActions>{footer}</CardActions>}
    </MuiCard>
  );
};

// ============ List Component ============
export interface ListItemType {
  id: string | number;
  primary: string;
  secondary?: string;
  icon?: React.ReactNode;
  avatar?: string;
  action?: React.ReactNode;
  onClick?: () => void;
  selected?: boolean;
  disabled?: boolean;
}

export interface ListProps {
  items: ListItemType[];
  dense?: boolean;
  dividers?: boolean;
}

export const List: React.FC<ListProps> = ({
  items,
  dense = false,
  dividers = false,
}) => {
  return (
    <MuiList dense={dense}>
      {items.map((item, index) => (
        <React.Fragment key={item.id}>
          <ListItem
            secondaryAction={item.action}
            disablePadding
          >
            <ListItemButton
              onClick={item.onClick}
              selected={item.selected}
              disabled={item.disabled}
            >
              {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
              {item.avatar && (
                <ListItemIcon>
                  <Avatar src={item.avatar} />
                </ListItemIcon>
              )}
              <ListItemText
                primary={item.primary}
                secondary={item.secondary}
              />
            </ListItemButton>
          </ListItem>
          {dividers && index < items.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </MuiList>
  );
};

// ============ Accordion Component ============
export interface AccordionItemType {
  id: string | number;
  title: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface AccordionProps {
  items: AccordionItemType[];
  defaultExpanded?: string | number;
  multiple?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  defaultExpanded,
  multiple = false,
}) => {
  const [expanded, setExpanded] = React.useState<string | number | false>(defaultExpanded || false);

  const handleChange = (panel: string | number) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    if (multiple) {
      // For multiple mode, would need different state management
      setExpanded(isExpanded ? panel : false);
    } else {
      setExpanded(isExpanded ? panel : false);
    }
  };

  return (
    <>
      {items.map((item) => (
        <MuiAccordion
          key={item.id}
          expanded={expanded === item.id}
          onChange={handleChange(item.id)}
          disabled={item.disabled}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls={`${item.id}-content`}
            id={`${item.id}-header`}
          >
            <Typography>{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>{item.content}</AccordionDetails>
        </MuiAccordion>
      ))}
    </>
  );
};

// ============ Timeline Component ============
export interface TimelineItemType {
  id: string | number;
  title: string;
  description?: string;
  time?: string;
  icon?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
}

export interface TimelineProps {
  items: TimelineItemType[];
}

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <Box sx={{ position: 'relative', pl: 4 }}>
      {/* Vertical line */}
      <Box
        sx={{
          position: 'absolute',
          left: 15,
          top: 0,
          bottom: 0,
          width: 2,
          bgcolor: 'divider',
        }}
      />

      {items.map((item) => (
        <Box key={item.id} sx={{ position: 'relative', pb: 3 }}>
          {/* Timeline dot */}
          <Box
            sx={{
              position: 'absolute',
              left: -27,
              top: 4,
              width: 24,
              height: 24,
              borderRadius: '50%',
              bgcolor: `${item.color || 'primary'}.main`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: 14,
            }}
          >
            {item.icon}
          </Box>

          <Paper sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="subtitle1" fontWeight="bold">
                {item.title}
              </Typography>
              {item.time && (
                <Typography variant="caption" color="text.secondary">
                  {item.time}
                </Typography>
              )}
            </Box>
            {item.description && (
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            )}
          </Paper>
        </Box>
      ))}
    </Box>
  );
};

// ============ AvatarGroup Component ============
export interface AvatarGroupProps {
  avatars: Array<{
    src?: string;
    alt?: string;
    name?: string;
  }>;
  max?: number;
  size?: 'small' | 'medium' | 'large';
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  avatars,
  max = 5,
  size = 'medium',
}) => {
  const sizeMap = {
    small: 32,
    medium: 40,
    large: 56,
  };

  return (
    <MuiAvatarGroup max={max}>
      {avatars.map((avatar, index) => (
        <Avatar
          key={index}
          src={avatar.src}
          alt={avatar.alt || avatar.name}
          sx={{ width: sizeMap[size], height: sizeMap[size] }}
        >
          {!avatar.src && avatar.name?.charAt(0).toUpperCase()}
        </Avatar>
      ))}
    </MuiAvatarGroup>
  );
};

// ============ Carousel Component ============
export interface CarouselProps {
  items: Array<{
    id: string | number;
    content: React.ReactNode;
  }>;
  autoPlay?: boolean;
  interval?: number;
  showControls?: boolean;
}

export const Carousel: React.FC<CarouselProps> = ({
  items,
  autoPlay = false,
  interval = 3000,
  showControls = true,
}) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, items.length]);


  return (
    <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      {items.map((item, index) => (
        <Box
          key={item.id}
          sx={{
            display: index === activeIndex ? 'block' : 'none',
            width: '100%',
          }}
        >
          {item.content}
        </Box>
      ))}

      {showControls && items.length > 1 && (
        <Box
          sx={{
            position: 'absolute',
            bottom: 16,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 1,
          }}
        >
          {items.map((_, index) => (
            <Box
              key={index}
              onClick={() => setActiveIndex(index)}
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                bgcolor: index === activeIndex ? 'primary.main' : 'grey.400',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
              }}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

/**
 * Data Display components examples:
 *
 * @example
 * ```tsx
 * <Card
 *   title="Product Name"
 *   subtitle="Category"
 *   image="/product.jpg"
 *   footer={<Button>Add to Cart</Button>}
 * >
 *   Product description here
 * </Card>
 *
 * <List
 *   items={[
 *     { id: 1, primary: 'Item 1', secondary: 'Description', icon: <Star /> },
 *     { id: 2, primary: 'Item 2', onClick: () => {} }
 *   ]}
 * />
 *
 * <Accordion
 *   items={[
 *     { id: 1, title: 'Section 1', content: <div>Content</div> }
 *   ]}
 * />
 *
 * <Timeline
 *   items={[
 *     { id: 1, title: 'Event 1', time: '10:00 AM', icon: <Check /> }
 *   ]}
 * />
 * ```
 */

