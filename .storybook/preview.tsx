import type { Preview } from '@storybook/react';
import React from 'react';
import { create } from '@storybook/theming/create';
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme } from '../src/components/ui/theme';

// Create custom Storybook theme for docs
const storybookTheme = create({
  base: 'light',

  // Brand
  brandTitle: 'UI Component Library',
  brandUrl: '/',
  brandTarget: '_self',

  // Colors
  colorPrimary: '#2563eb',
  colorSecondary: '#64748b',

  // UI
  appBg: '#F5F5F5',
  appContentBg: '#FFFFFF',
  appBorderColor: '#E2E8F0',
  appBorderRadius: 4,

  // Text colors
  textColor: '#1E293B',
  textInverseColor: '#FFFFFF',
  textMutedColor: '#64748b',

  // Toolbar
  barTextColor: '#64748b',
  barSelectedColor: '#2563eb',
  barBg: '#FFFFFF',

  // Form colors
  inputBg: '#FFFFFF',
  inputBorder: '#CBD5E1',
  inputTextColor: '#1E293B',
  inputBorderRadius: 4,
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'gray',
      values: [
        { name: 'light', value: '#FFFFFF' },
        { name: 'gray', value: '#F5F5F5' },
        { name: 'dark', value: '#1A1A1A' },
      ],
    },
    layout: 'centered',
    docs: {
      theme: storybookTheme,
      source: {
        state: 'open',
      },
    },
  },
  decorators: [
    (Story) => (
      <MuiThemeProvider theme={lightTheme}>
        <StyledThemeProvider theme={lightTheme}>
          <CssBaseline />
          <div style={{ padding: '20px', backgroundColor: '#F5F5F5', minHeight: '100%' }}>
            <Story />
          </div>
        </StyledThemeProvider>
      </MuiThemeProvider>
    ),
  ],
};

export default preview;

