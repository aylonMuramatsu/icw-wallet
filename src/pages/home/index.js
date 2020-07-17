import React from 'react'
import { View, Text } from "react-native";
import Header from '../../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
const userInfo = { 
  name: "Aylon Muramatsu",
  agency: '2459-6',
  account: '000001-6',
  balance: 126598.55,
  transactions: [
    {
      id: 1,
      name: 'Mercado Pago 3x',
      cost: 329.99,
      installments: [
        { id: 1, installment_order: 1, cost: 109.99 },
        { id: 1, installment_order: 2, cost: 109.99 },
        { id: 1, installment_order: 3, cost: 109.99 },
      ]
    }
  ]
}
export default function Home(){

  return (
    <SafeAreaView style={{ flex:1}}>
      <Header userInfo={userInfo}/>
    </SafeAreaView>
  )
}