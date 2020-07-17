import React from 'react';
import { ScrollView, View } from 'react-native';

export default function PageContainer({ children, style }){

	return (
		<View style={{...styles.Container, ...style}} >
			{children}
		</View>
	)
}

const styles = {
	Container: {
		flex:1,
		zIndex:5,
		backgroundColor: '#FCFCFC',
		borderRadius: 35,
		height:'100%',
		paddingTop:35,

	},
	Content: {
		paddingTop:35,
		paddingBottom:100,
	}

}