import { Flex, Grid, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Game } from './Game';

export const AllGames = () => {
	const [games, setGames] = useState([]);
	const [loading, setLoading] = useState(false);

	const getGames = async () => {
		setLoading(true);
		const res = await axios.get('https://open-api.hashup.it/v1/tokens/polygon');
		if (res.status < 300) {
			setGames(res.data.filter((val: any) => val.name !== 'Game Name'));
			console.log(res.data);
		} else console.log(res);
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
				All Games | {games.length}
			</Text>
			<Grid templateColumns='repeat(3, 1fr)' gap='24px'>
				{games?.map((game: any) => (
					<Game
						key={game?.address}
						imageUrl={game.media.cover ?? game.media.coverImageUrl}
						name={game.name}
						description={game.description}
						link={`/games/${game.address}`}
						address={game.address}
					/>
				))}
			</Grid>
		</Flex>
	);
};
