import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cabecalho from './Cabecalho.js' 
import Corpo from './Corpo.js';
import Disciplina from './Disciplina.js';


class constructorApp extends Component{
  constructor(props){
    super(props);
    this.nome = {props:nome};
    this.curso = {props:curso};
    this.disciplina = {props:disciplina};
  }
}
export default function App() {
  return (
    <View style={styles.container}>
      <Cabecalho></Cabecalho>
      <Corpo></Corpo>
      <Disciplina disciplina = {'this.disciplina'}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
