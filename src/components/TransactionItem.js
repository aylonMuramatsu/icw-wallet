import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Icon from '@expo/vector-icons/Feather';
import moment from 'moment';

import { TransactionTypeEnum } from '../system/enum'

export default function TransactionItem({data:{item}}){
	const { description, cost ,installments, created_at, type } = item
	const getTransactionTime = (created_at) => {
		let durationAsMinute = moment.duration(moment().diff(moment(created_at))).asMinutes()
		let durationAsSeconds = moment.duration(moment().diff(moment(created_at))).asSeconds()
		let durationAsHour = moment.duration(moment().diff(moment(created_at))).asHours()
		if(durationAsSeconds <= 60) return `${durationAsHour}s atrás`
		else if(durationAsSeconds > 60 && durationAsMinute <= 60) return `${(parseInt(durationAsMinute))}m atrás`
		else if(durationAsMinute > 60 && durationAsHour <= 60) return `${parseInt(durationAsHour)}h atrás`;
		else return `${moment(created_at).format('DD/MM/YYYY hh:mm:ss')}`;
	}
	const [time, setTime] = useState(getTransactionTime(created_at));

	useEffect(()=>{
		const timer = setInterval(() => {
			setTime(getTransactionTime(created_at))
		}, 1000)
		return () => clearInterval(timer);
		
		// if(timer) clearInterval(timer)
	},[])

	return (
		<View style={{...styles.Container, 
			paddingBottom:8,
			paddingTop:8,
			borderColor:'#333',
			borderBottomWidth:1}}>
			<View style={styles.Container}>
				<View style={styles.IconPurchase}> 
					<Icon name="dollar-sign" size={20} color="#08070A" />
				</View>
				<Text style={{...styles.Name, paddingLeft:10}}>
					{description.substring(0,15)} 
					{'\n'}
					<Text style={{...styles.Name, paddingLeft:10}}>
					{time}
					</Text>
				</Text>
			</View>
			<View style={styles.ContainerCost}>
				<Text style={{...styles.Cost, color: type === TransactionTypeEnum.Debit ? '#d63031' : '#00b894' }}>
					{`${type === TransactionTypeEnum.Debit ? '- ' : ''}${cost.format(2,3,'.',',')}`}
					<Text style={styles.Installments}>
					{installments.length > 0 ? `\n${installments.length}x ${installments[0].cost.toLocaleString('pt-br')} ` : false}
					</Text>
				</Text>

			</View>
		</View>
	)
}

const styles = {
	Name: {
		fontFamily: 'Roboto_400Regular',
		fontSize:16,
		color:'#2d3436'
	},
	Cost:{
		fontFamily: 'Roboto_900Black',
		fontSize:17,
	},
	Installments:{
		fontFamily: 'Roboto_900Black',
		fontSize:14,
		color:'#a0a0a0'
	},
	ContainerCost: {
		justifyContent: 'center',
	},
	IconPurchase: {
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius:10,
		backgroundColor:'#d2d2d2',
		width:40,
		height:40
	},
	Container:{
		flexDirection: 'row',
		justifyContent:'space-between',
	}
}