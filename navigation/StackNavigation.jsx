import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { HomeScreen } from '../src/screens/HomeScreen'
import Products from '../src/screens/Products'
import { ProductDetail } from '../src/screens/ProductDetail'

const Stack = createNativeStackNavigator()

export const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen component={HomeScreen} name='Home' />
        <Stack.Screen component={Products} name='Products' />
        <Stack.Screen component={ProductDetail} name='ProductDetail' />
    </Stack.Navigator>
  )
}
