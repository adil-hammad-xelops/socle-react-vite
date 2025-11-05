import 'styled-components';
import type { Theme as MuiTheme } from '@mui/material/styles';

// Extend MUI Typography interface to include custom font families
declare module '@mui/material/styles' {
  interface Typography {
    fontFamilyDisplay?: string;
    fontFamilyMonospace?: string;
  }

  interface TypographyOptions {
    fontFamilyDisplay?: string;
    fontFamilyMonospace?: string;
  }
}

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends MuiTheme {}
}

