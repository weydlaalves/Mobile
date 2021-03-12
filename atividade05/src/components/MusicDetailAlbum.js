import React, { Component } from 'react'
import { Button, Image, Text } from 'react-native'
import { style } from '../style/style'
import Card from './Card'
import CardItem from './CardItem'

export class MusicDetailAlbum extends Component {
    constructor(props) {
        super(props)
        this.state = {
            musicas: [],
        }
    }

    componentDidMount() {
        fetch('https://raw.githubusercontent.com/san650/ten/master/apps/music/api/albums/' + this.props.id + '/tracks.json')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    musicas: responseJson.tracks,
                })
            })
    }

    render() {

        let lista = []

        this.state.musicas.map((item, index) => {
            lista.push(
                <Text
                    key={index}>{index + 1} - ({item.duration}) - {item.title}
                </Text>)
        })

        return (
            <Card>
                <CardItem>
                    <Text
                        style={style.title}>
                        {this.props.title}
                    </Text>

                    <Text
                        style={style.subtitle}>
                        {this.props.artista}
                    </Text>
                </CardItem>

                <CardItem>
                    <Image 
                        source={{uri:"https://raw.githubusercontent.com/san650/ten/master/apps/music"} + this.props.imagem}
                        style={style.imagem}>
                    </Image>
                </CardItem>

                <CardItem>
                    <Button
                        
                        title="Ver musicas"
                        color="purple"
                        onPress={() => { this.props.navigation.navigate('Modal', { lista: lista, artist: this.props.artista }) }}>
                    </Button>

                    <Button 
                        title="Comprar"
                        color="green">
                    </Button>
                </CardItem>
            </Card>
        )
    }
}

export default MusicDetailAlbum;
