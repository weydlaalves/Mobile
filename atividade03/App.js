import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  IMCApp from '/IMCAPP'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <IMCApp></IMCApp>
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
