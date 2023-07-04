import { Flex, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

interface IAboutGame {
	description: string;
}

export const AboutGame: FC<IAboutGame> = ({ description }) => {
	return (
		<Flex
			p='24px 0'
			borderBottom='1px solid rgba(255, 255, 255, 0.1)'
			flexDir='column'
			gap='16px'>
			<Text
				fontSize='36px'
				lineHeight='125%'
				letterSpacing='0.5px'
				fontWeight='600'>
				About this game
			</Text>
			<Text fontSize='14px' lineHeight='150%' color='text.ternary'>
				{description}
			</Text>
		</Flex>
	);
};
