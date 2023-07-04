import React from 'react';
import Layout from '../components/Layout';
import { AllGames } from '../components/pages/games/all/AllGames';
import { PopularGames } from '../components/pages/games/popular/PopularGames';

export const Games = () => {
	return (
		<Layout title='Games | HashSwift'>
			<PopularGames />
			<AllGames />
		</Layout>
	);
};
