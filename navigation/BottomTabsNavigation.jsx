import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackNavigation } from './StackNavigation';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../src/themes/colors'
import { ShoppingCart } from '../src/screens/ShoppingCart';


const Tab = createBottomTabNavigator();

export const BottomTabsNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, title: '' }}>
            <Tab.Screen name="Stack" component={StackNavigation}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name="home-outline" size={focused ? 35 : 30} color={focused ? colors.select : colors.primary} />
                    )
                }} />
            <Tab.Screen name="Carrito" component={ShoppingCart}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name="cart-outline" size={focused ? 35 : 30} color={focused ? colors.select : colors.primary} />
                    )
                }} />

        </Tab.Navigator>
    )
}
