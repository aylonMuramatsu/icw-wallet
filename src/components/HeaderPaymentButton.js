import React from 'react';
import { Text } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function HeaderPaymentButton(){

	return (
		<TouchableOpacity>
			<Text>
				<Icon name="barcode-scan" size={42} color="#FCFCFC" />
			</Text>
		</TouchableOpacity>
	)
}