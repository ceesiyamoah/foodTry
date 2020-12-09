import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';
import ResultDetails from './ResultDetails';
const ResultList = ({ title, restaurants, navigation }) => {
	return (
		<View style={styles.container}>
			{restaurants.length !== 0 && <Text style={styles.title}>{title}</Text>}
			<FlatList
				keyExtractor={({ restaurant }) => restaurant.id}
				horizontal
				showsHorizontalScrollIndicator={false}
				data={restaurants}
				renderItem={({ item: { restaurant } }) => (
					<TouchableOpacity
						onPress={() =>
							navigation.navigate('Restaurant', { id: restaurant.id })
						}
					>
						<ResultDetails restaurant={restaurant} />
					</TouchableOpacity>
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

export default withNavigation(ResultList);
