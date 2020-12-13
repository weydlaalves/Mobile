
import React, {Component} from 'react';
import {View, Button} from 'react-native';

export default class Fortaleza extends Component {
    constructor(props){
        super(props)
        this.state = {valor : 0 }
        
    }
    render(){
        return(
            <View>
               
                <h> Fortaleza: {this.state.valor} </h>
                    
                <Button title = 'Fortaleza'
                    onPress = {
                        ()=>{
                            this.setState ({ valor : this.state.valor + 1})
                            
                        }
                    }
                /> <br/>
               

            </View>
        )
    }

}