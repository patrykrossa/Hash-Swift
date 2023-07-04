import { Button, Flex } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

export const Profile = () => {
	return (
		<Flex align='center' gap='24px' fontWeight='600'>
			<Link to=''>sign&nbsp;in</Link>
			<Link to=''>
				<Button variant='brandPrimary'>sign up</Button>
			</Link>
		</Flex>
	);
};
