import type { TypographyOptions } from '@mui/material/styles/createTypography';

/**
 * Typography Configuration
 *
 * Font Strategy:
 * - Inter: Body text, UI elements, buttons, forms (readability & UI consistency)
 * - Poppins: Headings, display text, hero sections (visual impact & branding)
 * - Extensible: Easy to add more font families as needed
 */

// ============================================================================
// Font Stacks - Define all available fonts with proper fallbacks
// ============================================================================

/**
 * System font fallback stack for optimal cross-platform rendering
 */
const systemFontStack = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
].join(',');

/**
 * Inter font stack - Primary font for body text and UI
 * Use for: paragraphs, buttons, forms, labels, navigation, tables
 */
export const interFontStack = [
  'Inter',
  ...systemFontStack.split(','),
].join(',');

/**
 * Poppins font stack - Display font for headings
 * Use for: h1-h6, hero text, marketing content, branding
 */
export const poppinsFontStack = [
  'Poppins',
  ...systemFontStack.split(','),
].join(',');

/**
 * Monospace font stack for code
 * Use for: code blocks, pre tags, technical content
 */
export const monospaceFontStack = [
  '"Fira Code"',
  '"JetBrains Mono"',
  '"Source Code Pro"',
  'Menlo',
  'Monaco',
  'Consolas',
  '"Courier New"',
  'monospace',
].join(',');

// ============================================================================
// Font Families Object - Easy access to all font stacks
// ============================================================================

export const fontFamilies = {
  primary: interFontStack,      // Inter - body text & UI
  display: poppinsFontStack,     // Poppins - headings & display
  monospace: monospaceFontStack, // Monospace - code
  system: systemFontStack,       // System fonts - fallback
} as const;

// ============================================================================
// Typography Configuration for MUI Theme
// ============================================================================

export const typographyConfig: TypographyOptions = {
  // Default font family (used for most text)
  fontFamily: fontFamilies.primary,

  // Custom font families (accessible via theme.typography)
  fontFamilyDisplay: fontFamilies.display,
  fontFamilyMonospace: fontFamilies.monospace,

  // ============================================================================
  // Heading Variants - Poppins (Display Font)
  // ============================================================================

  h1: {
    fontFamily: fontFamilies.display,
    fontWeight: 700,
    fontSize: '3rem',          // 48px
    lineHeight: 1.2,
    letterSpacing: '-0.01562em',
  },
  h2: {
    fontFamily: fontFamilies.display,
    fontWeight: 700,
    fontSize: '2.5rem',        // 40px
    lineHeight: 1.2,
    letterSpacing: '-0.00833em',
  },
  h3: {
    fontFamily: fontFamilies.display,
    fontWeight: 600,
    fontSize: '2rem',          // 32px
    lineHeight: 1.3,
    letterSpacing: '0em',
  },
  h4: {
    fontFamily: fontFamilies.display,
    fontWeight: 600,
    fontSize: '1.75rem',       // 28px
    lineHeight: 1.4,
    letterSpacing: '0.00735em',
  },
  h5: {
    fontFamily: fontFamilies.display,
    fontWeight: 600,
    fontSize: '1.5rem',        // 24px
    lineHeight: 1.4,
    letterSpacing: '0em',
  },
  h6: {
    fontFamily: fontFamilies.display,
    fontWeight: 600,
    fontSize: '1.25rem',       // 20px
    lineHeight: 1.5,
    letterSpacing: '0.0075em',
  },

  // ============================================================================
  // Body Variants - Inter (Primary Font)
  // ============================================================================

  body1: {
    fontFamily: fontFamilies.primary,
    fontWeight: 400,
    fontSize: '1rem',          // 16px
    lineHeight: 1.5,
    letterSpacing: '0.00938em',
  },
  body2: {
    fontFamily: fontFamilies.primary,
    fontWeight: 400,
    fontSize: '0.875rem',      // 14px
    lineHeight: 1.43,
    letterSpacing: '0.01071em',
  },

  // ============================================================================
  // Subtitle Variants - Inter
  // ============================================================================

  subtitle1: {
    fontFamily: fontFamilies.primary,
    fontWeight: 500,
    fontSize: '1rem',          // 16px
    lineHeight: 1.75,
    letterSpacing: '0.00938em',
  },
  subtitle2: {
    fontFamily: fontFamilies.primary,
    fontWeight: 500,
    fontSize: '0.875rem',      // 14px
    lineHeight: 1.57,
    letterSpacing: '0.00714em',
  },

  // ============================================================================
  // Button Variant - Inter (UI Consistency)
  // ============================================================================

  button: {
    fontFamily: fontFamilies.primary,
    fontWeight: 500,
    fontSize: '0.875rem',      // 14px
    lineHeight: 1.75,
    letterSpacing: '0.02857em',
    textTransform: 'none',     // Modern UI prefers no uppercase
  },

  // ============================================================================
  // Caption & Overline - Inter
  // ============================================================================

  caption: {
    fontFamily: fontFamilies.primary,
    fontWeight: 400,
    fontSize: '0.75rem',       // 12px
    lineHeight: 1.66,
    letterSpacing: '0.03333em',
  },
  overline: {
    fontFamily: fontFamilies.primary,
    fontWeight: 600,
    fontSize: '0.75rem',       // 12px
    lineHeight: 2.66,
    letterSpacing: '0.08333em',
    textTransform: 'uppercase',
  },
};

// ============================================================================
// Helper Functions - For custom typography usage
// ============================================================================

/**
 * Get font family by name
 * @example getFontFamily('display') // Returns Poppins stack
 */
export const getFontFamily = (type: keyof typeof fontFamilies): string => {
  return fontFamilies[type];
};

/**
 * Create custom font family with fallback
 * @example createFontStack('Roboto', 'Open Sans') // Returns "Roboto, Open Sans, [system fonts]"
 */
export const createFontStack = (...fonts: string[]): string => {
  return [...fonts, systemFontStack].join(', ');
};

