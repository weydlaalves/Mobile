import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { style } from './style'

export class Sobre extends Component {
    render() {
        return (
            <View style={style.container}>
                <Text style={style.title}>
                    Quem sou eu?
                </Text>
                <Text>
                    OI povoo!!! Eu sou Weydla Alves,
                </Text>
                <Text>
                    Designer Digital e blogueirinha às vezes
                </Text>
                <Text>
                    Desenvolvi esse pequeno teste para calcular
                </Text>
                <Text>
                    o IMC bora lá?
                </Text>

                <TouchableOpacity style={style.button} onPress={()=> this.props.navigation.goBack()}>
                    <Text style={style.buttonText}>
                        Home
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Sobre