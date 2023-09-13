import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'

const Search = ({text, setText}) => {

    const clearText = () => {
        setText('')
    }


    return (
        <View style={styles.cotainer}>
            <TextInput
                onChangeText={(value) => setText(value)}
                value={text}
                style={styles.input}
                placeholder='Busca un producto aqui...'
            />

            <TouchableOpacity onPress={() => clearText()}>
                <AntDesign name='close' size={30} color={'black'} />
            </TouchableOpacity>


        </View>
    )
}

const styles = StyleSheet.create({
    cotainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20
    },
    input: {
        width: '78%',
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        fontSize: 20,
        marginRight: 15,
    }
})

export default Search