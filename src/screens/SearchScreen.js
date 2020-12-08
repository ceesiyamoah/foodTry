import React, { useState } from 'react';
import { View, Text } from 'react-native';
import SearchBar from '../Components/SearchBar';

const SearchScreen = () => {
	const [searchTerm, setSearchTerm] = useState('');
	return (
		<View>
			<SearchBar
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
				onTermSubmit={console.log}
			/>

			<Text>{searchTerm}</Text>
			<Text>Search screen</Text>
		</View>
	);
};

export default SearchScreen;
