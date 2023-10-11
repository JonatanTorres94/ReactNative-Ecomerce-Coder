import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

import { LoginNavigation } from './LoginNavigation'
import { BottomTabsNavigation } from './BottomTabsNavigation'
import { useSelector } from 'react-redux'

export const MainNav = () => {

    const user = useSelector((state) => state.authSlice.user)

  return (
    <NavigationContainer>
        {user ? <BottomTabsNavigation/> : <LoginNavigation/>}
    </NavigationContainer>
  )
}
