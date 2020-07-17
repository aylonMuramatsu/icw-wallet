import React from 'react';
import { View, Text } from 'react-native';
import Config from '../../app.json';

export default function HeaderTitle(){
	const { name:appName } = Config;
	return (
		<View>
			<Text style={styles.Title}>{appName}</Text>
		</View>
	)
}

const styles = {
	Title: {
		fontFamily: 'Roboto_900Black',
		fontSize:28,
		textAlign: 'center',
		color: '#FCFCFC',
	}
}