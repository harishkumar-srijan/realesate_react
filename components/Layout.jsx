import React, { Children } from 'react';
import Head from 'next/head';

import { Box } from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children }) {
	return (
		<div>
			<Head>
				<title>Real Estate</title>
			</Head>
			<Box>
				<header>
					<Navbar />
				</header>
				<main>{children}</main>
				<footer>
					<Footer />
				</footer>
			</Box>
		</div>
	);
}

export default Layout;
