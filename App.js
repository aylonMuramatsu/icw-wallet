import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/system/routes';
import { useFonts, Roboto_400Regular, Roboto_900Black } from '@expo-google-fonts/roboto'
import { AppLoading } from 'expo';
export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_900Black
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Routes/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
