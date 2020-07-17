import React from 'react';
import { View } from 'react-native';

export default function TabItem({children}){
	return (
		<View style={styles.TabItem}>
			{children}
		</View>
	)
}

const styles = {
	TabItem: {
		width:120,
		height:40,
		borderRadius:3,
		padding:10,
		marginLeft: 5,
		marginRight:5,
		justifyContent: 'space-between',
		borderWidth:2,
		borderColor: '#9C1FA7',
		flex:1,
		flexDirection: 'row'
	}
}