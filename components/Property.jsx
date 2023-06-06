import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Box, Flex, Text, Avatar } from '@chakra-ui/react';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import { millify } from 'millify';

import DefaultImage from '../assets/images.jpeg';
const Property = ({
	property: {
		coverPhoto,
		price,
		rentFrequency,
		rooms,
		title,
		baths,
		area,
		agency,
		isVerified,
		externalID,
	},
}) => {
	return (
		<div>
			<a href={`/property/${externalID}`} className='property__box'>
				<Flex className='property__box--image'>
					<Box>
						<Image
							className='property__image'
							src={coverPhoto ? coverPhoto.url : DefaultImage}
							width={400}
							height={250}
							alt='house'
						></Image>
					</Box>
				</Flex>
				<Box className='property__text--wrapper'>
					<Flex className='property__text'>
						<Box className='property__veri-icon'>
							{isVerified && <GoVerified />}
						</Box>
						<Text className='property__price'>
							$ {price} {rentFrequency && `/${rentFrequency}`}
						</Text>
						<Image
							className='property__image--owner'
							src={agency?.logo?.url}
							width={35}
							height={35}
							alt='house'
						></Image>
					</Flex>
					<Flex className='property__icon'>
						<div className='property__icon-list'>
							{rooms} <FaBed className='icon' /> |
						</div>
						<div className='property__icon-list'>
							{baths} <FaBath className='icon' /> |
						</div>
						<div className='property__icon-list'>
							{millify(area)} sqft <BsGridFill className='icon' />
						</div>
					</Flex>
					<Text className='property__des'>
						{title.length > 30 ? title.substring(0, 30) + '...' : title}{' '}
					</Text>
				</Box>
			</a>
		</div>
	);
};

export default Property;
