import React from 'react'
import { View, Text } from 'react-native'
import Avatar from './Avatar'
import Icon from '@expo/vector-icons/FontAwesome';
export default function UserInfo({ userInfo }){
  const { name, account, agency } = userInfo
  return (
    <View style={styles.Container}>
      <Text style={styles.Username}>Olá {name}, Bom te ver!</Text>
      <View style={styles.AccountInfoContainer}>
        <Text style={styles.AccountInfo}>Agencia: {agency}</Text>
        <Text style={styles.AccountInfo}>Conta: {account}</Text>

      </View>
    </View>
  )
}

const styles =  {
  Container: {
    paddingLeft:35,
    paddingRight:35,
    paddingBottom:10
  },
  AccountInfoContainer: {
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  AccountInfo: {
    marginTop:10,
    fontSize:18,
    color: '#636e72',
    fontFamily: 'Roboto_400Regular',
  },
  Username:{
    color: '#2d3436',
    fontFamily: 'Roboto_900Black',
    fontSize:24
  },
  title: {
    color: '#fff',
    fontSize: 26,
    textAlign: 'center',
    paddingRight:15,
    paddingLeft:15
  }
}