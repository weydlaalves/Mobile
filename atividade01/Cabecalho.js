import React, { Component } from 'react'
import { Text, View } from 'react-native';

const Cabecalho = (props) => {
    return(
    <View style = {{alignItems:'center'}}>
        <Text >  Nome: {props.nome}</Text>
        <Text > Curso: {props.curso}</Text>
    </View>
        
    );
}
export default class elementosCabe extends Component {
    render(){
        return(
            <View style = {{alignItems:'center'}}>
                <Cabecalho nome = 'Weydla Alves'/>
                <Cabecalho curso = 'Design Digital'/>
            </View>
        )
    }
} 
