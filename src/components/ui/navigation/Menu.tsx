import React from 'react';
import { Menu as MuiMenu, MenuItem, ListItemIcon, ListItemText, Divider } from '@mui/material';

// ============ Menu Component ============
export interface MenuItemType {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  divider?: boolean;
}

export interface MenuProps {
  items: MenuItemType[];
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
  anchorOrigin?: {
    vertical: 'top' | 'center' | 'bottom';
    horizontal: 'left' | 'center' | 'right';
  };
  transformOrigin?: {
    vertical: 'top' | 'center' | 'bottom';
    horizontal: 'left' | 'center' | 'right';
  };
}

export const Menu: React.FC<MenuProps> = ({
  items,
  anchorEl,
  open,
  onClose,
  anchorOrigin = { vertical: 'bottom', horizontal: 'right' },
  transformOrigin = { vertical: 'top', horizontal: 'right' },
}) => {
  const handleItemClick = (item: MenuItemType) => {
    item.onClick?.();
    onClose();
  };

  return (
    <MuiMenu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      anchorOrigin={anchorOrigin}
      transformOrigin={transformOrigin}
    >
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {item.divider && <Divider />}
          <MenuItem
            onClick={() => handleItemClick(item)}
            disabled={item.disabled}
          >
            {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
            <ListItemText>{item.label}</ListItemText>
          </MenuItem>
        </React.Fragment>
      ))}
    </MuiMenu>
  );
};

// ============ DropdownMenu Component ============
export interface DropdownMenuProps {
  trigger: React.ReactElement;
  items: MenuItemType[];
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ trigger, items }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {React.cloneElement(trigger, {
        onClick: handleClick,
        'aria-controls': open ? 'dropdown-menu' : undefined,
        'aria-haspopup': 'true',
        'aria-expanded': open ? 'true' : undefined,
      })}
      <Menu
        items={items}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      />
    </>
  );
};

/**
 * Menu components examples:
 *
 * @example
 * ```tsx
 * const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
 *
 * <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
 *   <MoreVert />
 * </IconButton>
 *
 * <Menu
 *   items={[
 *     { label: 'Edit', icon: <Edit />, onClick: handleEdit },
 *     { label: 'Delete', icon: <Delete />, onClick: handleDelete }
 *   ]}
 *   anchorEl={anchorEl}
 *   open={Boolean(anchorEl)}
 *   onClose={() => setAnchorEl(null)}
 * />
 *
 * <DropdownMenu
 *   trigger={<Button>Options</Button>}
 *   items={[
 *     { label: 'Profile', onClick: () => navigate('/profile') },
 *     { label: 'Logout', onClick: handleLogout }
 *   ]}
 * />
 * ```
 */

