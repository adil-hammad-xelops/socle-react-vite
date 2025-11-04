/**
 * Theme Configuration Index
 *
 * Central export for all theme-related configurations.
 * Provides easy access to themes, tokens, and utilities.
 */

// Export themes
export { lightTheme } from './lightTheme';
export { darkTheme } from './darkTheme';

// Export tokens
export {
  colors,
  spacing,
  typography,
  borderRadius,
  shadows,
  transitions,
  breakpoints,
  zIndex,
} from './tokens';

// Export types
export type { Theme } from '@mui/material/styles';

// Theme utilities
export const getTheme = (mode: 'light' | 'dark') => {
  const { lightTheme } = require('./lightTheme');
  const { darkTheme } = require('./darkTheme');
  return mode === 'light' ? lightTheme : darkTheme;
};

// Default export
import { lightTheme } from './lightTheme';
export default lightTheme;

