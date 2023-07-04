import {
	Button,
	Flex,
	Grid,
	Image,
	keyframes,
	Spinner,
	Text,
	usePrefersReducedMotion,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { LeftSection } from './LeftSection';

const bnw = keyframes`
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
`;

export const Header = () => {
	const [activeGame, setActiveGame] = useState<number>(0);
	const [games, setGames] = useState([]);
	const [loading, setLoading] = useState(false);

	const getGames = async () => {
		setLoading(true);
		const res = await axios.get('https://open-api.hashup.it/v1/tokens/polygon');
		if (res.status < 300) {
			setGames(
				res.data.slice(-5).filter((val: any) => val.name !== 'Game Name')
			);
			console.log(res.data);
		} else console.log(res);
		setLoading(false);
	};

	useEffect(() => {
		getGames();
	}, []);

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			if (activeGame < games.length - 1) setActiveGame(activeGame + 1);
			else setActiveGame(0);
		}, 10000);

		return () => {
			clearTimeout(timeoutId);
		};
	}, [activeGame]);

	const prefersReducedMotion = usePrefersReducedMotion();

	const animation1 = prefersReducedMotion
		? undefined
		: `${bnw} 10s reverse linear`;

	return (
		<Grid templateColumns='1fr 22%' mt='24px' minH='550px' gridGap='16px'>
			<LeftSection activeGame={activeGame} setActiveGame={setActiveGame} />
			<Flex flexDir='column' gap='16px'>
				{!loading &&
					games!.map((game: any, index: number) => (
						<Flex
							key={index}
							h='100%'
							cursor='pointer'
							position='relative'
							onClick={() => setActiveGame(index)}
							filter={
								activeGame === index ||
								activeGame === index - 1 ||
								(activeGame === 3 && index === 0)
									? ''
									: 'grayscale(1)'
							}
							overflow='hidden'>
							<Flex
								h='100%'
								w='100%'
								_before={{
									content: '""',
									zIndex: 1,
									bg: activeGame === index ? '' : 'rgba(0, 0, 0, 0.7)',
									bgSize: 'cover',
									position: 'absolute',
									top: 0,
									left: 0,
									w: '100%',
									h: '100%',
									animation:
										activeGame === index - 1 ||
										(activeGame === 3 && index === 0)
											? animation1
											: '',
									transformOrigin: 'right',
									aminationDelay: '10s',
								}}>
								<Image
									src={game.media.cover ?? game.media.coverImageUrl}
									objectFit='cover'
									position='absolute'
									top='0'
									left='0'
									h='100%'
									w='100%'
								/>
							</Flex>
						</Flex>
					))}
				{loading && <Spinner />}
			</Flex>
		</Grid>
	);
};
