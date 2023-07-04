import { Button, Divider, Flex, Link, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { BsWindows } from 'react-icons/bs';
import { BsApple } from 'react-icons/bs';
import { BsDiscord } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { useHashup } from '@hashup-it/hashup-react-sdk';

interface IRightSection {
	name: string;
	description: string;
	platforms: string[];
	socials: any;
	totalSupply: number;
	symbol: string;
	price: number;
	created: Date;
	link: string;
	genres: string[];
	creator: string;
	address: string;
}

export const RightSection: FC<IRightSection> = ({
	name,
	description,
	platforms,
	socials,
	totalSupply,
	symbol,
	price,
	created,
	link,
	genres,
	creator,
	address,
}) => {
	const { buyGame } = useHashup();

	const handleBuy = () => {
		buyGame(address, '100');
	};

	return (
		<Flex
			position='sticky'
			top='96px'
			right='48px'
			flexDir='column'
			height='min-content'
			gap='16px'
			p='16px'
			border='1px solid rgba(255, 255, 255, 0.1)'
			bgColor='rgba(255, 255, 255, 0.05)'
			maxW='460px'>
			<Text
				fontSize='32px'
				lineHeight='125%'
				letterSpacing='0.5px'
				fontWeight='600'
				fontFamily='apex'>
				{name}
			</Text>
			<Flex align='center' gap='4px' maxW='428px' overflow='auto'>
				{genres.map((genre: string) => (
					<Flex
						key={genre}
						border='1px solid rgba(255, 255, 255, 0.4)'
						align='center'
						justify='center'
						p='4px 8px'
						fontSize='14px'
						textTransform='capitalize'>
						{genre}
					</Flex>
				))}
			</Flex>
			<Divider />
			<Text fontSize='14px' lineHeight='150%' color='text.ternary'>
				{description}
			</Text>
			<Divider />
			<Flex w='100%' align='center' justify='space-between'>
				<Text fontSize='14px' lineHeight='150%' color='text.ternary'>
					Created at
				</Text>
				<Text fontSize='14px' lineHeight='150%' color='text.ternary'>
					{created.toLocaleString().split(',')[0]}
				</Text>
			</Flex>
			<Divider />
			<Flex w='100%' align='center' justify='space-between'>
				<Text fontSize='14px' lineHeight='150%' color='text.ternary'>
					Developer
				</Text>
				<Link
					target='_blank'
					href={`https://polygonscan.com/address/${creator}`}
					fontSize='14px'
					lineHeight='150%'
					color='brand.primary'>
					{creator.slice(0, 20)}...
				</Link>
			</Flex>
			<Divider />
			<Flex w='100%' align='center' justify='space-between'>
				<Text fontSize='14px' lineHeight='150%' color='text.ternary'>
					Platforms
				</Text>
				<Flex align='center' gap='4px'>
					{platforms.map((platform: string) => {
						if (platform === 'pc') return <BsWindows />;
						if (platform === 'ios') return <BsApple />;
					})}
				</Flex>
			</Flex>
			<Divider />
			<Flex w='100%' align='center' justify='space-between'>
				<Text fontSize='14px' lineHeight='150%' color='text.ternary'>
					Socials
				</Text>
				<Flex align='center' gap='4px'>
					{socials.facebook !== '' && (
						<Link href={socials.facebook} target='_blank'>
							<BsFacebook />
						</Link>
					)}
					{socials.facebook !== '' && <Divider orientation='vertical' />}
					{socials.twitter !== '' && (
						<Link href={socials.twitter} target='_blank'>
							<BsTwitter />
						</Link>
					)}
					{socials.twitter !== '' && <Divider orientation='vertical' />}
					{socials.youtube !== '' && (
						<Link href={socials.youtube} target='_blank'>
							<BsYoutube />
						</Link>
					)}
					{socials.youtube !== '' && <Divider orientation='vertical' />}
					{socials.discord !== '' && (
						<Link href={socials.discord} target='_blank'>
							<BsDiscord />
						</Link>
					)}
				</Flex>
			</Flex>
			<Divider />
			<Flex w='100%' align='center' justify='space-between'>
				<Text fontSize='14px' lineHeight='150%' color='text.ternary'>
					Website
				</Text>
				<Link
					target='_blank'
					href={link}
					fontSize='14px'
					lineHeight='150%'
					color='brand.primary'>
					{link.slice(0, 25)}...
				</Link>
			</Flex>
			<Divider />
			<Flex w='100%' align='center' justify='space-between'>
				<Text fontSize='14px' lineHeight='150%' color='text.ternary'>
					Total supply
				</Text>
				<Text fontSize='14px' lineHeight='150%' color='text.ternary'>
					{new Intl.NumberFormat().format(totalSupply / 100)}
				</Text>
			</Flex>
			<Divider />
			<Flex w='100%' align='center' justify='space-between'>
				<Text fontSize='14px' lineHeight='150%' color='text.ternary'>
					Price
				</Text>
				<Text fontSize='14px' lineHeight='150%' color='text.ternary'>
					{new Intl.NumberFormat('pl-PL', {
						style: 'currency',
						currency: 'USD',
					}).format(price / 10000)}
				</Text>
			</Flex>
			<Button mt='16px' variant='brandPrimary' onClick={handleBuy}>
				Buy
			</Button>
		</Flex>
	);
};
