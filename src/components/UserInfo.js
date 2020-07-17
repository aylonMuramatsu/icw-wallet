import React from 'react'
import { View, Text } from 'react-native'
import Avatar from './Avatar'

export default function UserInfo({ userInfo }){
  const { name } = userInfo
  return (
    <View style={styles.Container}>
      <View style={styles.userData}>
        <Avatar/>
        <Text style={styles.userName}>{name}</Text>
      </View>
    </View>
  )
}

const styles =  {
  Container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  userData: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  userName: {
    color: '#fff',
    fontSize: 20,
    paddingLeft:15
  }
}