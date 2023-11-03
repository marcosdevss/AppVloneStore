import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import React from 'react';
import { TextInput } from 'react-native-web';

export default function AppTeste() {

    return (

        <View style={styles.container}>


            <Text style={styles.slogan} >VloneStore.C</Text>


            <Text style={styles.titulo} >Tela Principal</Text>

            <TextInput style={styles.espacos} placeholder="digite seu usuario: "></TextInput>
            <TextInput style={styles.espacosdois} placeholder="digite sua senha: "></TextInput>

            <a style={styles.ancora} title='outrosite' target='_blank' href="/">Clique aqui para logar</a>


            <StatusBar style="auto" />
        </View>


    );

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },

    slogan: {
        color: 'grey',
        fontSize: '12px',
        marginBottom: '55px',
        textAlign: 'center'

    },


    titulo: {
        color: 'black',
        fontWeight: '700',
        fontSize: '25px',
        textAlign: 'center',
        fontFamily: 'Verdana',
        marginBottom: '50px'
    },

    espacos: {
        padding: '8px',
        marginBottom: '10px',
        backgroundColor: '#FF9390',
        borderCurve: 'continuous',
        borderBlockColor: 'black'

    },

    espacosdois: {
        padding: '8px',
        backgroundColor: '#FF9390',
        borderCurve: 'continuous',
        borderBlockColor: 'black',
        marginTop: '20px'

    },

    placeholder: {
        textAlign: 'center'
    },

    Button: {
        backgroundColor: '#FF9390',
        fontFamily: 'Verdana'
    },

    ancora: {
        fontFamily: 'sans-serif',
        fontWeight: '500',
        textDecorationLine: 'none',
        marginTop: '20px',
        color: 'black'
    }


});
