import react, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Flex, Box, Text, Icon } from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs';
import Property from '../components/Property';
import SearchFilters from '../components/SearchFilters';
import { baseUrl, fetchApi } from '../utils/fetchApi';

const Search = ({ properties }) => {
	const [searchFilter, setSearchFilter] = useState(true);
	const router = useRouter();

	return (
		<div>
			<Box>
				<Flex
					className='search__text'
					onClick={() => setSearchFilter((prevFilter) => !prevFilter)}
				>
					<Text>Search Property </Text> {BsFilter}
					<Icon as={BsFilter}></Icon>
				</Flex>
				<Flex>{searchFilter && <SearchFilters />}</Flex>
				<Text className='search__property--type'>
					Property {router.query.purpose}
				</Text>
				<Flex className='property__box--wrapper'>
					<Box className='property__box--wrapper-inner'>
						{properties.map((property) => (
							<Property property={property} key={property.id} />
						))}
						{properties.length == 0 && <Text>No Result </Text>}
					</Box>
				</Flex>
			</Box>
		</div>
	);
};

export default Search;

// set api parameter on serverside hit
export async function getServerSideProps({ query }) {
	const purpose = query.purpose || 'for-rent';
	const rentFrequency = query.rentFrequency || 'year';
	const priceMin = query.priceMin || '0';
	const priceMax = query.priceMax || '1000000';
	const roomsMin = query.roomsMin || '0';
	const roomsMax = query.roomsMax || '0';
	const areaMax = query.areaMax || '350000';
	const sort = query.sort || 'price-desc';
	const locationExternalIDs = query.locationExternalIDs || '5002';
	const categoryExternalID = query.categoryExternalID || '4';

	//intial the query parameters
	const data = await fetchApi(
		`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&rentFrequency=${rentFrequency}&priceMin=${priceMin}&priceMax=${priceMax}&roomsMin=${roomsMin}&roomsMax=${roomsMax}&areaMax=${areaMax}&sort${sort}`
	);

	return {
		props: {
			properties: data?.hits,
		},
	};
}
