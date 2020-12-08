import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
const SearchBar = ({ searchTerm, setSearchTerm, onTermSubmit }) => {
	return (
		<View style={styles.searchBarContainer}>
			<Feather name='search' style={styles.iconStyle} />
			<TextInput
				placeholder='Search'
				style={styles.textInputStyle}
				value={searchTerm}
				onChangeText={(newValue) => setSearchTerm(newValue)}
				autoCapitalize='none'
				autoCorrect={false}
				onEndEditing={() => onTermSubmit('submiteed')}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	searchBarContainer: {
		flexDirection: 'row',
		borderRadius: 5,
		backgroundColor: '#f0eeee',
		marginHorizontal: 10,
		marginTop: 10,
		height: 50,
	},
	textInputStyle: {
		flex: 1,
		fontSize: 18,
	},
	iconStyle: {
		fontSize: 35,
		marginHorizontal: 10,
		alignSelf: 'center',
	},
});

export default SearchBar;
