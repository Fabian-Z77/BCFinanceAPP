import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Login from './components/login';
import Main from './components/Main';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Registrar from './components/registrar';



const Stack = createNativeStackNavigator();

const app = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>

        
        <Stack.Screen
        name="login"
        component={Login}
        options={{headerShown:false}}
        />

        <Stack.Screen
          name='registrar'
          component={Registrar}
          options={{headerShown:false}}        
        />



      </Stack.Navigator>
    </NavigationContainer>

  )
}


const styles = StyleSheet.create({


})


export default app


