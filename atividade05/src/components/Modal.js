import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import { style } from '../style/style'
import CardItem from './CardItem'

export class Modal extends Component {

    render() {
        return (
            <View style={style.container}>
                <CardItem>
                    <Text style={style.title}>
                        {this.props.route.params.artist}
                    </Text>
                    <Text style={style.subtitle}>
                        Lista de Músicas
                    </Text>
                </CardItem>

                <CardItem>
                    {this.props.route.params.lista}
                </CardItem>

                <CardItem>
                    <Button title="Voltar" 
                            color="red" 
                            onPress={()=>{this.props.navigation.navigate('Lista')}}>
                    </Button>
                </CardItem>
            </View>
        )
    }
}

export default Modal;