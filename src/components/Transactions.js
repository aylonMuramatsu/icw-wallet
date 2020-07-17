import React from 'react';
import { FlatList, View, Text } from 'react-native';
import TransactionItem from './TransactionItem';
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Transactions({data:transactions = []}){
	const renderItem = (transaction) => {
		return (
			<TransactionItem data={transaction}/>
		)
	}
	return (
		<View style={styles.Container}>
			<Text style={styles.Title}>
				Últimas Transações
			</Text>
			
			<FlatList
				style={{ height: 220}}
				scrollEnabled={true}
				contentContainerStyle={{
					paddingRight:10
				}}
				data={transactions.sort((a,b) => (b.id - a.id))}
				renderItem={renderItem}
				keyExtractor={item => item.id.toString()}
			/>

		</View>
	)
}

const styles = {
	Title: {
		fontFamily: 'Roboto_900Black',
		fontSize:24,
		paddingBottom:15
	},
	Container:{
		paddingLeft:35,
		paddingRight:35,
	}
}