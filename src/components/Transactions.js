import React from 'react';
import { FlatList, View, Text, Dimensions } from 'react-native';
import TransactionItem from './TransactionItem';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const height = Dimensions.get('window').height;
export default function Transactions({data:transactions = [], opened}){
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
				style={{ height: (!opened ? 180 : (height/1.55) )}}
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
		paddingBottom:15,
		color:'#636e72'
	},
	Container:{
		paddingLeft:35,
		paddingRight:35,
	}
}