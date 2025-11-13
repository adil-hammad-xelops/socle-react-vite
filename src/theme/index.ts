import {extendTheme} from '@chakra-ui/react';
import {styles} from './styles';
import {colors} from './colors';
import {fonts} from './fonts';
import {space} from './space';
import {radii} from './radii';
import {shadows} from './shadows';

const theme = extendTheme({
    styles,
    colors,
    fonts,
    space,
    radii,
    shadows,
});

export default theme;

