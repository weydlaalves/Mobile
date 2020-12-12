import React, { Component } from 'react';
import { Image } from 'react-native';


export default class Corpo extends Component {
    render() {
        let foto = {
            uri: 'https://avatars1.githubusercontent.com/u/47798321?s=460&u=f5146e3ca2a60cdb81faf131064872b61f8b6ed2&v=4'
        };
    return (
        <Image source={foto} style={{width: 193, height: 110}}/>
    );
    }
}
   