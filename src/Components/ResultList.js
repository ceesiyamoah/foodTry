import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const ResultList = ({ title }) => {
	return (
		<View>
			<Text style={styles.title}>{title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		fontSize: 18,
		fontWeight: 'bold',
	},
});

export default ResultList;
