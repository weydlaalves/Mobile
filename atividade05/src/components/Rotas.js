import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MusicAlbum from './MusicAlbum' 
import Modal from './Modal';
import MusicDetailAlbum from './MusicDetailAlbum';

const Rotas = createStackNavigator();

function RotasTelas(){
    return(
        <NavigationContainer>

            <Rotas.Navigator initialRouteName="Lista">

                <Rotas.Screen name="Lista" component={MusicAlbum} options={{title: 'Galeria'}}>
                </Rotas.Screen>

                <Rotas.Screen name="Detalhe" component={MusicDetailAlbum}>
                </Rotas.Screen>

                <Rotas.Screen name="Modal"component={Modal} options={{headerShown: false}}>
                </Rotas.Screen>

            </Rotas.Navigator>

        </NavigationContainer>
    )
}

export default RotasTelas;