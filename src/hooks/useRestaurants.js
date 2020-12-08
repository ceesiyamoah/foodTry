import { useState, useEffect } from 'react';
import zomato from '../apis/zomato';
export default () => {
	const [results, setResults] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');

	const fetchData = async (term) => {
		try {
			const { data } = await zomato.get('/search', {
				params: {
					q: term,
				},
			});
			setResults(data.restaurants);
		} catch (err) {
			setErrorMessage('Something went wrong');
		}
	};

	useEffect(() => {
		fetchData('pizza');
	}, []);

	return [results, errorMessage, fetchData];
};
