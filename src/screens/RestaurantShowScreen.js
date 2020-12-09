import React, { useEffect, useState } from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import zomato from '../apis/zomato';
import { AntDesign } from '@expo/vector-icons';

//!Finish implemnting the api

const RestaurantShowScreen = ({ navigation }) => {
	const [restaurant, setRestaurant] = useState(null);
	const [error, setError] = useState(false);
	const id = navigation.getParam('id');
	useEffect(() => {
		const fetchRestaurant = async () => {
			try {
				const { data } = await zomato.get('/restaurant', {
					params: {
						res_id: id,
					},
				});
				setRestaurant(data);
			} catch (error) {
				setError(true);
			}
		};
		fetchRestaurant();
	}, []);
	if (!restaurant) {
		return null;
	}

	return (
		<>
			<Image
				source={{
					uri:
						restaurant.featured_image ||
						'https://b.zmtcdn.com/data/pictures/8/16774318/b16e382e9f6696f911b600b7e5ca6839.jpg',
				}}
				style={styles.image}
			/>
		</>
	);
};

const styles = StyleSheet.create({
	image: {
		width: 300,
		margin: 10,
		aspectRatio: 1,
		borderRadius: 5,
		alignSelf: 'center',
	},
});

export default RestaurantShowScreen;
