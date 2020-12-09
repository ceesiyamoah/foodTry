import React, { useState } from 'react';
import { Text, ScrollView } from 'react-native';
import ResultList from '../components/ResultList';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useRestaurants';

const SearchScreen = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [results, errorMessage, fetchData] = useRestaurants();

	const filterResultsByPrice = (price_range1, price_range2 = null) =>
		results.filter(
			({ restaurant }) =>
				restaurant.price_range === price_range1 ||
				restaurant.price_range === price_range2
		);

	return (
		<>
			<SearchBar
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
				onTermSubmit={fetchData}
			/>

			{errorMessage ? <Text>{errorMessage}</Text> : null}
			<ScrollView>
				<ResultList
					title='Cost Effective'
					restaurants={filterResultsByPrice(1)}
				/>
				<ResultList
					title='Bit Pricey'
					restaurants={filterResultsByPrice(2, 3)}
				/>
				<ResultList title='Big Spender' restaurants={filterResultsByPrice(4)} />
			</ScrollView>
		</>
	);
};

export default SearchScreen;
