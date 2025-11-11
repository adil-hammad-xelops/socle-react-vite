# Layout Sidebar Component

## Overview

A comprehensive sidebar navigation component with Material-UI integration, theme support, and flexible configuration
options.

## Features

✅ **Material-UI Based** - Built on MUI Drawer component  
✅ **Theme Support** - Automatically adapts to light/dark theme  
✅ **Variants** - Temporary, Persistent, or Permanent  
✅ **Icons** - Support for icon integration  
✅ **Selection State** - Tracks active menu item  
✅ **Badges** - Optional notification badges  
✅ **Customizable** - Width, title, footer options  
✅ **Responsive** - Auto-closes on mobile after selection  
✅ **TypeScript** - Full type definitions

## Usage

### Basic Example

```tsx
import { useState } from 'react';
import { Sidebar } from 'components/layout';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';

const MyApp = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <button onClick={() => setSidebarOpen(true)}>
        Open Menu
      </button>

      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        items={[
          { label: 'Home', icon: <HomeIcon />, path: '/' },
          { label: 'Settings', icon: <SettingsIcon />, path: '/settings' },
        ]}
      />
    </>
  );
};
```

### With Custom Items and Callbacks

```tsx
import { Sidebar } from 'components/layout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import MailIcon from '@mui/icons-material/Mail';

const menuItems = [
  { 
    label: 'Dashboard', 
    icon: <DashboardIcon />, 
    onClick: () => console.log('Dashboard clicked') 
  },
  { 
    label: 'Users', 
    icon: <PeopleIcon />, 
    path: '/users' 
  },
  { 
    label: 'Messages', 
    icon: <MailIcon />, 
    path: '/messages',
    badge: 5  // Shows notification badge
  },
];

<Sidebar
  open={open}
  onClose={handleClose}
  items={menuItems}
  title="My Application"
/>
```

### With Footer

```tsx
import { Sidebar } from 'components/layout';
import { Avatar, Typography, Box } from '@mui/material';

<Sidebar
  open={open}
  onClose={handleClose}
  items={menuItems}
  footer={
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Avatar sx={{ width: 32, height: 32 }}>JD</Avatar>
      <Box>
        <Typography variant="body2">John Doe</Typography>
        <Typography variant="caption" color="text.secondary">
          john@example.com
        </Typography>
      </Box>
    </Box>
  }
/>
```

### Permanent Sidebar (Desktop)

```tsx
// For desktop layouts with always-visible sidebar
<Sidebar
  open={true}
  onClose={() => {}}
  variant="permanent"
  items={menuItems}
  width={280}
/>
```

### Persistent Sidebar

```tsx
// Sidebar stays open but can be toggled
<Sidebar
  open={sidebarOpen}
  onClose={() => setSidebarOpen(false)}
  variant="persistent"
  items={menuItems}
/>
```

## Props

| Prop      | Type                                         | Default       | Description                        |
|-----------|----------------------------------------------|---------------|------------------------------------|
| `open`    | `boolean`                                    | Required      | Controls sidebar visibility        |
| `onClose` | `() => void`                                 | Required      | Callback when sidebar should close |
| `items`   | `SidebarItem[]`                              | Default items | Array of menu items                |
| `width`   | `number`                                     | `260`         | Sidebar width in pixels            |
| `variant` | `'temporary' \| 'persistent' \| 'permanent'` | `'temporary'` | Sidebar behavior variant           |
| `title`   | `string`                                     | `'Menu'`      | Sidebar header title               |
| `footer`  | `ReactNode`                                  | `undefined`   | Optional footer content            |

## SidebarItem Interface

```typescript
interface SidebarItem {
  label: string;              // Display text
  icon?: React.ReactNode;     // Optional icon
  path?: string;              // Navigation path
  onClick?: () => void;       // Click handler
  badge?: number | string;    // Optional notification badge
}
```

## Examples by Use Case

### E-commerce App

```tsx
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CategoryIcon from '@mui/icons-material/Category';
import InventoryIcon from '@mui/icons-material/Inventory';
import AnalyticsIcon from '@mui/icons-material/Analytics';

const items = [
  { label: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
  { label: 'Products', icon: <CategoryIcon />, path: '/products' },
  { label: 'Orders', icon: <ShoppingCartIcon />, path: '/orders', badge: 12 },
  { label: 'Inventory', icon: <InventoryIcon />, path: '/inventory' },
  { label: 'Analytics', icon: <AnalyticsIcon />, path: '/analytics' },
];
```

### Admin Dashboard

```tsx
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import GroupIcon from '@mui/icons-material/Group';
import ReportIcon from '@mui/icons-material/Report';

const items = [
  { label: 'Overview', icon: <DashboardIcon />, path: '/' },
  { label: 'Users', icon: <GroupIcon />, path: '/users' },
  { label: 'Settings', icon: <SettingsIcon />, path: '/settings' },
  { label: 'Admin Panel', icon: <AdminPanelSettingsIcon />, path: '/admin' },
  { label: 'Reports', icon: <ReportIcon />, path: '/reports', badge: 'New' },
];
```

### Social Media App

```tsx
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import FavoriteIcon from '@mui/icons-material/Favorite';

const items = [
  { label: 'Feed', icon: <HomeIcon />, path: '/feed' },
  { label: 'Messages', icon: <MessageIcon />, path: '/messages', badge: 3 },
  { label: 'Notifications', icon: <NotificationsIcon />, path: '/notifications', badge: 8 },
  { label: 'Favorites', icon: <FavoriteIcon />, path: '/favorites' },
  { label: 'Profile', icon: <PersonIcon />, path: '/profile' },
];
```

## Responsive Usage

```tsx
import { useMediaQuery, useTheme } from '@mui/material';

const MyLayout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);

  return (
    <>
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        variant={isMobile ? 'temporary' : 'permanent'}
        items={menuItems}
      />
      {/* Your content */}
    </>
  );
};
```

## Styling

The Sidebar uses styled-components and respects your theme:

- **Light Mode**: White background with subtle borders
- **Dark Mode**: Dark background with theme-appropriate colors
- **Selected Item**: Highlighted with theme's action.selected color
- **Hover States**: Smooth transitions and hover effects

## Best Practices

1. **Use Icons**: Always provide icons for better UX
2. **Limit Items**: Keep menu items between 5-8 for usability
3. **Badges**: Use sparingly for important notifications
4. **Footer**: Great for user profile or app info
5. **Responsive**: Use temporary variant on mobile, permanent on desktop

## Integration with Layout

```tsx
import { PageLayout, Sidebar } from 'components/layout';
import { useState } from 'react';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <PageLayout 
      title="My App"
      onMenuClick={() => setSidebarOpen(true)}
    >
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        items={menuItems}
      />
      
      {/* Your page content */}
    </PageLayout>
  );
};
```

## Theme Customization

The Sidebar automatically uses your Material-UI theme colors. To customize:

```tsx
// In your theme file
const theme = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          // Custom sidebar styles
        },
      },
    },
  },
});
```

---

**File**: `src/components/layout/Sidebar/index.tsx`  
**Styled Components**: `src/components/layout/Sidebar/Sidebar.styled.ts`  
**Export**: Available from `components/layout`

**Ready to use!** 🚀

