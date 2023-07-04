import { Button, Flex, Grid, Image } from '@chakra-ui/react';
import React, { FC, useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

interface IGamesGallery {
	screenshots: string[];
}

export const GamesGallery: FC<IGamesGallery> = ({ screenshots }) => {
	const [activeScreenshot, setActiveScreenshot] = useState(0);

	const handleNext = () => {
		if (activeScreenshot < 6) setActiveScreenshot((prev) => prev + 1);
	};

	const handlePrev = () => {
		if (activeScreenshot > 0) setActiveScreenshot((prev) => prev - 1);
	};

	return (
		<Grid
			w='100%'
			gridTemplateRows='1fr 13%'
			p='24px'
			height='521px'
			border='1px solid rgba(255, 255, 255, 0.1)'
			gap='16px'
			bgColor='rgba(255, 255, 255, 0.05)'>
			<Flex
				w='100%'
				h='100%'
				align='center'
				justify='space-between'
				p='16px'
				position='relative'>
				<Image
					src={screenshots[activeScreenshot]}
					position='absolute'
					top='0'
					left='0'
					w='100%'
					h='100%'
					objectFit='cover'
				/>
				<Button
					position='absolute'
					top='calc(50% - 16px)'
					left='16px'
					variant='unstyled'
					borderRadius='0'
					p='0'
					onClick={handlePrev}
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
					isDisabled={activeScreenshot === 0}>
					<BiChevronLeft />
				</Button>
				<Button
					position='absolute'
					top='calc(50% - 16px)'
					right='16px'
					variant='unstyled'
					borderRadius='0'
					p='0'
					onClick={handleNext}
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
					isDisabled={activeScreenshot === screenshots.length - 1}>
					<BiChevronRight />
				</Button>
			</Flex>
			<Flex gap='16px' align='center'>
				{screenshots.map((screenshot: string, index: number) => (
					<Flex
						key={index}
						border={
							activeScreenshot === index ? '1px solid white' : '1px solid black'
						}
						transition='all 0.3s ease-in-out 0s'
						cursor='pointer'
						onClick={() => setActiveScreenshot(index)}
						h='100%'
						w='100%'
						opacity={activeScreenshot === index ? '1' : '0.3'}
						position='relative'>
						<Image
							src={screenshot}
							position='absolute'
							inset='0'
							w='100%'
							h='100%'
						/>
					</Flex>
				))}
			</Flex>
		</Grid>
	);
};
