import React from 'react'
import { Text } from 'react-native'

export default function TabItemTitle({title = ''}){

	return (
	<Text style={styles.Title}>{title}</Text>
	)
}

const styles = {
	Title: {
		fontSize: 13,
		color: '#fff',
		fontFamily: 'Roboto_400Regular',
		paddingLeft:8
	}
}