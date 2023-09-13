import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { colors } from '../themes/colors'

const ProductItems = ({ item }) => {

    return (
        <View style={styles.container}> 
            <TouchableOpacity onPress={() => console.log('Function ok')} style={styles.button}  >
                <Text style={styles.text}> {item.title} </Text>
                <View style={styles.imageContainer}>
                    <Image
                        resizeMode='contain' // Cambié 'cover' a 'contain'
                        style={styles.image}
                        source={{ uri: item.images[0] }}
                    />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginVertical: 10,
        borderColor: colors.secondary, // Cambié 'borderBlockColor' a 'borderColor'
        borderRadius: 10,
        borderWidth: 1,
        height: 80,
        justifyContent: 'center'
    },
    text: {
        color: 'black',
        fontSize: 20,
        marginLeft: 20
    },
    button:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 18,
        alignItems: 'center'
    },
    imageContainer: {
        width: 100, // Define el ancho máximo de la imagen
        height: 70, // Define la altura máxima de la imagen
        overflow: 'hidden', // Recorta cualquier parte de la imagen que se desborde
    },
    image: {
        width: '100%', // Asegura que la imagen se ajuste completamente al contenedor
        height: '100%', // Asegura que la imagen se ajuste completamente al contenedor
    },
})

export default ProductItems