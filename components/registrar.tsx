import React, { useState } from 'react'
import {View,Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Alert} from 'react-native'

const Registrar = () => {


    const [nombre,setNombre] = useState([])
    const [correo,setCorreo] = useState([])
    const [contraseña,setContraseña] = useState([])


    function validarCorreo(correo) {
        const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (regexCorreo.test(correo)) {
            return { esValido: true, mensaje: "El correo es válido." };
        } else {
            Alert.alert(
                "Correo",
                "El correo no es válido. Asegúrate de que tenga el formato correcto, e.g., ejemplo@dominio.com",
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
            return { esValido: false, mensaje: "El correo no es válido. Asegúrate de que tenga el formato correcto, e.g., ejemplo@dominio.com." };
        }
    }



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


    const Autenticacion = (email,password) => {
        validarCorreo(email)
        validarContrasena(password)
    }








    return(
        
            <ScrollView style={styles.scroll}>
                <View style={styles.container}>
    
    
    
                <View style={styles.viewRegistro}>
                    <Text style={styles.textRegistro}>Registro</Text>    
                </View>
    
    
                <View style={styles.viewInput}>
    
                    <Text style={styles.textNombre}>Nombre</Text>
                    <TextInput 
                        style={styles.inputNombre}
                        value={nombre}
                        onChangeText={(value) => setNombre(value)}
                    />
    
                    <Text style={styles.textNombre}>Apellido</Text>
                    <TextInput 
                        style={styles.inputNombre}
                        value={nombre}
                        onChangeText={(value) => setNombre(value)}
                    />


    
                    <Text style={styles.textCorreo}>Correo electrónico</Text>
                    <TextInput 
                    
                        style={styles.inputCorreo}
                        value={correo}
                        onChangeText={(value) => setCorreo(value)}
                        onEndEditing={() => setCorreo(correo.trim())}

                    />


                    <Text style={styles.textContrasena}>Contraseña</Text>
                    <TextInput 
                        style={styles.inputContrasena} 
                        secureTextEntry
                        value={contraseña}
                        onChangeText={(value) => {setContraseña(value)}}


                    />
    
    
                    <TouchableOpacity style={styles.btnRegistrar} onPress={() => Autenticacion(correo,contraseña)}>
                        <Text style={styles.textbtnRegistrar}>Registrar</Text>
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
    textRegistro:{
        fontSize:52,
        textAlign:'center',
        color:'#0b7eff',
        fontWeight:'bold'
    },
    viewRegistro:{
        height:250,
        display:'flex',
        justifyContent:'center',
    },


    viewInput:{
        marginTop:10,
    },
    textNombre:{
        fontSize:18,
        fontWeight:'bold',
        color:'black',
        marginBottom:20,
        marginLeft:10,
    },

    textCorreo:{
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

    inputCorreo:{
        width:350,
        borderWidth:1,
        borderRadius:50,
        textAlign:'center',
        fontSize:19,
        fontWeight:'bold',
    },

    btnRegistrar:{
        borderWidth:1,
        borderRadius:50,
        width:350,
        backgroundColor:'#0c60c9',
        marginTop:50,
        height:40,
        display:'flex',
        justifyContent:'center'
    },

    textbtnRegistrar:{
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
    },

    textContrasena:{
        fontSize:18,
        fontWeight:'bold',
        color:'black',
        marginBottom:20,
        marginLeft:10,
        marginTop:20
    },

    inputContrasena:{
        width:350,
        borderWidth:1,
        borderRadius:50,
        textAlign:'center',
        fontSize:19,
        fontWeight:'bold',
        marginTop:10
    },





})

export default Registrar