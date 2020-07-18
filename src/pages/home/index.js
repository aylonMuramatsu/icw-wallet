import React, { useState, useEffect, useMemo } from 'react'
import { View, Text, Dimensions, Animated } from "react-native";
import Header from '../../components/Header';
import PageContainer from '../../components/PageContainer';
import UserInfo from '../../components/UserInfo';
import Balance from '../../components/Balance';
import Transactions from '../../components/Transactions';
import Tabs from '../../components/Tabs';
import {TransactionTypeEnum} from '../../system/enum';
import { PanGestureHandler, State, TouchableOpacity } from 'react-native-gesture-handler';
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
      type: TransactionTypeEnum.Debit,
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
      type: TransactionTypeEnum.Debit,
      installments: []
    },
    {
      id: 3,
      description: 'Amazon',
      cost: 1244.99,
      created_at: '2020-07-17 02:13:00', 
      type: TransactionTypeEnum.Debit,
      installments: []
    },
    {
      id: 4,
      description: 'TED ICW',
      cost: 1214.99,
      created_at: '2020-07-17 02:57:00', 
      type: TransactionTypeEnum.Credit ,
      installments: []
    },
    {
      id: 5,
      description: 'TED ICW',
      cost: 1279.99,
      created_at: '2020-07-17 02:57:00', 
      type: TransactionTypeEnum.Credit ,
      installments: []
    },
    {
      id: 7,
      description: 'TED ICW',
      cost: 1279.99,
      created_at: '2020-07-17 02:57:00', 
      type: TransactionTypeEnum.Credit ,
      installments: []
    },
    {
      id: 8,
      description: 'TED ICW',
      cost: 1279.99,
      created_at: '2020-07-17 02:57:00', 
      type: TransactionTypeEnum.Credit ,
      installments: []
    },
    {
      id: 9,
      description: 'TED ICW',
      cost: 1279.99,
      created_at: '2020-07-17 02:57:00', 
      type: TransactionTypeEnum.Credit ,
      installments: []
    },
    {
      id: 10,
      description: 'TED ICW',
      cost: 1279.99,
      created_at: '2020-07-17 02:57:00', 
      type: TransactionTypeEnum.Credit ,
      installments: []
    },
    {
      id: 11,
      description: 'TED ICW',
      cost: 1279.99,
      created_at: '2020-07-17 02:57:00', 
      type: TransactionTypeEnum.Credit ,
      installments: []
    },
  ]
}
export default function Home(){
  const [opened, setOpened] = useState(false) 
  const [translateY, setTranslateY] = useState(new Animated.Value(240))
  


  const FnOpenAnimation =  () => {
    setOpened(true);
     openAnim();
  }

  const FnCloseAnimation = () => {

    setOpened(false);
     closeAnim()
  }


  function openAnim(){
    Animated.timing(translateY, {
      toValue: 0,
      duration:1000,
      useNativeDriver:true,
    }).start()
  }

  function closeAnim(){
    Animated.timing(translateY, {
      toValue: 240,
      duration:1000,
      useNativeDriver:true,
    }).start()
  }
  // setTimeout(() => {
  //   openAnim()

  // },2000)

  // FnOpenAnimation()
  // setTimeout(() => {
  //   FnCloseAnimation()
  // },1500)



  return (
    <View style={{ flex:1, backgroundColor:'#000'}}>
      <Header userInfo={userInfo}/>
        <Animated.View style={{
          flex:1,
          zIndex:5,
          backgroundColor: '#FCFCFC',
          borderRadius: translateY.interpolate({
            inputRange: [0,35],
            outputRange: [0,35],
            extrapolate: 'clamp'
          }),
          paddingTop:35,
          transform:[
            {
              translateY: translateY.interpolate({
                inputRange:[0,240],
                outputRange: [0, 240],
                extrapolate: 'clamp'
              })
            }
          ],
          maxHeight: height 
        }}>
          <PageContainer style={{ }}>
              <Animated.View >
                <UserInfo userInfo={userInfo}/>
              </Animated.View>
            <Transactions 
              data={userInfo.transactions} 
              opened={opened}
            />
            <TouchableOpacity onPress={ !opened ? FnOpenAnimation : FnCloseAnimation }>
              <Text style={{
                paddingTop:15,
                fontSize:20,
                textAlign:'center'
              }}>
                {`${!opened && 'Ver Mais' || opened && 'Ver Menos'}`}
              </Text>
            </TouchableOpacity>
          </PageContainer>
        </Animated.View>
    </View>  )
}