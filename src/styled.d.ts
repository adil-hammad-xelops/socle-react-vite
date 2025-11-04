import 'styled-components';
import type { Theme as MuiTheme } from '@mui/material/styles';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends MuiTheme {}
}

