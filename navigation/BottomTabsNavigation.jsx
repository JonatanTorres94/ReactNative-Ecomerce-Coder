import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackNavigation } from './StackNavigation';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../src/themes/colors'
import { ProfileScreen } from '../src/screens/ProfileScreen';


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
            <Tab.Screen name="Carrito" component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name="person-outline" size={focused ? 35 : 30} color={focused ? colors.select : colors.primary} />
                    )
                }} />

        </Tab.Navigator>
    )
}
