// Import
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button, Switch } from '@chakra-ui/react';
import { baseUrl, fetchApi } from '../utils/fetchApi';
import Property from '../components/Property';
import BannerImage from '../assets/img.jpeg';

const Banner = ({
	purpose,
	title1,
	title2,
	desc1,
	desc2,
	buttonText,
	linkName,
	imageUrl,
}) => {
	return (
		<div>
			<Flex className='banner__box-wrapper'>
				<Box className='banner__box--image'>
					<Image src={imageUrl} alt='Dan Abramov' width={1920} height={700} />
				</Box>
				<Box className='banner__box'>
					<Text className='banner__purpose'>{purpose}</Text>
					<Text className='banner__title'>
						{title1} <span>{title2}</span>
					</Text>
					<Text className='banner__des'>
						{desc1} <span>{desc2}</span>
					</Text>
					<Button className='banner__text button'>
						<Link href={linkName} passherf>
							<a>{buttonText}</a>
						</Link>
					</Button>
				</Box>
			</Flex>
		</div>
	);
};

export default function Home({ propertiesForSale, propertiesForRent }) {
	return (
		<main>
			<Banner
				purpose='RENT A HOME'
				title1='Rental Homes for'
				title2='Everyone'
				desc1=' Explore from Apartments, builder floors, villas'
				desc2='and more'
				linkName='/search?purpose=for-rent'
				buttonText='Explore Renting'
				imageUrl={BannerImage}
			/>

			<Flex className='property__box--wrapper'>
				<div className='property__box--wrapper-inner'>
					{propertiesForRent.map((property) => (
						<Property property={property} key={property.id} />
					))}
				</div>
			</Flex>

			<Banner
				purpose='BUY A HOME'
				title1=' Find, Buy  Own Your'
				title2='Dream Home'
				desc1=' Explore from Apartments, land, builder floors,'
				desc2=' villas and more'
				buttonText='Explore Buying'
				linkName='/search?purpose=for-sale'
				imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
			/>

			<Flex className='property__box--wrapper'>
				<div className='property__box--wrapper-inner'>
					{propertiesForSale.map((property) => (
						<Property property={property} key={property.id} />
					))}
				</div>
			</Flex>
		</main>
	);
}

export async function getStaticProps() {
	const propertyForSale = await fetchApi(
		`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
	);
	const propertyForRent = await fetchApi(
		`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
	);

	return {
		props: {
			propertiesForSale: propertyForSale?.hits,
			propertiesForRent: propertyForRent?.hits,
		},
	};
}
