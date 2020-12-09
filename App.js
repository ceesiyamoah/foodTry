import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import RestaurantShowScreen from './src/screens/RestaurantShowScreen';

const navigation = createStackNavigator(
	{
		Search: SearchScreen,
		Restaurant: RestaurantShowScreen,
	},
	{
		initialRouteName: 'Search',
		defaultNavigationOptions: {
			title: 'Search',
		},
	}
);

export default createAppContainer(navigation);
