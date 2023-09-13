import React from 'react'
import { colors } from '../themes/colors'
import { StyleSheet, View,Text } from 'react-native'

const Header = ({title = "Home"}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}> {title} </Text>
        </View>
    )

}

const styles = StyleSheet.create({

    container:{
        height: 85,
        with: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    title: {
        fontSize: 25,
        marginVertical: '10',
        fontWeight: '600',
        color: colors.major,
        top: 15
    }
})

export default Header;