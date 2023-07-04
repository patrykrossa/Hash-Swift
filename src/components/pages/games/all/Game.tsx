import { Button, Flex, Grid, Image, Text } from '@chakra-ui/react';
import { useHashup } from '@hashup-it/hashup-react-sdk';
import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface IGameProps {
	imageUrl: string;
	name: string;
	description: string;
	link: string;
	address: string;
}

export const Game: FC<IGameProps> = ({
	imageUrl,
	name,
	description,
	link,
	address,
}) => {
	const [isHovered, setIsHovered] = useState(false);

	const navigate = useNavigate();

	const { buyGame } = useHashup();

	const handleBuy = () => {
		try {
			buyGame(address, '100');
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<Flex flexDir='column' gap='8px' maxW='600px'>
			<Flex
				position='relative'
				aspectRatio={383 / 200}
				flexDir='column'
				overflow='hidden'
				transition='all 0.3s ease-in-out 0s'
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}>
				<Image
					position='absolute'
					w='100%'
					h='100%'
					src={imageUrl}
					filter={isHovered ? 'blur(5px) grayscale(1)' : ''}
					transition='all 0.3s ease-in-out 0s'
					bgColor={isHovered ? 'rgba(0, 0, 0, 0.3)' : ''}
				/>
				<Flex
					p='16px'
					transition='all 0.3s ease-in-out 0s'
					justifyContent='flex-end'
					flex='1 1 0%'
					flexDir='column'>
					<Grid
						templateColumns='1fr 1fr'
						gap='16px'
						opacity={isHovered ? '1' : '0'}
						transform={isHovered ? 'translateY(0)' : 'translateY(20px)'}
						transition='all 0.3s ease-in-out 0s'
						_hover={{ opacity: 1, transform: 'translateY(0)' }}>
						<Button
							variant='brandPrimary'
							onClick={() => {
								if (typeof window !== 'undefined') handleBuy();
							}}>
							Buy
						</Button>
						<Button variant='brandSecondary' onClick={() => navigate(link)}>
							Check more
						</Button>
					</Grid>
				</Flex>
			</Flex>

			<Flex flexDir='column'>
				<Text
					fontSize='24px'
					fontWeight='600'
					lineHeight='125%'
					letterSpacing='0.5px'>
					{name}
				</Text>
				<Text
					color='text.ternary'
					fontSize='14px'
					fontWeight='300'
					lineHeight='150%'>
					{description.length > 64
						? description.slice(0, 54) + '...'
						: description}
				</Text>
			</Flex>
		</Flex>
	);
};
