import { Button, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { BsApple } from 'react-icons/bs';
import { BsWindows } from 'react-icons/bs';
import { useHashup } from '@hashup-it/hashup-react-sdk';
import { Link } from 'react-router-dom';

interface IPopularGameProps {
	imageUrl: string;
	name: string;
	description: string;
	genre: string;
	platforms: string[];
	updated: Date;
	link: string;
	address: string;
}

export const PopularGame: FC<IPopularGameProps> = ({
	imageUrl,
	name,
	description,
	genre,
	platforms,
	updated,
	link,
	address,
}) => {
	const { buyGame } = useHashup();

	const handleBuy = () => {
		try {
			buyGame(address, '100');
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<Grid
			templateColumns='200px auto'
			bgColor='rgba(255, 255, 255, 0.02)'
			p='24px'
			gap='24px'>
			<Flex
				w='200px'
				h='200px'
				bgImage={imageUrl}
				bgPosition='center'
				bgSize='cover'
			/>
			<Flex flexDir='column' gap='8px'>
				<Text
					fontSize='24px'
					fontWeight='600'
					lineHeight='125%'
					letterSpacing='0.5px'>
					{name}
				</Text>
				<Text
					fontSize='14px'
					fontWeight='300'
					lineHeight='150%'
					color='text.ternary'>
					{description.length > 92
						? description.slice(0, 92) + '...'
						: description}
				</Text>
				<Flex mt='8px' mb='16px' gap='24px' align='center'>
					<Flex flexDir='column' gap='4px'>
						<Text
							fontSize='12px'
							color='text.ternary'
							fontWeight='300'
							lineHeight='150%'
							letterSpacing='0.5px'>
							Genre
						</Text>
						<Text fontSize='14px' fontWeight='600' lineHeight='125%'>
							{genre[0].toUpperCase()}
						</Text>
					</Flex>
					<Flex flexDir='column' gap='4px'>
						<Text
							fontSize='12px'
							color='text.ternary'
							fontWeight='300'
							lineHeight='150%'
							letterSpacing='0.5px'>
							Updated
						</Text>
						<Text fontSize='14px' fontWeight='600' lineHeight='125%'>
							{new Date(updated).toLocaleString().split(',')[0]}
						</Text>
					</Flex>
					<Flex flexDir='column' gap='4px'>
						<Text
							fontSize='12px'
							color='text.ternary'
							fontWeight='300'
							lineHeight='150%'
							letterSpacing='0.5px'>
							Platform
						</Text>
						<Flex align='center' gap='8px'>
							{platforms.find((val: string) => val === 'pc') && (
								<BsWindows size='16px' />
							)}
							{platforms.find((val: string) => val === 'MACOS') && (
								<BsApple size='16px' />
							)}
						</Flex>
					</Flex>
				</Flex>
				<Grid templateColumns='1fr 1fr' mt='auto' gap='16px'>
					<Button
						variant='brandPrimary'
						onClick={() => {
							if (typeof window !== 'undefined') handleBuy();
						}}>
						Buy
					</Button>
					<Link to={link}>
						<Button variant='brandSecondary'>Check More</Button>
					</Link>
				</Grid>
			</Flex>
		</Grid>
	);
};
