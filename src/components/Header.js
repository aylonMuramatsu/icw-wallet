import React from 'react'
import { View } from 'react-native'
import UserInfo from './UserInfo'

export default function Header(props){
  return (
    <View style={styles.Container}>
      <UserInfo {...props}/>
    </View>
  )
}

const styles = {
  Container: { 
    paddingLeft:25,
    paddingRight:25,
    paddingTop:35,
    paddingBottom:15,
    backgroundColor: '#2738AD',
    height: 230,
    borderBottomLeftRadius:60
  }
}