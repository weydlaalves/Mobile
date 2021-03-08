import React, { Component } from 'react'
import { View } from 'react-native'

export class CardItem extends Component {
    render() {
        return (
            <View>
                {this.props.children}
            </View>
        )
    }
}

export default CardItem;
