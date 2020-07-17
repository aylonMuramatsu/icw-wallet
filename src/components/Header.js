import React from 'react'
import { View } from 'react-native'
import UserInfo from './UserInfo'
import HeaderPaymentButton from './HeaderPaymentButton'
import HeaderTitle from './HeaderTitle'
import Avatar from './Avatar'
import Balance from './Balance'
import Tabs from './Tabs'

export default function Header(props){
  const { userInfo } = props;
  return (
    <View style={styles.Header}>
      <View style={styles.Container}>
        <HeaderPaymentButton/>
        <HeaderTitle/>
        <Avatar/>
      </View>
      <Balance balance={userInfo.balance}/>
      <Tabs />
    </View>
  )
}

const styles = {
  Header: { 
    paddingLeft:25,
    paddingRight:25,
    paddingTop:50,
    paddingBottom:140,
    backgroundColor: '#08070A',
    position:'absolute',
    zIndex:1,
    width:'100%'

  },
  Container: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center'
  }
}