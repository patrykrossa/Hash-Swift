import { globalStyles } from './global';
import { extendTheme } from '@chakra-ui/react';
import { colors } from './colors';
import CustomInput from './components/CustomInput';
import { buttonTheme } from './components/CustomButton';

export const theme = extendTheme({
	colors: colors,
	components: { Button: buttonTheme },
	styles: {
		...globalStyles,
	},
});
