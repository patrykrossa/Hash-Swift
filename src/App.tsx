import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import './ApexMk2-Regular.otf';
import { theme } from './theme/theme';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home';
import GameDetails from './pages/GameDetails';
import { Games } from './pages/Games';
import './styles/index.css';
import './ApexMk2-Regular.otf';
import '@fontsource/poppins';
import './styles/index.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/games',
		element: <Games />,
	},
	{
		path: '/games/:id',
		element: <GameDetails />,
	},
]);

export const App = () => (
	<ChakraProvider theme={theme}>
		<RouterProvider router={router} />
	</ChakraProvider>
);
