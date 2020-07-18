import React from 'react';
import { View, Text } from 'react-native';

export default function Balance({ balance = 0 }){
	
	return (
		<View style={styles.BalanceCard}>
			<Text style={styles.Balance}>
				{balance.format(2,3,'.',',')}
			</Text>
			<Text style={styles.BalanceTitle}>
				Seu Saldo
			</Text>
		</View>
	)
}

const styles = {
	BalanceCard: {
		justifyContent: 'center',
		paddingTop:8,
		paddingBottom:8
	},
	BalanceTitle: {
		color:'#f9f9f9',
		fontFamily: 'Roboto_900Black',
		fontSize:20
	},
	Balance:{
		color:'#f9f9f9',
		fontFamily: 'Roboto_400Regular',
		fontSize:28,	
	}
}