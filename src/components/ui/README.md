# UI Component Library Documentation

A comprehensive, production-ready React + TypeScript UI component library built with Material-UI.

## 📁 Project Structure

```
src/components/ui/
├── theme.ts                 # Design tokens and theme configuration
├── basic/                   # Basic UI elements
│   ├── Button.tsx
│   ├── Typography.tsx
│   ├── Badge.tsx
│   ├── Chip.tsx
│   ├── Tooltip.tsx
│   ├── Divider.tsx
│   ├── Icon.tsx
│   └── index.ts
├── form/                    # Form components
│   ├── Input.tsx
│   ├── TextArea.tsx
│   ├── FormControls.tsx     # Checkbox, Radio, Switch, Slider, Select
│   ├── AdvancedFormControls.tsx  # DatePicker, FileUpload, SearchField
│   └── index.ts
├── navigation/              # Navigation components
│   ├── Navigation.tsx       # Navbar, Sidebar, Tabs, Breadcrumbs, etc.
│   ├── Menu.tsx
│   └── index.ts
├── feedback/                # Feedback components
│   ├── Feedback.tsx         # Modal, Dialog, Alert, Toast, etc.
│   └── index.ts
├── data-display/            # Data display components
│   ├── DataDisplay.tsx      # Card, List, Accordion, Timeline, etc.
│   ├── TableTreeView.tsx
│   └── index.ts
├── layout/                  # Layout components
│   ├── Layout.tsx           # Container, Grid, Stack, Box, etc.
│   └── index.ts
├── visualization/           # Data visualization
│   ├── Visualization.tsx    # ChartWrapper, Gauge, CalendarView
│   └── index.ts
├── advanced/                # Advanced components
│   ├── Advanced.tsx         # CommandPalette, NotificationCenter, etc.
│   └── index.ts
└── index.ts                 # Main export file
```

## 🚀 Getting Started

### Installation

The components use Material-UI as a foundation. Make sure you have the required dependencies:

```bash
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
```

### Basic Usage

```tsx
import { Button, Card, Typography } from './components/ui';

function App() {
  return (
    <Card title="Welcome">
      <Typography variant="body1">Hello World</Typography>
      <Button variant="primary">Click Me</Button>
    </Card>
  );
}
```

### Theme Setup

```tsx
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme } from './components/ui';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      {/* Your app content */}
    </ThemeProvider>
  );
}
```

## 📦 Component Categories

### 1. Basic Elements

#### Button
Versatile button component with multiple variants.

```tsx
<Button variant="primary" size="medium" loading={false}>
  Click Me
</Button>

<Button variant="outline" startIcon={<Icon name="Add" />}>
  Add Item
</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
- `size`: 'small' | 'medium' | 'large'
- `loading`: boolean
- `disabled`: boolean
- `fullWidth`: boolean

#### Typography
Text component with consistent styling.

```tsx
<Typography variant="h1">Main Heading</Typography>
<Typography variant="body1" color="textSecondary">
  Description text
</Typography>
```

#### Badge
Display notifications or status indicators.

```tsx
<Badge content={5} color="error">
  <Icon name="Mail" />
</Badge>
```

#### Chip
Compact elements for tags or filters.

```tsx
<Chip label="Active" color="success" />
<Chip label="Tag" onDelete={() => {}} />
```

### 2. Form Elements

#### Input
Text input with validation and adornments.

```tsx
<Input
  label="Email"
  type="email"
  placeholder="Enter email"
  error={hasError}
  helperText="Invalid email"
  required
/>
```

#### TextArea
Multi-line text input.

```tsx
<TextArea
  label="Description"
  rows={4}
  placeholder="Enter description"
/>
```

#### Select
Dropdown selection component.

```tsx
<Select
  label="Country"
  options={[
    { label: 'USA', value: 'us' },
    { label: 'Canada', value: 'ca' }
  ]}
  value={country}
  onChange={(e) => setCountry(e.target.value)}
