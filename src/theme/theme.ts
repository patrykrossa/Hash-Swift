import { globalStyles } from './global';
import { extendTheme } from '@chakra-ui/react';
import { colors } from './colors';
import { buttonTheme } from './components/CustomButton';

export const theme = extendTheme({
	colors: colors,
	components: { Button: buttonTheme },
	styles: {
		...globalStyles,
	},
});
