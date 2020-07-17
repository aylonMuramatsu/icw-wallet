import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import Home from '../pages/home';

const Stack = createStackNavigator();

function HomeScreen(){
  return (
    <Home/>
  )
}

let navigationOptionDefault = {
  headerShown: false
}

export default function Routes(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={navigationOptionDefault} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
