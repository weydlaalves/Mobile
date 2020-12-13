import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Fortaleza from './Fortaleza.jsx';
import Iguatu from './Iguatu.jsx';
import Juazeiro from './Juazeiro.jsx';
import MoradaN from './MoradaN.jsx';

export default function App() {
  return (
    <View style={styles.container}>
      <Fortaleza/>
      <Iguatu/>
      <MoradaN/>
      <Juazeiro/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
