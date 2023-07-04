import { Flex } from '@chakra-ui/react';
import React from 'react';
import { INavlinkProps, Navlink } from './Navlink';
import { Search } from './Search';

const links: INavlinkProps[] = [
	{ location: '/', text: 'Home', isDisabled: false },
	{ location: '/games', text: 'Games', isDisabled: false },
	{ location: '/leaderboard', text: 'Leaderboard', isDisabled: true },
	{ location: '/community', text: 'Community', isDisabled: true },
	{ location: '/about', text: 'About', isDisabled: true },
];

export const Navbar = () => {
	return (
		<Flex
			position='fixed'
			zIndex='1000'
			top='0'
			left='72px'
			w='calc(100vw - 72px)'
			h='72px'
			borderBottom='1px solid rgba(255, 255, 255, 0.1)'
			p='8px 48px'
			align='center'
			justify='space-between'
			bgGradient='linear(90deg, rgb(18, 19, 23) 0%, rgb(31, 33, 40) 48%, rgb(31, 33, 40) 100%)'>
			<Flex align='center' gap='80px' w='100%'>
				<Flex align='center' gap='24px' position='relative'>
					{links.map((link: INavlinkProps) => (
						<Navlink
							key={link.location}
							location={link.location}
							text={link.text}
							isDisabled={link.isDisabled}
						/>
					))}
				</Flex>
				<Flex w='100%'>
					<Search />
				</Flex>
			</Flex>
			{/* <Profile /> */}
			{/* <ConnectWallet /> */}
		</Flex>
	);
};
