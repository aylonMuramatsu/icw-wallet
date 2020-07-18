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
		

	},
	Content: {
		paddingTop:35,
		paddingBottom:100,
	}

}