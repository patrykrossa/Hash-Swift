import {
	Divider,
	Flex,
	Image,
	Input,
	InputGroup,
	InputLeftElement,
	Text,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { RiErrorWarningLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export const Search = () => {
	const [games, setGames] = useState<any>([]);
	const [filteredGames, setFilteredGames] = useState([]);
	const [loading, setLoading] = useState(false);
	const [searchVal, setSearchVal] = useState('');

	const getGames = async () => {
		setLoading(true);
		const res = await axios.get('https://open-api.hashup.it/v1/tokens/polygon');
		if (res.status < 300) {
			setGames(
				res.data.slice(-15).filter((val: any) => val.name !== 'Game Name')
			);
			setFilteredGames(
				res.data.slice(-15).filter((val: any) => val.name !== 'Game Name')
			);
			console.log(res.data);
		} else console.log(res);
		setLoading(false);
	};

	useEffect(() => {
		getGames();
	}, []);

	const handleSearch = (e: any) => {
		setSearchVal(e.target.value);
		const filtered = games.filter((game: any) =>
			game.name.toLowerCase().includes(e.target.value.toLowerCase())
		);
		setFilteredGames(filtered);
		console.log('filtered', filtered);
	};

	return (
		<InputGroup maxW='360px' position='relative'>
			<Divider
				position='absolute'
				left='-40px'
				top='-12.5px'
				orientation='vertical'
				h='72px'
				borderColor='rgba(255, 255, 255, 0.2)'
			/>
			<InputLeftElement mt='4px' opacity='0.3'>
				<CiSearch />
			</InputLeftElement>
			<Input
				w='100%'
				h='48px'
				placeholder='Search Games'
				borderRadius='0'
				bgColor='rgba(255, 255, 255, 0.05)'
				borderColor='rgba(255, 255, 255, 0.1)'
				_placeholder={{
					color: 'rgba(255, 255, 255, 0.3)',
				}}
				_hover={{
					borderColor: 'rgba(255, 255, 255, 0.1)',
					outline: 'none !important',
				}}
				_focus={{
					borderColor: 'rgba(255, 255, 255, 0.1) !important',
					outline: 'none !important',
				}}
				focusBorderColor='rgba(255, 255, 255, 0)'
				value={searchVal}
				onChange={handleSearch}
			/>
			{searchVal.length > 0 && (
				<Flex
					position='absolute'
					top='60px'
					left='0'
					w='300%'
					maxW='440px'
					p='16px'
					border='1px solid rgba(255, 255, 255, 0.1)'
					zIndex='10'
					bgColor='rgba(31, 33, 40, 0.15)'
					backdropFilter='blur(20px)'
					gap='0px'
					flexDir='column'>
					{filteredGames.length === 0 && (
						<Flex align='center' gap='16px' pb='16px'>
							<RiErrorWarningLine />
							No Games Found
						</Flex>
					)}
					<Flex flexDir='column' maxH='300px' overflow='auto'>
						{filteredGames.map((game: any) => (
							<Link to={`/games/${game?.address}`} key={game.addres}>
								<Flex
									align='center'
									gap='16px'
									cursor='pointer'
									_hover={{ bgColor: 'rgba(255, 255, 255, 0.05)' }}
									p='16px 4px'
									key={game.address}>
									<Image
										src={game?.media?.cover ?? game?.media?.coverImageUrl}
										objectFit='cover'
										w='65px'
										h='33px'
										maxH='65px'
										maxW='33px'
									/>
									<Text fontSize='14px'>{game?.name}</Text>
								</Flex>
							</Link>
						))}
					</Flex>
					<Divider />
					<Link to='/games'>
						<Text
							fontSize='14px'
							textDecoration='underline'
							color='brand.primary'
							mt='8px'>
							Browse all games
						</Text>
					</Link>
				</Flex>
			)}
		</InputGroup>
	);
};
