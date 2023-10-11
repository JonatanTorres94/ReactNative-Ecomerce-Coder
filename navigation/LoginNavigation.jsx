import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { LoginScreen } from '../src/screens/LoginScreen'
import {RegisterScreen} from '../src/screens/RegisterScreen'

const Stack = createNativeStackNavigator()

export const LoginNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen component={LoginScreen} name='Login' />
        <Stack.Screen component= {RegisterScreen} name='Register' />
    </Stack.Navigator>
  )
}
