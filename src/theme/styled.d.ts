import 'styled-components';
import {ChakraTheme} from '@chakra-ui/react';

declare module 'styled-components' {
    export interface DefaultTheme extends ChakraTheme {
    }
}
