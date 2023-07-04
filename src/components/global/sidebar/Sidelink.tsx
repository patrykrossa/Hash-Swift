import { Box, Flex } from '@chakra-ui/react';
import React, { FC, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export interface ISidelinkProps {
	location: string;
	content: React.ReactNode;
	isDisabled: boolean;
}

export const Sidelink: FC<ISidelinkProps> = ({
	location,
	content,
	isDisabled,
}) => {
	const [isHovering, setIsHovering] = useState(false);

	const { pathname } = useLocation();

	return (
		<Link to={isDisabled ? '' : location}>
			<Flex
				opacity={isDisabled ? '0.5' : '1'}
				cursor={isDisabled ? 'not-allowed' : ''}
				onMouseEnter={() => setIsHovering(true)}
				onMouseLeave={() => setIsHovering(false)}
				borderBottom='1px solid rgba(255, 255, 255, 0.1)'
				transition='all 0.3s'
				_hover={{
					textDecoration: 'none',
				}}
				h='72px'
				display='flex'
				justifyContent='center'
				alignItems='center'
				position='relative'>
				{content}
				{pathname === location && (
					<>
						<Box
							h='1px'
							w='100%'
							position='absolute'
							top='0px'
							left='0'
							bgGradient='linear(-90deg, rgb(253, 194, 68) 0%, rgba(253, 194, 68, 0.2) 100%)'
						/>
						<Box
							h='1px'
							w='100%'
							position='absolute'
							bottom='-1px'
							left='0'
							bgGradient='linear(-90deg, rgb(253, 194, 68) 0%, rgba(253, 194, 68, 0.2) 100%)'
						/>
					</>
				)}

				<Box
					h='calc(100% + 1px)'
					w='1px'
					position='absolute'
					top='0px'
					right='-1px'
					bgColor='brand.primary'
					opacity={isHovering || pathname === location ? '1' : '0'}
					transition='all 0.3s ease-in-out 0s'
				/>
				<Box
					h='100%'
					w='100%'
					position='absolute'
					top='0px'
					left='0'
					bg='linear-gradient(90deg, rgba(253, 194, 68, 0) 0%, rgba(253, 194, 68, 1) 500%)'
					opacity={isHovering || pathname === location ? '1' : '0'}
					transition='all 0.3s ease-in-out 0s'
				/>
			</Flex>
		</Link>
	);
};
