import React, { useEffect, useState } from 'react'
import {View,Text,StyleSheet, TextInput, Button, TouchableOpacity, ScrollView, Alert} from 'react-native'

const Login = ({ navigation }) => {


    const [nombre,setNombre] = useState([])
    const [contraseña,setContraseña] = useState([])


    function validarContrasena(contrasena) {
        const longitudMinima = 8;
        const tieneMayuscula = /[A-Z]/;
        const tieneMinuscula = /[a-z]/;
        const tieneNumero = /[0-9]/;
        const tieneCaracterEspecial = /[!@#$%^&*(),.?":{}|<>]/;

        const errores = [];

        if (contrasena.length < longitudMinima) {
            Alert.alert(
                "Contraseña",
                "Su contraseña debe de tener almenos 8 caracteres",
                [
                    {
                        text:"cancelar",
                        onPress: () => console.log("Cancelar presionado"),
                        
                    },
                    {
                        text: "OK",                 // Texto del segundo botón
                        onPress: () => console.log("OK presionado"),      // Acción del botón
                    }
                ],
                {cancelable:true}
            )
        } else if (!tieneMayuscula.test(contrasena)) {
            setTextAlertaContraseña('La contraseña debe tener al menos una letra mayúscula');

            Alert.alert(
                "Contraseña",
                "La contraseña debe tener al menos una letra mayúscula",
                [
                    {
                        text:"cancelar",
                        onPress: () => console.log("Cancelar presionado"),
                        
                    },
                    {
                        text: "OK",                 // Texto del segundo botón
                        onPress: () => console.log("OK presionado"),      // Acción del botón
                    }
                ],
                {cancelable:true}
            )
        } else if (!tieneMinuscula.test(contrasena)) {
            Alert.alert(
                "Contraseña",
                "La contraseña debe tener al menos una letra minúscula",
                [
                    {
                        text:"cancelar",
                        onPress: () => console.log("Cancelar presionado"),
                        
                    },
                    {
                        text: "OK",                 // Texto del segundo botón
                        onPress: () => console.log("OK presionado"),      // Acción del botón
                    }
                ],
                {cancelable:true}
            )
        } else if (!tieneNumero.test(contrasena)) {
            Alert.alert(
                "Contraseña",
                "La contraseña debe tener al menos un número.",
                [
                    {
                        text:"cancelar",
                        onPress: () => console.log("Cancelar presionado"),
                        
                    },
                    {
                        text: "OK",                 // Texto del segundo botón
                        onPress: () => console.log("OK presionado"),      // Acción del botón
                    }
                ],
                {cancelable:true}
            )
        }

        return { esValida: errores.length === 0, errores: errores };
    }



    const Autenticacion = (password) => {
        validarContrasena(password)
    }





    return(

        <ScrollView style={styles.scroll}>
            <View style={styles.container}>





            <View style={styles.viewIniciarSesion}>
                <Text style={styles.textIniciarSesion}>Iniciar Sesión</Text>    
            </View>


            <View style={styles.viewInput}>

                <Text style={styles.textNombre}>Nombre de usuario</Text>
                <TextInput 
                    style={styles.inputNombre}
                    value={nombre}
                    onChangeText={(value) => setNombre(value)}
                />

                <Text style={styles.textContrasena}>Contraseña</Text>
                <TextInput 
                        style={styles.inputContrasena} 
                        secureTextEntry
                        value={contraseña}
                        onChangeText={(value) => {setContraseña(value)}}


                    />


                <TouchableOpacity style={styles.btnIniciarSesion} onPress={() => Autenticacion(contraseña)}>
                    <Text style={styles.textbtnIniciarSesion}>Iniciar Sesión</Text>
                </TouchableOpacity>

            </View>


            <View style={styles.viewCuenta}>

                <Text style={styles.textPregunta}>¿No tienes una cuenta?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("registrar")}>
                    <Text style={styles.textRegistrate}>Registrate</Text>
                </TouchableOpacity>

            </View>






            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container:{
        height:'100%',
        display:'flex',
        alignItems:'center'
    },
    textIniciarSesion:{
        fontSize:32,
        textAlign:'center',
        color:'#0b7eff',
        fontWeight:'bold'
    },
    viewIniciarSesion:{
        height:250,
        display:'flex',
        justifyContent:'flex-end',
    },


    viewInput:{
        marginTop:100
    },
    textNombre:{
        fontSize:18,
        fontWeight:'bold',
        color:'black',
        marginBottom:20,
        marginLeft:10,
    },

    textContrasena:{
        fontSize:18,
        fontWeight:'bold',
        color:'black',
        marginBottom:20,
        marginLeft:10
    },

    inputNombre:{
        width:350,
        borderWidth:1,
        borderRadius:50,
        marginBottom:40,
        textAlign:'center',
        fontSize:19,
        fontWeight:'bold',
    },

    inputContrasena:{
        width:350,
        borderWidth:1,
        borderRadius:50,
        textAlign:'center',
        fontSize:19,
        fontWeight:'bold',
    },

    btnIniciarSesion:{
        borderWidth:1,
        borderRadius:50,
        width:350,
        backgroundColor:'#0c60c9',
        marginTop:50,
        height:40,
        display:'flex',
        justifyContent:'center'
    },

    textbtnIniciarSesion:{
        color:'white',
        textAlign:'center',
        fontSize:20
    },

    viewCuenta:{
        marginTop:15,
        display:'flex',
        flexDirection:'row'
    },

    textPregunta:{
        color:'black',
        fontSize:17
    },
    textRegistrate:{
        color:'#5fa7ff',
        fontSize:17,
        fontWeight:'bold',
        marginLeft:10
    },

    scroll:{
        width:'100%',
    }


})

export default Login



