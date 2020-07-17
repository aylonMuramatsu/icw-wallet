import React from 'react'
import { View, Text, Dimensions } from "react-native";
import Header from '../../components/Header';
import PageContainer from '../../components/PageContainer';
import UserInfo from '../../components/UserInfo';
import Balance from '../../components/Balance';
import Transactions from '../../components/Transactions';
import Tabs from '../../components/Tabs';
const height = Dimensions.get('window').height;
const userInfo = { 
  name: "Aylon Muramatsu",
  agency: '2459-6',
  account: '000001-6',
  balance: 125562.55,
  transactions: [
    {
      id: 1,
      description: 'Mercado PagoMercado PagoMercado PagoMercado PagoMercado PagoMercado PagoMercado Pago',
      cost: 329.99,
      created_at: '2020-07-17 01:41:00', 
      installments: [
        { id: 1, installment_order: 1, cost: 109.99 },
        { id: 2, installment_order: 2, cost: 109.99 },
        { id: 3, installment_order: 3, cost: 109.99 },
        { id: 3, installment_order: 3, cost: 109.99 },
        { id: 3, installment_order: 3, cost: 109.99 },
        { id: 3, installment_order: 3, cost: 109.99 },
        { id: 3, installment_order: 3, cost: 109.99 },
        { id: 3, installment_order: 3, cost: 109.99 },
        { id: 3, installment_order: 3, cost: 109.99 },
        { id: 3, installment_order: 3, cost: 109.99 },
        { id: 3, installment_order: 3, cost: 109.99 },
        { id: 3, installment_order: 3, cost: 109.99 },
      ]
    },
    {
      id: 2,
      description: 'Padaria',
      cost: 20.50,
      created_at: '2020-07-17 02:13:00', 
      installments: []
    },
    {
      id: 3,
      description: 'Amazon',
      cost: 1244.99,
      created_at: '2020-07-17 02:13:00', 
      installments: []
    },
    {
      id: 4,
      description: 'TED ICW',
      cost: 1214.99,
      created_at: '2020-07-17 02:57:00', 
      installments: []
    },
    {
      id: 5,
      description: 'TED ICW',
      cost: 1279.99,
      created_at: '2020-07-17 02:57:00', 
      installments: []
    },
  ]
}
export default function Home(){

  return (
    <View style={{ flex:1}}>
      <Header userInfo={userInfo}/>
      <PageContainer style={{
        top:240,
        maxHeight: height - 240
      }}>
        <UserInfo userInfo={userInfo}/>
        <Transactions data={userInfo.transactions}/>
      </PageContainer>
    </View>
  )
}