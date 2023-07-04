import React, { ReactNode } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Navbar } from './global/navbar/Navbar';
import { Sidebar } from './global/sidebar/Sidebar';
import { Footer } from './global/footer/Footer';

type Props = {
	children?: ReactNode;
	title?: string;
};

const Layout = ({ children, title = 'HashSwift' }: Props) => (
	<Box
		bgGradient='linear(90deg, rgb(18, 19, 23) 0%, rgb(31, 33, 40) 48%, rgb(31, 33, 40) 100%)'
		color='text.primary'>
		<Navbar />
		<Flex>
			<Sidebar />
			<Flex flexDir='column' mt='72px' ml='72px' w='100%' minH='100vh'>
				{children}
				<Footer />
			</Flex>
		</Flex>
	</Box>
);

export default Layout;
