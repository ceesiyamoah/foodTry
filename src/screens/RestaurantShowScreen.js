import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import zomato from '../apis/zomato';

//!Finish implemnting the api

const RestaurantShowScreen = ({ navigation }) => {
	const [restaurant, setRestaurant] = useState({});
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
				setRestaurant(data.R);
			} catch (error) {
				setError(true);
			}
		};
		fetchRestaurant();
	}, []);
	return (
		<>
			<Text>id: {id}</Text>
		</>
	);
};

export default RestaurantShowScreen;
