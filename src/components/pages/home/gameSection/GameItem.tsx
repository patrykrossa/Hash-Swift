import { Flex, Image, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface IGameItemProps {
	isSmall?: boolean;
	imageUrl: string;
	name: string;
	description: string;
	link: string;
}

export const GameItem: FC<IGameItemProps> = ({
	isSmall,
	imageUrl,
	name,
	description,
	link,
}) => {
	return (
		<Link to={link}>
			<Flex flexDir='column' gap='8px' maxW={isSmall ? 'auto' : '600px'}>
				<Flex
					w={isSmall ? '190px' : 'auto'}
					h={isSmall ? '263px' : '200px'}
					objectFit='cover'
					bgImage={imageUrl}
					bgSize='cover'
					bgPosition='center'
					bgRepeat='no-repeat'></Flex>
				<Flex flexDir='column'>
					<Text fontSize='24px' fontWeight='600' fontFamily='apex'>
						{name}
					</Text>
					<Text
						color='text.ternary'
						fontWeight='300'
						fontSize='14px'
						lineHeight='150%'>
						{isSmall
							? description.length > 47
								? description.slice(0, 47) + '...'
								: description
							: description.length > 137
							? description.slice(0, 137) + '...'
							: description}
					</Text>
				</Flex>
			</Flex>
		</Link>
	);
};
