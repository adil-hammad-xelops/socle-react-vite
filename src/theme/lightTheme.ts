/**
 * Light Theme Configuration
 *
 * Material-UI theme configuration for light mode.
 * Includes palette, typography, spacing, and component overrides.
 */

import { createTheme } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';
import { colors, spacing, borderRadius, shadows, transitions, breakpoints, zIndex } from './tokens';
import { typographyConfig } from './typography';

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: colors.primary,
    secondary: colors.secondary,
    success: colors.success,
    error: colors.error,
    warning: colors.warning,
    info: colors.info,
    grey: colors.grey,
    background: {
      default: '#ffffff',
      paper: colors.grey[50],
    },
    text: {
      primary: colors.grey[900],
      secondary: colors.grey[600],
      disabled: colors.grey[400],
    },
    divider: colors.grey[200],
    action: {
      active: colors.grey[600],
      hover: 'rgba(0, 0, 0, 0.04)',
      selected: 'rgba(0, 0, 0, 0.08)',
      disabled: colors.grey[400],
      disabledBackground: colors.grey[200],
    },
  },
  typography: typographyConfig,
  shape: {
    borderRadius: borderRadius.md,
  },
  spacing: spacing.sm,
  breakpoints: {
    values: breakpoints,
  },
  zIndex: zIndex,
  transitions: {
    duration: transitions.duration,
    easing: transitions.easing,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius.md,
          textTransform: 'none',
          fontWeight: 500,
          boxShadow: shadows.none,
          transition: `all ${transitions.duration.short}ms ${transitions.easing.easeInOut}`,
          '&:hover': {
            boxShadow: shadows.sm,
          },
        },
        sizeLarge: {
          padding: '12px 24px',
          fontSize: '1rem',
        },
        sizeMedium: {
          padding: '8px 16px',
          fontSize: '0.875rem',
        },
        sizeSmall: {
          padding: '6px 12px',
          fontSize: '0.75rem',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius.lg,
          boxShadow: shadows.md,
          border: `1px solid ${colors.grey[200]}`,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius.md,
          backgroundImage: 'none',
        },
        elevation1: {
          boxShadow: shadows.sm,
        },
        elevation2: {
          boxShadow: shadows.md,
        },
        elevation3: {
          boxShadow: shadows.lg,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: borderRadius.md,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius.sm,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: borderRadius.lg,
          boxShadow: shadows.xl,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          borderRadius: borderRadius.sm,
          fontSize: '0.75rem',
          backgroundColor: colors.grey[900],
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius.md,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: shadows.sm,
        },
      },
    },
  },
};

export const lightTheme = createTheme(lightThemeOptions);
export default lightTheme;

