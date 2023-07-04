import { Flex, Grid, Spinner, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { PopularGame } from './PopularGame';
import axios from 'axios';

export const PopularGames = () => {
	const [games, setGames] = useState([]);
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

	return (
		<Flex p='24px 48px' mt='24px' flexDir='column' gap='16px'>
			<Text
				fontSize='36px'
				fontWeight='600'
				letterSpacing='0.5px'
				fontFamily='apex'>
				Popular Games
			</Text>
			<Grid templateColumns='1fr 1fr' gap='24px'>
				{!loading &&
					games!
						.slice(-4)
						.map((game: any) => (
							<PopularGame
								key={game.address}
								name={game.name}
								description={game.description}
								imageUrl={game.media.cover ?? game.media.coverImageUrl}
								link={`/games/${game.address}`}
								genre={game.genres}
								platforms={game.platforms}
								updated={game.updatedAt}
								address={game.address}
							/>
						))}
				{loading && <Spinner />}
			</Grid>
		</Flex>
	);
};