/>
```

#### Checkbox, Radio, Switch
Form control components.

```tsx
<Checkbox label="Accept terms" checked={accepted} onChange={(e, checked) => setAccepted(checked)} />

<Radio
  label="Choose option"
  options={[{ label: 'Option 1', value: '1' }]}
  value={selected}
  onChange={(e) => setSelected(e.target.value)}
/>

<Switch label="Enable notifications" checked={enabled} onChange={(e, checked) => setEnabled(checked)} />
```

#### DatePicker
Date selection component.

```tsx
<DatePicker
  label="Birth Date"
  value={date}
  onChange={setDate}
/>
```

#### SearchField
Search input with clear functionality.

```tsx
<SearchField
  value={search}
  onChange={setSearch}
  onSearch={handleSearch}
  placeholder="Search..."
/>
```

### 3. Navigation

#### Navbar
Top navigation bar.

```tsx
<Navbar
  title="My App"
  onMenuClick={() => setDrawerOpen(true)}
  actions={<NotificationCenter />}
/>
```

#### Sidebar
Side navigation drawer.

```tsx
<Sidebar
  items={[
    { label: 'Home', icon: <Home />, onClick: () => {} },
    { label: 'Settings', icon: <Settings />, onClick: () => {} }
  ]}
  open={drawerOpen}
  onClose={() => setDrawerOpen(false)}
/>
```

#### Tabs
Tabbed navigation.

```tsx
<Tabs
  tabs={[
    { label: 'Tab 1', value: '1' },
    { label: 'Tab 2', value: '2' }
  ]}
  value={activeTab}
  onChange={setActiveTab}
/>
```

#### Breadcrumbs
Navigation path.

```tsx
<Breadcrumbs
  items={[
    { label: 'Home', onClick: () => {} },
    { label: 'Products', onClick: () => {} },
    { label: 'Details' }
  ]}
/>
```

#### Pagination
Page navigation.

```tsx
<Pagination
  count={10}
  page={page}
  onChange={setPage}
/>
```

### 4. Feedback

#### Modal
Modal dialog.

```tsx
<Modal open={open} onClose={() => setOpen(false)}>
  <Typography variant="h6">Modal Content</Typography>
</Modal>
```

#### Dialog
Dialog with title and actions.

```tsx
<Dialog
  open={open}
  onClose={() => setOpen(false)}
  title="Confirm"
  actions={<Button onClick={handleConfirm}>OK</Button>}
>
  Are you sure?
</Dialog>
```

#### Alert
Alert message.

```tsx
<Alert severity="success" title="Success">
  Operation completed!
</Alert>
```

#### Toast
Toast notification.

```tsx
<Toast
  open={showToast}
  message="Saved successfully"
  severity="success"
  onClose={() => setShowToast(false)}
/>
```

#### ProgressBar
Progress indicator.

```tsx
<ProgressBar value={75} showLabel />
```

#### Spinner
Loading spinner.

```tsx
<Spinner size="large" label="Loading..." centered />
```

#### Skeleton
Loading placeholder.

```tsx
<Skeleton variant="rectangular" width={210} height={118} />
```

### 5. Data Display

#### Card
Content container.

```tsx
<Card
  title="Product"
  subtitle="Description"
  image="/image.jpg"
  footer={<Button>View</Button>}
>
  Content here
</Card>
```

#### List
List of items.

```tsx
<List
  items={[
    { id: '1', primary: 'Item 1', secondary: 'Details', icon: <Star /> }
  ]}
  dividers
/>
```

#### Table
Data table with sorting and pagination.

```tsx
<Table
  columns={[
    { id: 'name', label: 'Name', sortable: true },
    { id: 'email', label: 'Email' }
  ]}
  rows={data}
  selectable
  sortable
  pagination
