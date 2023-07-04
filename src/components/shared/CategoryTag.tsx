import { Flex } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface ICategoryTag {
	text: string;
	link?: string;
}

export const CategoryTag: FC<ICategoryTag> = ({ text, link }) => {
	return (
		<Link to={link ?? ''}>
			<Flex
				p='4px 16px'
				border='1px solid rgba(255, 255, 255, 0.1)'
				backdropFilter='blur(25px)'
				fontSize='14px'
				fontWeight='300'
				justify='center'
				align='center'>
				{text.slice(0, 1).toUpperCase() + text.slice(1)}
			</Flex>
		</Link>
	);
};
