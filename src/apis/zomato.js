import axios from 'axios';
import { ZOMATO_KEY } from './../keys/index';

export default axios.create({
	baseURL: 'https://developers.zomato.com/api/v2.1',
	headers: {
		'user-key': ZOMATO_KEY,
	},
});
