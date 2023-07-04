import { Flex, Image } from '@chakra-ui/react';
import React from 'react';
import logo from '../../../assets/icons/hashup-logo.svg';
import { ISidelinkProps, Sidelink } from './Sidelink';
import { SlGameController } from 'react-icons/sl';
import { BsWallet2 } from 'react-icons/bs';
import { PiUserCircleLight } from 'react-icons/pi';
import { TbExchange } from 'react-icons/tb';
import { Link, useLocation } from 'react-router-dom';

export const Sidebar = () => {
	const { pathname } = useLocation();

	const links: ISidelinkProps[] = [
		{
			location: '/',
			content: (
				<SlGameController
					size='30px'
					color={pathname === '/' ? '#FDB652' : 'rgba(255,255,255,0.3)'}
					transform='rotate(45)'
				/>
			),
			isDisabled: false,
		},
		{
			location: '/wallet',
			content: (
				<BsWallet2
					size='30px'
					color={pathname === '/wallet' ? '#FDB652' : 'rgba(255,255,255,0.3)'}
				/>
			),
			isDisabled: true,
		},
		{
			location: '/profile',
			content: (
				<PiUserCircleLight
					size='30px'
					color={pathname === '/profile' ? '#FDB652' : 'rgba(255,255,255,0.3)'}
				/>
			),
			isDisabled: true,
		},
		{
			location: '/bridge',
			content: (
				<TbExchange
					size='30px'
					color={pathname === '/bridge' ? '#FDB652' : 'rgba(255,255,255,0.3)'}
				/>
			),
			isDisabled: true,
		},
	];

	return (
		<Flex
			position='fixed'
			left='0'
			top='0'
			h='100vh'
			w='72px'
			flexDir='column'
			borderRight='1px solid rgba(255, 255, 255, 0.1)'>
			<Link to='/'>
				<Flex
					w='72px'
					h='72px'
					display='flex'
					justifyContent='center'
					alignItems='center'
					borderBottom='1px solid rgba(255, 255, 255, 0.1)'>
					<Image src={logo} alt='Hashup Logo' w='40px' h='40px' />
				</Flex>
			</Link>
			{links.map((link: ISidelinkProps) => (
				<Sidelink
					key={link.location}
					location={link.location}
					content={link.content}
					isDisabled={link.isDisabled}
				/>
			))}
		</Flex>
	);
};
