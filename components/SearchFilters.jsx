import react, { useEffect, useState } from 'react';
import {
	Flex,
	Select,
	Box,
	Text,
	Input,
	Spinner,
	Icon,
	Button,
} from '@chakra-ui/react';
import { useRouter } from 'next/router'; // route define

import { filterData, getFilterValues } from '../utils/filterData'; // static search panel field value

const SearchFilters = () => {
	const [filters, setFilters] = useState(filterData); // set filterData
	const router = useRouter(); // set router

	// on change select reset the path of url
	const searchproperties = (filterValues) => {
		const path = router.pathname;
		const { query } = router;
		const values = getFilterValues(filterValues); // set filter values
		// Loop each values
		values.forEach((item) => {
			if (item.value && filterValues?.[item.name]) {
				query[item.name] = item.value; // pass filter value in router query name
			}
		});

		router.push({ pathname: path, query }); // pass the path into router
	};

	return (
		<div className='search__box--wrapper'>
			<Flex>
				{filters.map((filter) => (
					<Select
						placeholder={filter.placeholder}
						w='fit-content'
						p='2'
						onChange={(e) =>
							searchproperties({ [filter.queryName]: e.target.value })
						}
						key={filter.value}
					>
						{filter?.items?.map((item) => (
							<option value={item.value} key={item.value}>
								{item.name}
							</option>
						))}
					</Select>
				))}
			</Flex>
		</div>
	);
};

export default SearchFilters;