/>
```

#### Accordion
Expandable sections.

```tsx
<Accordion
  items={[
    { id: '1', title: 'Section 1', content: <div>Content</div> }
  ]}
/>
```

#### Timeline
Event timeline.

```tsx
<Timeline
  items={[
    { id: '1', title: 'Event', description: 'Details', time: '2h ago', icon: <Check /> }
  ]}
/>
```

### 6. Layout

#### Container
Responsive container.

```tsx
<Container maxWidth="lg">
  {/* Content */}
</Container>
```

#### Grid
Responsive grid layout.

```tsx
<Grid container spacing={3}>
  <Grid item xs={12} md={6}>
    <Card>Content</Card>
  </Grid>
  <Grid item xs={12} md={6}>
    <Card>Content</Card>
  </Grid>
</Grid>
```

#### Stack
Flexbox stack layout.

```tsx
<Stack direction="row" spacing={2} justifyContent="space-between">
  <Button>Cancel</Button>
  <Button>Save</Button>
</Stack>
```

### 7. Visualization

#### ChartWrapper
Simple chart component.

```tsx
<ChartWrapper
  type="bar"
  title="Sales"
  data={[
    { label: 'Jan', value: 120 },
    { label: 'Feb', value: 150 }
  ]}
/>
```

#### Gauge
Gauge meter.

```tsx
<Gauge
  value={75}
  max={100}
  label="Performance"
  color="success"
/>
```

#### CalendarView
Calendar with events.

```tsx
<CalendarView
  events={[
    { id: '1', title: 'Meeting', date: new Date() }
  ]}
  onDateClick={(date) => console.log(date)}
/>
```

### 8. Advanced

#### CommandPalette
Command/search palette (Cmd+K).

```tsx
<CommandPalette
  open={open}
  onClose={() => setOpen(false)}
  commands={[
    { id: '1', label: 'Go to Dashboard', action: () => {} }
  ]}
/>
```

#### NotificationCenter
Notification dropdown.

```tsx
<NotificationCenter
  notifications={[
    { id: '1', title: 'New message', message: 'You have mail', timestamp: new Date() }
  ]}
  onMarkAsRead={(id) => {}}
/>
```

#### ThemeToggle
Light/dark mode toggle.

```tsx
<ThemeToggle mode={theme} onChange={setTheme} />
```

#### UserMenu
User profile menu.

```tsx
<UserMenu
  user={{ name: 'John Doe', email: 'john@example.com' }}
  onLogout={() => console.log('Logout')}
/>
```

## 🎨 Customization

### Theme Customization

Edit `theme.ts` to customize colors, typography, spacing, etc.

```typescript
export const colors = {
  primary: {
    main: '#your-color',
    // ...
  },
  // ...
};
```

### Component Styling

All components accept MUI's `sx` prop for custom styling:

```tsx
<Button sx={{ borderRadius: 2, px: 4 }}>
  Custom Styled
</Button>
```

## 📱 Responsive Design

Components are built with responsive design in mind:

```tsx
<Grid item xs={12} sm={6} md={4} lg={3}>
  {/* Responsive grid item */}
</Grid>
```

## ♿ Accessibility

All components include ARIA attributes and keyboard navigation:

- Proper ARIA labels
- Keyboard navigation support
- Focus management
- Screen reader support

## 🔧 Best Practices

1. **Import from index**: Always import from the main index file
```tsx
import { Button, Card } from './components/ui';
```

2. **Use TypeScript**: All components are fully typed
3. **Theme Provider**: Wrap your app with ThemeProvider
4. **Responsive**: Use Grid and responsive props
5. **Accessibility**: Test with keyboard navigation

## 📄 License

This component library is part of your project and follows your project's license.

## 🤝 Contributing

When adding new components:
1. Follow the existing component structure
2. Include TypeScript interfaces
3. Add JSDoc comments
4. Include usage examples
5. Ensure accessibility
6. Export from index.ts

