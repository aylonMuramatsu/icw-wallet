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
		color: '#9C1FA7',
    fontFamily: 'Roboto_400Regular',
	}
}