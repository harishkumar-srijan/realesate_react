import { Box, Flex, Spacer, Text } from '@chakra-ui/layout';
import { Avatar } from '@chakra-ui/avatar';
import { FaBed, FaBath, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';
import ImageScrollbar from '../../components/ImageScrollbar';
import { fetchApi, baseUrl } from '../../utils/fetchApi';
// import Gallery from '../../components/Gallery';

const PropertyDetails = ({
	propertyDetails: {
		price,
		rentFrequency,
		rooms,
		title,
		baths,
		area,
		agency,
		isVerified,
		description,
		type,
		purpose,
		furnishingStatus,
		amenities,
		photos,
	},
}) => {
	function createMarkup() {
		return {
			__html: 'First &middot; Second',
		};
	}

	return (
		<Box className='product__details--wrapper'>
			{photos && <ImageScrollbar data={photos} />}
			<Box className='inner'>
				<Box>
					<Flex paddingTop='2' alignItems='center' className='icon2'>
						<Box paddingRight='3' color='green.400'>
							{isVerified && <GoVerified />}
						</Box>
						<Text fontWeight='bold' fontSize='lg'>
							AED {price} {rentFrequency && `/${rentFrequency}`}
						</Text>
						<Spacer />
						<Avatar size='sm' src={agency?.logo?.url}></Avatar>
					</Flex>
					<Flex className='icons'>
						{rooms}
						<FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
					</Flex>
				</Box>
				<Box marginTop='2'>
					<Text fontSize='lg' marginBottom='2' fontWeight='bold'>
						{title}
					</Text>
					<Text lineHeight='2' color='gray.600'></Text>
					<div dangerouslySetInnerHTML={{ __html: description }}></div>
				</Box>
				<Flex className='highlights__wrapper'>
					<Flex className='highlights'>
						<Text>Type </Text>
						<Text className='space'>{type}</Text>
					</Flex>
					<Flex className='highlights'>
						<Text>Purpose </Text>
						<Text className='space'>{purpose}</Text>
					</Flex>
					{furnishingStatus && (
						<Flex className='highlights'>
							<Text>Furnishing Status </Text>
							<Text className='space'>{furnishingStatus}</Text>
						</Flex>
					)}
				</Flex>
				<Box>
					{amenities.length && (
						<Text fontWeight='black' marginTop='5'>
							Facilites:
						</Text>
					)}
					<Flex flexWrap='wrap' className='facilites'>
						{amenities?.map((item) =>
							item?.amenities?.map((amenity) => (
								<Text
									key={amenity.text}
									p='2'
									bg='gray.200'
									m='1'
									borderRadius='5'
								>
									{amenity.text}
								</Text>
							))
						)}
					</Flex>
				</Box>

				{/* <Box>
					<Gallery />
				</Box> */}
			</Box>
		</Box>
	);
};

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
	const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

	return {
		props: {
			propertyDetails: data,
		},
	};
}
