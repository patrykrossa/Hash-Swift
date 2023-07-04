import { Box, Flex } from '@chakra-ui/react';
import React, { FC, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export interface INavlinkProps {
	location: string;
	text: string;
	isDisabled: boolean;
}

export const Navlink: FC<INavlinkProps> = ({ location, text, isDisabled }) => {
	const [isHovering, setIsHovering] = useState(false);

	const { pathname } = useLocation();

	return (
		<Link to={isDisabled ? '' : location}>
			<Flex
				opacity={isDisabled ? '0.5' : '1'}
				cursor={isDisabled ? 'not-allowed' : ''}
				fontSize='14.5px'
				fontWeight={pathname === location ? '600' : '300'}
				color={pathname === location ? 'text.primary' : 'text.secondary'}
				p='4px'
				lineHeight='150%'
				_hover={{
					textDecoration: 'none',
					color: 'text.primary',
				}}
				onMouseEnter={() => setIsHovering(true)}
				onMouseLeave={() => setIsHovering(false)}
				position='relative'>
				{text}
				<Box
					position='absolute'
					bottom='-21px'
					left='0'
					w={isHovering || pathname === location ? '100%' : '0%'}
					h='1px'
					bgColor='brand.primary'
					transition='all 0.3s ease-in-out 0s'
					transform='scaleX(1)'
					transformOrigin='left center'
				/>
			</Flex>
		</Link>
	);
};
