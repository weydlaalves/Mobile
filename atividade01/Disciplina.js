import React, { Component } from 'react'
import { Text, View } from 'react-native';

const Disciplinas = (props) => {
    return(
        <View style = {{alignItems:'center'}}>
             <View style = {{alignItems:'center'}}>
                <Text > Minhas Disciplinas: {props.disciplina}</Text>
            </View>
        </View>
    );
}
export default class variasDisci extends Component {
    render(){
        return(
            <View style = {{alignItems:'center'}}>
                <Disciplinas disciplina = 'Mobile'/>
                <Disciplinas disciplina = 'Design Inovação'/>
                <Disciplinas disciplina = 'CDP'/>
            </View>
        );
    }
}