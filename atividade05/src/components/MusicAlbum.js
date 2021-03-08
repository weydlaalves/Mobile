import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { estilo } from '../style/style'
import MusicDetailAlbum from './MusicDetailAlbum.js'

export class MusicAlbum extends Component {
    constructor(props) {
        super(props)
        this.state = {
            albuns: [],
        }
    }

    componentDidMount() {
        fetch('https://raw.githubusercontent.com/san650/ten/master/apps/music/api/albums.json')
            .then(
                (response) => response.json()
            )
            .then(
                (responseJson) => {
                    this.setState({
                        albuns: responseJson.albums
                    })
                })
    }

    render() {

        let cards = []

        this.state.albuns.map((item, index) => {
            cards.push(
                <MusicDetailAlbum 
                    id={item.id}    
                    navigation={this.props.navigation}                 
                    key={index} 
                    title={item.name} 
                    artista={item.artist} 
                    imagem={item.image}>
                </MusicDetailAlbum>)
        });

        return (
            <View style={estilo.container}>
                {cards}
            </View>
        )
    }
}

export default MusicList;
