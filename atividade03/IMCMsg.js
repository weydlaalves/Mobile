import React, { Component } from 'react'
import { StyleSheet,Text, View } from 'react-native'

export class IMCMsg extends Component {
    constructor(props){
        super(props)
    }
    render() {
       let situacao = "";
       let corText = style.situacao; 
        if (this.props.imc < 17 && this.props.imc > 0){
            situacao = "Muito abaixo do peso"
        } else if (this.props.imc > 17 && this.props.imc < 18.49){
            situacao = "Abaixo do peso"
            corText = style.atencao
        }else if (this.props.imc > 18.50 && this.props.imc < 24.99){
            situacao = "Peso Normal"
            corText = style.normal
        }else if (this.props.imc > 25 && this.props.imc < 29.99){
            situacao = "Acima do Peso "
            corText = style.atencao
        }else if (this.props.imc > 30 && this.props.imc < 34.99){
            situacao = "Obesidade I"
        }else if (this.props.imc > 35 && this.props.imc < 39.99){
            situacao = "Obesidade II (severa)"
        }else if(this.props.imc > 40) {
            situacao = "Obesidade III(mórbida)"
        }
        
        return (
            <View>
                <Text style = {corText}>
                     {situacao}
                </Text>
                
            </View>
 
        )
    }
}
const style = StyleSheet.create({
    situacao : {
        color :"red",
    },
    normal:{
        color: "blue",
    },
    atencao: {
        color: "orange",
    }

  });
export default IMCMsg
