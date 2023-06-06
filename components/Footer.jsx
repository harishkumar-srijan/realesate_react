import React from 'react';
import Head from 'next/head';
import { Flex, Text, Box } from '@chakra-ui/react';

function Footer() {
	return (
		<div>
			<Flex className='footer'>
				<Box className='footer__inner'>
					<Text>© Your Site Name, All Right Reserved.</Text>
				</Box>
			</Flex>
		</div>
	);
}

export default Footer;
