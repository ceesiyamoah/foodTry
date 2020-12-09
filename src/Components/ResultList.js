import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultDetails from './ResultDetails';
const ResultList = ({ title, restaurants }) => {
	return (
		<View style={styles.container}>
			{restaurants.length !== 0 && <Text style={styles.title}>{title}</Text>}
			<FlatList
				keyExtractor={({ restaurant }) => restaurant.id}
				horizontal
				showsHorizontalScrollIndicator={false}
				data={restaurants}
				renderItem={({ item: { restaurant } }) => (
					<ResultDetails restaurant={restaurant} />
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		fontSize: 18,
		fontWeight: 'bold',
		marginLeft: 10,
		marginBottom: 5,
	},
	container: {
		marginBottom: 10,
	},
});

export default ResultList;
