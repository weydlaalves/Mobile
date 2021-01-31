import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    button:{
        backgroundColor: '#f08080',
        padding: 10,
        marginBottom: 10,
        marginTop: 10,
        width: '75%',
        borderRadius: 20,
    },
    buttonText: {
        color: '#696969',
        textAlign: "center",
        fontSize: 20,
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5deb3"
    },
    title:{
        fontSize: 25,
        fontWeight:"bold"
        
    
    },
    textInput: {
        borderBottomColor: 'black',
        borderBottomWidth:1,
        width: "75%",
        marginBottom: 10,
    },
    text: {
        fontWeight:"bold"
    }
})

export {style}