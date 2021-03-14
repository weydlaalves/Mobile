import React, { Component } from 'react'
import { Text, TextInput } from 'react-native'
import ButtonEdit from './ButtonEdit'
import Card from './Card'
import CardItem from './CardItem'
import { style } from './Style'
import firestore from '@react-native-firebase/firestore'



export class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "Register student",
            name: "",
            idade: "",
            curso: "",
            id: "",
            action: this.addAluno,
        }
    }

    componentDidMount() {
        if (this.props.route.params) {
            this.setState({
                title: "Update student",
                name: this.props.route.params.name,
                idade: this.props.route.params.idade,
                curso: this.props.route.params.curso,
                id: this.props.route.params.id,
                action: this.updateData,
            })
        }

    }

    addAluno = () => {
        if (this.state.name == "") {
            alert("Digite seu nome")
        } else {
            if (this.state.idade == "") {
                alert("Digite sua idade!")
            } else {
                if (this.state.curso == "") {
                    alert("Digite sua idade")
                } else {
                    this.sendData()
                }
            }
        }
    }

    sendData = () => {
        firestore()
            .collection('alunos')
            .add({
                nome: this.state.name,
                idade: this.state.idade,
                curso: this.state.curso,
            })
            .then(() => {
                this.props.navigation.navigate('home');
            });
    }

    updateData = () => {
        firestore()
            .collection('alunos')
            .doc(this.state.id)
            .update({
                nome: this.state.name,
                idade: this.state.idade,
                curso: this.state.curso,
            })
            .then(() => {
                this.props.navigation.navigate('home');
            });
    }

    render() {
        return (
            <Card>
                <CardItem>
                    <Text style={style.title}>
                        {this.state.title}
                    </Text>
                </CardItem>

                <CardItem>
                    <TextInput placeholder="Name" value={this.state.name} style={style.input} onChangeText={(name) => { this.setState({ name: name }) }}>
                    </TextInput>
                </CardItem>

                <CardItem>
                    <TextInput placeholder="Age" value={this.state.idade} style={style.input} keyboardType="numeric" onChangeText={(idade) => { this.setState({ idade: idade }) }}>
                    </TextInput>
                </CardItem>

                <CardItem>
                    <TextInput placeholder="curso" value={this.state.curso} style={style.input} onChangeText={(curso) => { this.setState({ curso: curso }) }}>
                    </TextInput>
                </CardItem>

                <ButtonEdit btn="confirm" action={() => { this.state.action() }}>
                    Submits
                </ButtonEdit>

                <ButtonEdit btn="delete" action={(e) => { this.props.navigation.goBack() }}>
                    Exit
                </ButtonEdit>
            </Card>
        )
    }
}

export default Register