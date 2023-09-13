
import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import { colors } from '../themes/colors'

export const CategoryItem = ({item}) =>{
    return (
        <TouchableOpacity onPress={() => console.log('Function ok')}>
            <Text style={styles.textlist}> {item} </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    textlist:{
        borderColor: colors.fourth,
        borderRadius: 20,
        borderWidth: 1,
        fontSize: 18,
        margin: 8,
        padding: 15,
        backgroundColor: colors.tertiary,
        fontWeight: '500',
        color: colors.white,
        textAlign: 'center'
    }
})