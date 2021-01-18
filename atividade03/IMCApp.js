import React, { Component } from 'react'
import { Button, Text, TextInput, View } from 'react-native';
import IMCCalc from './IMCCalc';


export class IMCApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            peso: 0,
            altura: 0.0,
            pesoDif: 0,
            alturaDif: 0.0,
        }
    }
    calcularEstado(){
        this.setState({
            peso: this.state.pesoDif,
            altura: this.state.alturaDif,
        }
    )}
    render() {
        console.log(this.state)
        return (
            <View>
                <Text>
                    <TextInput 
                        placeholder = "Peso(kg)"
                        onChangeText = {(peso) => this.setState({pesoDif: peso})}>
                    </TextInput>
                    <TextInput 
                        placeholder = "Altura(cm)"
                        onChangeText = {(altura) => this.setState({alturaDif: altura})}> 
                    </TextInput>
                    <Button title = "Calcular" onPress={()=> this.calcularEstado()}> </Button>
                </Text>
                <IMCCalc 
                    peso = {this.state.peso}
                    altura   = {this.state.altura}
                ></IMCCalc>
            </View>
        )
    }
}

export default IMCApp
