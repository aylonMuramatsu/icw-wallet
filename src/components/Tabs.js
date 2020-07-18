import React from 'react'
import { Text, ScrollView } from 'react-native'
import TabItem from './TabItem'
import Icon from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import TabItemTitle from './TabItemTitle';

export default function Tabs({children}){
	
	return (
		<ScrollView style={styles.Container} 
			contentContainerStyle={{ paddingLeft: 10, paddingRight:20 }}
			horizontal={true}
			showsHorizontalScrollIndicator={false}
		>
			<TabItem>
				<Icon name="person-add" size={18} color="#fff" />
				<TabItemTitle title="Indicar Amigos"/>
			</TabItem>
			<TabItem>
				<FontAwesome name="credit-card" size={16} color="#fff" />
				<TabItemTitle title="Cartões"/>
			</TabItem>
			<TabItem>
				<MaterialCommunityIcons name="bank-transfer" size={20} color="#fff" />
				<TabItemTitle title="Transferência"/>
			</TabItem>
			<TabItem>
				<MaterialCommunityIcons name="gift" size={16} color="#fff" />
				<TabItemTitle title="Presentes"/>
			</TabItem>
			<TabItem>
				<MaterialCommunityIcons name="calendar" size={18} color="#fff" />
				<TabItemTitle title="Agendamentos"/>
			</TabItem>
			<TabItem>
				<FontAwesome name="mobile-phone" size={18} color="#fff" />
				<TabItemTitle title="Recargas"/>
			</TabItem>
			<TabItem>
				<FontAwesome name="money" size={19} color="#fff" />
				<TabItemTitle title="Câmbio"/>
			</TabItem>
	
		</ScrollView>
	)
}

const styles = {
	Container: {
		flex:1,
		width:'100%',
		
		padding:0,
		// marginLeft:-35,
		paddingRight:40,
	},
	
}