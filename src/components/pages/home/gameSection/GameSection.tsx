import { Button, Flex, Text } from '@chakra-ui/react';
import React, { FC, useEffect, useRef } from 'react';
import { BiChevronLeft } from 'react-icons/bi';
import { BiChevronRight } from 'react-icons/bi';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { GameItem } from './GameItem';

interface IGameSectionProps {
	headingText: string;
	isSmall?: boolean;
	games: any;
}

export const GameSection: FC<IGameSectionProps> = ({
	headingText,
	isSmall,
	games,
}) => {
	const carousel = useRef<AliceCarousel>(null);

	useEffect(() => {
		if (carousel.current) {
			console.log(carousel.current);
		}
	}, [carousel]);

	return (
		<Flex flexDir='column' gap='24px'>
			<Text fontSize='36px' fontWeight='600'>
				{headingText}
			</Text>
			<Flex maxW='calc(100vw - 72px - 48px - 48px)'>
				<AliceCarousel
					disableDotsControls
					responsive={{
						0: {
							items: isSmall ? 2 : 1.2,
						},
						568: {
							items: isSmall ? 4 : 2.2,
						},
						1024: {
							items: isSmall ? 6 : 3.2,
							itemsFit: 'contain',
						},
					}}
					ref={carousel}
					renderPrevButton={({
						isDisabled,
					}: {
						isDisabled?: boolean | undefined;
					}) => (
						<Button
							position='absolute'
							top='-65px'
							right='48px'
							variant='unstyled'
							borderRadius='0'
							p='0'
							minW='32px'
							minH='32px'
							maxW='32px'
							maxH='32px'
							bgColor='rgba(255, 255, 255, 0.05)'
							border='1px solid rgba(255, 255, 255, 0.1)'
							_hover={{ border: '1px solid #FDB652' }}
							display='flex'
							alignItems='center'
							justifyContent='center'
							isDisabled={isDisabled}>
							<BiChevronLeft />
						</Button>
					)}
					renderNextButton={({
						isDisabled,
					}: {
						isDisabled?: boolean | undefined;
					}) => (
						<Button
							position='absolute'
							top='-65px'
							right='0px'
							variant='unstyled'
							borderRadius='0'
							p='0'
							minW='32px'
							minH='32px'
							maxW='32px'
							maxH='32px'
							bgColor='rgba(255, 255, 255, 0.05)'
							border='1px solid rgba(255, 255, 255, 0.1)'
							_hover={{ border: '1px solid #FDB652' }}
							display='flex'
							alignItems='center'
							justifyContent='center'
							isDisabled={isDisabled}>
							<BiChevronRight />
						</Button>
					)}
					items={games.map((game: any, index: number) => (
						<Flex pl={!isSmall && index !== 0 ? '16px' : '0'}>
							<GameItem
								isSmall={isSmall}
								key={index}
								name={game.name}
								description={game.description}
								imageUrl={game?.media?.cover ?? game?.media?.coverImageUrl}
								link={`games/${game.address}`}
							/>
						</Flex>
					))}
				/>
			</Flex>
		</Flex>
	);
};
