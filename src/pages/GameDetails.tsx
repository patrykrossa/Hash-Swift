import { Box, Flex, Grid } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import { GamesGallery } from '../components/pages/gameDetails/gallery/GameGallery';
import { AboutGame } from '../components/pages/gameDetails/AboutGame';
import { RightSection } from '../components/pages/gameDetails/RightSection';

export default () => {
	const [game, setGame] = useState<any>({});
	const [loading, setLoading] = useState(false);

	const { id } = useParams();

	const getGames = async () => {
		setLoading(true);
		const res = await axios.get('https://open-api.hashup.it/v1/tokens/polygon');
		if (res.status < 300) {
			setGame(res.data.slice(-15).filter((val: any) => val.address === id));
		} else {
		}
		setLoading(false);
	};

	useEffect(() => {
		if (id !== undefined) getGames();
	}, [id]);

	document.title = `${game[0]?.name ?? ''} | HashSwift`;

	return (
		<Layout title={`${game[0]?.name ?? ''} | HashSwift`}>
			<Grid templateColumns='1fr 340px' gap='24px' p='24px 48px 0 48px'>
				<Flex flexDir='column' gap='24px'>
					<GamesGallery screenshots={game[0]?.screenshots.slice(0, 7) ?? []} />
					<AboutGame description={game[0]?.description ?? ''} />
				</Flex>
				<RightSection
					name={game[0]?.name ?? ''}
					description={game[0]?.description ?? ''}
					platforms={game[0]?.platforms ?? []}
					socials={game[0]?.socials ?? []}
					totalSupply={game[0]?.totalSupply ?? 0}
					symbol={game[0]?.symbol ?? ''}
					price={game[0]?.price ?? 0}
					created={new Date(game[0]?.createdAt) ?? new Date()}
					link={game[0]?.gameUrl ?? ''}
					creator={game[0]?.creator ?? ''}
					genres={game[0]?.genres ?? []}
					address={game[0]?.address ?? ''}
				/>
			</Grid>
		</Layout>
	);
};
