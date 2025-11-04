# Theme Configuration Guide

This project uses a centralized theme configuration system that works seamlessly with both Material-UI and styled-components.

## File Structure

```
src/theme/
├── index.ts          # Main export file
├── tokens.ts         # Design tokens (colors, spacing, typography, etc.)
├── lightTheme.ts     # Light theme configuration
└── darkTheme.ts      # Dark theme configuration
```

## Usage

### Importing Themes

```typescript
// Import themes
import { lightTheme, darkTheme } from 'theme';

// Import specific tokens
import { colors, spacing, typography, borderRadius } from 'theme';

// Import Theme type
import type { Theme } from 'theme';
```

### Using with Material-UI and Styled-Components

```typescript
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme } from 'theme';

function App() {
  return (
    <MuiThemeProvider theme={lightTheme}>
      <StyledThemeProvider theme={lightTheme}>
        {/* Your app */}
      </StyledThemeProvider>
    </MuiThemeProvider>
  );
}
```

### Theme Switching

```typescript
import { lightTheme, darkTheme } from 'theme';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const theme = mode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </ThemeProvider>
  );
}
```

### Using in Styled Components

```typescript
import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.palette.background.default};
  color: ${({ theme }) => theme.palette.text.primary};
  padding: ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
`;
```

### Using Theme Tokens Directly

```typescript
import { colors, spacing, typography } from 'theme';

const customStyle = {
  color: colors.primary.main,
  padding: `${spacing.md}px`,
  fontFamily: typography.fontFamily,
};
```

## Design Tokens

### Colors

- **Primary**: `colors.primary` - Main brand color
- **Secondary**: `colors.secondary` - Secondary brand color
- **Success**: `colors.success` - Success states
- **Error**: `colors.error` - Error states
- **Warning**: `colors.warning` - Warning states
- **Info**: `colors.info` - Info states
- **Grey**: `colors.grey` - Grey scale (50-900)

### Spacing

- `spacing.xs`: 4px
- `spacing.sm`: 8px
- `spacing.md`: 16px
- `spacing.lg`: 24px
- `spacing.xl`: 32px
- `spacing.xxl`: 48px
- `spacing.xxxl`: 64px

### Typography

- Font family: Inter, Roboto, Helvetica, Arial, sans-serif
- Font weights: 300, 400, 500, 600, 700
- Font sizes: h1, h2, h3, h4, h5, h6, body1, body2, button, caption, overline

### Border Radius

- `borderRadius.xs`: 2px
- `borderRadius.sm`: 4px
- `borderRadius.md`: 8px
- `borderRadius.lg`: 12px
- `borderRadius.xl`: 16px
- `borderRadius.xxl`: 24px
- `borderRadius.full`: 9999px (fully rounded)

### Shadows

- `shadows.none`, `shadows.xs`, `shadows.sm`, `shadows.md`
- `shadows.lg`, `shadows.xl`, `shadows.2xl`
- `shadows.inner`

### Transitions

```typescript
transitions.duration.shortest: 150ms
transitions.duration.shorter: 200ms
transitions.duration.short: 250ms
transitions.duration.standard: 300ms
transitions.duration.complex: 375ms

transitions.easing.easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)'
transitions.easing.easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)'
transitions.easing.easeIn: 'cubic-bezier(0.4, 0, 1, 1)'
transitions.easing.sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
```

## Theme Customization

### Light Theme

The light theme uses bright backgrounds with dark text. Colors are vibrant and designed for optimal readability in well-lit environments.

Key characteristics:
- Background: `#ffffff`
- Surface: `#f8fafc` (grey.50)
- Text primary: `#0f172a` (grey.900)
- Text secondary: `#64748b` (grey.600)

### Dark Theme

The dark theme uses dark backgrounds with light text. Colors are slightly desaturated to reduce eye strain in low-light environments.

Key characteristics:
- Background: `#0f172a` (grey.900)
- Surface: `#1e293b` (grey.800)
- Text primary: `#f8fafc` (grey.50)
- Text secondary: `#94a3b8` (grey.400)

## Component Overrides

Both themes include overrides for Material-UI components:

- **MuiButton**: Custom border radius, no box shadow by default, smooth transitions
- **MuiCard**: Rounded corners, custom shadows, border colors
- **MuiPaper**: Custom border radius, no background image
- **MuiTextField**: Rounded input fields
- **MuiChip**: Custom border radius
- **MuiDialog**: Large border radius, custom shadows
- **MuiTooltip**: Small border radius, custom colors
- **MuiAlert**: Medium border radius
- **MuiAppBar**: Custom shadows, no background image

## TypeScript Support

The theme is fully typed using Material-UI's Theme type. When using styled-components, the DefaultTheme interface is extended to include all Material-UI theme properties.

```typescript
// This is automatically available in all styled components
const StyledComponent = styled.div`
  // Full TypeScript autocomplete for theme properties
  color: ${({ theme }) => theme.palette.primary.main};
`;
```

## Storybook Integration

Storybook is configured to support theme switching via a toolbar toggle. Both light and dark themes are available, and the documentation pages respect the selected theme.

To switch themes in Storybook:
1. Open Storybook
2. Look for the theme toggle in the toolbar (sun/moon icon)
3. Click to switch between light and dark modes

## Best Practices

1. **Always use theme values**: Instead of hardcoding colors or spacing, use theme tokens
2. **Maintain consistency**: Use the same spacing scale throughout the app
3. **Test both themes**: Ensure your components look good in both light and dark modes
4. **Use semantic colors**: Use success/error/warning colors for their intended purposes
5. **Leverage component overrides**: Custom styling is inherited by all instances

## Migration from Old Theme

If you're migrating from the old `src/styles/theme.ts` or `src/components/ui/theme.ts`:

```typescript
// Old
import { lightTheme } from 'components/ui/theme';
import { lightTheme } from '../styles/theme';

// New
import { lightTheme } from 'theme';
```

The new theme structure is more organized and provides better TypeScript support.

