import React, { useState } from 'react';
import { View, Text } from 'react-native';
import ResultList from '../components/ResultList';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useRestaurants';

const SearchScreen = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [results, errorMessage, fetchData] = useRestaurants();

	return (
		<View>
			<SearchBar
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
				onTermSubmit={fetchData}
			/>

			{errorMessage ? <Text>{errorMessage}</Text> : null}
			<Text>We have found {results.length} results</Text>
			<ResultList title='Cost Effective' />
			<ResultList title='Bit Pricey' />
			<ResultList title='Big Spender' />
		</View>
	);
};

export default SearchScreen;
