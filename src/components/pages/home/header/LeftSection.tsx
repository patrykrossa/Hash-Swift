import { Button, Flex, Image, Link, Text } from '@chakra-ui/react';
import { useHashup } from '@hashup-it/hashup-react-sdk';
import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CategoryTag } from '../../../shared/CategoryTag';

interface ILeftSectionProps {
	activeGame: number;
	setActiveGame: any;
}

export const LeftSection: FC<ILeftSectionProps> = ({
	activeGame,
	setActiveGame,
}) => {
	const navigate = useNavigate();

	const [games, setGames] = useState<any>([]);
	const [loading, setLoading] = useState(false);

	const getGames = async () => {
		setLoading(true);
		const res = await axios.get('https://open-api.hashup.it/v1/tokens/polygon');
		if (res.status < 300) {
			setGames(
				res.data.slice(-5).filter((val: any) => val.name !== 'Game Name')
			);
		} else {
		}
		setLoading(false);
	};

	useEffect(() => {
		getGames();
	}, []);

	const { buyGame } = useHashup();

	const handleBuy = () => {
		try {
			buyGame(games[activeGame].address, '100');
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			{!loading && (
				<Flex
					bgColor='rgb(42, 44, 51)'
					position='relative'
					p='48px 48px 24px'
					flexDir='column'
					justify='space-between'>
					<Image
						objectFit='cover'
						src={games[activeGame]?.media?.banner}
						alt='Game Banner'
						width='100%'
						height='100%'
						position='absolute'
						top='0'
						left='0'
					/>
					<Flex
						bg='linear-gradient(90deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)'
						w='100%'
						h='100%'
						position='absolute'
						top='0'
						left='0'
					/>
					<Flex gap='16px' flexWrap='wrap' align='center'>
						{games[activeGame]?.genres.map((category: string) => (
							<CategoryTag text={category} key={category} />
						))}
					</Flex>
					<Flex flexDir='column' w='100%' gap='24px' zIndex='10'>
						<Image
							src={games[activeGame]?.media?.logoUrl}
							alt='Game Logo'
							w='100%'
							h='100px'
							objectFit='scale-down'
							objectPosition='left'
						/>
						<Flex justify='space-between' align='flex-end' w='100%'>
							<Flex flexDir='column' gap='24px' align='flex-start' maxW='50%'>
								<Text color='text.ternary' fontSize='14px' lineHeight='150%'>
									{games[activeGame]?.description.length > 200
										? games[activeGame]?.description.slice(0, 150) + '...'
										: games[activeGame]?.description}
								</Text>
								<Flex gap='16px' maxW='420px'>
									<Button
										variant='brandPrimary'
										w='50%'
										onClick={() => {
											if (typeof window !== 'undefined') handleBuy();
										}}>
										Buy
									</Button>
									<Button
										variant='brandSecondary'
										w='50%'
										onClick={() =>
											navigate(`/games/${games[activeGame]?.address}`)
										}>
										Check More
									</Button>
								</Flex>
							</Flex>
							<Flex gap='16px'>
								{games[activeGame]?.screenshots
									.slice(0, 2)
									.map((image: string) => (
										<Image
											key={image}
											h='80px'
											w='80px'
											objectFit='cover'
											objectPosition='center'
											src={image}
										/>
									))}
								{games[activeGame]?.screenshots.length > 2 && (
									<Flex position='relative' minH='80px' minW='80px'>
										<Image
											h='80px'
											w='80px'
											objectFit='cover'
											objectPosition='center'
											src={games[activeGame].screenshots[2]}
										/>
										<Flex
											position='absolute'
											h='100%'
											w='100%'
											top='0'
											left='0'
											align='center'
											justify='center'
											bgColor='rgba(0, 0, 0, 0.5)'
											fontSize='14px'
											fontWeight='600'>
											+{games[activeGame].screenshots.length - 2}
										</Flex>
									</Flex>
								)}
							</Flex>
						</Flex>
						<Flex gap='16px' pt='24px'>
							{games.map((game: any, index: number) => (
								<Flex
									key={index}
									onClick={(e) => {
										e.preventDefault();
										setActiveGame(index);
									}}
									border='1px solid rgba(255, 255, 255, 0.1)'
									bg={
										activeGame === index
											? 'brand.primary'
											: 'rgba(255, 255, 255, 0.05)'
									}
									_hover={{ bg: 'brand.primary' }}
									transition='all 0.3s ease-in-out 0s'
									cursor='pointer'
									borderRadius='2.5px'
									h='5px'
									w='80px'></Flex>
							))}
						</Flex>
					</Flex>
				</Flex>
			)}
		</>
	);
};
