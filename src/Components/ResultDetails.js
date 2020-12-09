import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

const DEFAULT_IMAGE =
	'https://b.zmtcdn.com/data/res_imagery/18485435_RESTAURANT_9cce4ba0dde91e73c5252964541c3a2d.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A';

const ResultDetails = ({
	restaurant: { name, thumb, user_rating, all_reviews_count },
}) => {
	return (
		<View style={styles.container}>
			<Image source={{ uri: thumb || DEFAULT_IMAGE }} style={styles.image} />
			<Text style={styles.name}>{name}</Text>
			<Text style={styles.reviews}>
				{user_rating.aggregate_rating} Stars, {all_reviews_count} Reviews
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginLeft: 10,
	},
	image: {
		width: 250,
		height: 120,
		borderRadius: 5,
		marginBottom: 5,
	},
	name: {
		fontWeight: 'bold',
		fontSize: 16,
	},
	reviews: {
		opacity: 0.4,
	},
});

export default ResultDetails;
