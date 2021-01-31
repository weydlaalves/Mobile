import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import { style } from './style'

export class Perfil extends Component {
    render() {
        return (
            <View style={style.container}>
                <Image style={{height:150, width:150, margin: 10}} source={{uri: "https://avatars.githubusercontent.com/u/47798321?s=460&u=f5146e3ca2a60cdb81faf131064872b61f8b6ed2&v=4"}}/>

                <Text>
                    Nome: {this.props.route.params.nome}
                </Text>
                <Text>
                    Idade: {this.props.route.params.nome}
                </Text>
                <Text>
                    Email: {this.props.route.params.email}
                </Text>

                <TouchableOpacity style={style.button} onPress={()=> this.props.navigation.navigate('Home')}>
                    <Text style={style.buttonText}>
                        Home
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Perfil
