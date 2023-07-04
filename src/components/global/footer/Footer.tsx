import {
	Button,
	Flex,
	Text,
	Image as ChakraImage,
	Link,
	Image,
} from '@chakra-ui/react';
import React from 'react';
import { BsTwitter } from 'react-icons/bs';
import { BsDiscord } from 'react-icons/bs';
import logo from '../../../assets/icons/hashup-full-logo.svg';

export const Footer = () => {
	return (
		<Flex mt='100px' flexDir='column' pl='48px' pb='24px'>
			<Flex
				p='48px 48px 48px 0px'
				borderTop='1px solid rgba(255, 255, 255, 0.1)'
				gap='24px'
				align='center'
				justify='space-between'>
				<Flex flexDir='column' gap='16px' maxW='30%'>
					<Link href='/'>
						<Image src={logo} alt='Logo' />
					</Link>
					<Text
						fontSize='14px'
						fontWeight='300'
						lineHeight='150%'
						color='text.ternary'>
						The ultimate web3 gaming platform, launcher, and infrastructure.
						Playing and building Web3 games made easy.
					</Text>
					<Flex gap='16px' align='center'>
						<Button
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
							justifyContent='center'>
							<BsTwitter />
						</Button>
						<Button
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
							justifyContent='center'>
							<BsDiscord />
						</Button>
					</Flex>
				</Flex>
				<Flex align='center' gap='48px'>
					<Flex
						gap='48px'
						fontSize='14px'
						fontWeight='300'
						color='text.ternary'
						lineHeight='150%'>
						<Flex flexDir='column' gap='16px'>
							<Link href='' _hover={{ textDecoration: 'none', color: 'white' }}>
								Apply To Us
							</Link>
							<Link href='' _hover={{ textDecoration: 'none', color: 'white' }}>
								Newsletter
							</Link>
							<Link href='' _hover={{ textDecoration: 'none', color: 'white' }}>
								Branding
							</Link>
							<Link href='' _hover={{ textDecoration: 'none', color: 'white' }}>
								Support
							</Link>
						</Flex>
						<Flex flexDir='column' gap='16px'>
							<Link href='' _hover={{ textDecoration: 'none', color: 'white' }}>
								Terms Of Use
							</Link>
							<Link href='' _hover={{ textDecoration: 'none', color: 'white' }}>
								Privacy Policy
							</Link>
							<Link href='' _hover={{ textDecoration: 'none', color: 'white' }}>
								Launcher EULA
							</Link>
							<Link href='' _hover={{ textDecoration: 'none', color: 'white' }}>
								Web3 Privacy Notice
							</Link>
						</Flex>
					</Flex>
					<ChakraImage
						m='-48px 0'
						h='308px'
						w='308px'
						src='https://platform.gameswift.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-ships.323c609b.webp&w=1080&q=75'
					/>
				</Flex>
			</Flex>
			<Flex pt='24px' borderTop='1px solid rgba(255, 255, 255, 0.1)'>
				<Text
					fontSize='14px'
					fontWeight='300'
					color='text.ternary'
					lineHeight='150%'>
					© 2023, HashSwift
				</Text>
			</Flex>
		</Flex>
	);
};
