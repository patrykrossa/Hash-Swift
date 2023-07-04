import { Flex, Spinner } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { GameSection } from '../components/pages/home/gameSection/GameSection';
import { Header } from '../components/pages/home/header/Header';

export const Home = () => {
	const [games, setGames] = useState([]);
	const [loading, setLoading] = useState(false);

	const getGames = async () => {
		setLoading(true);
		const res = await axios.get('https://open-api.hashup.it/v1/tokens/polygon');
		if (res.status < 300) {
			setGames(
				res.data.slice(-12).filter((val: any) => val.name !== 'Game Name')
			);
		} else {
		}
		setLoading(false);
	};

	useEffect(() => {
		getGames();
	}, []);

	document.title = `Home | HashSwift`;

	return (
		<Layout title='Home | HashSwift'>
			{!loading && (
				<Flex flexDir='column' gap='48px' p='24px 48px'>
					<Header />
					<GameSection
						headingText='New Games'
						games={games.slice(-8).reverse()}
					/>
					<GameSection
						headingText='Most Played'
						isSmall
						games={games.slice(0, 8)}
					/>
					<GameSection headingText='Top Whislisted' isSmall games={games} />
					<GameSection
						headingText='Recently Updated'
						isSmall
						games={games.slice(-10).reverse()}
					/>
				</Flex>
			)}
			{loading && <Spinner />}
		</Layout>
	);
};
