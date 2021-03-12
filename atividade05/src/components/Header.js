import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { style } from '../style/style'

export class Header extends Component {
    render() {
        return (
            <View style={style.header}>
                <Text>
                    {this.props.title}
                </Text>
            </View>
        )
    }
}

export default Header;