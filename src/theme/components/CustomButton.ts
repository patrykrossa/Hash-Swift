import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const brandPrimary = defineStyle({
	p: '12px 32px',
	color: 'black',
	bg: 'brand.primary',
	_hover: { opacity: '0.9' },
	borderRadius: '0',
});

const brandSecondary = defineStyle({
	p: '12px 32px',
	color: 'brand.primary',
	bg: 'none',
	border: '1px solid #FDB652',
	_hover: { opacity: '0.9' },
	borderRadius: '0',
});

export const buttonTheme = defineStyleConfig({
	variants: { brandPrimary, brandSecondary },
});
