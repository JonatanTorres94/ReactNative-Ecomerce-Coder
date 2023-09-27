import React from 'react';
import { Image, StyleSheet, View, Text, ScrollView } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons'; // Importa los iconos que desees
import Header from '../components/Header';
import { colors } from '../themes/colors';

export const ProductDetail = ({ route }) => {
    const { product } = route.params;



    return (
        <ScrollView style={styles.container}>
            <Header title='Product Details' />
            <View style={styles.contentContainer}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={{ uri: product.images[0] }}
                    />
                </View>
                <View style={styles.productInfo}>
                    <Text style={styles.productTitle}>{product.title}</Text>
                    <Text style={styles.productPrice}>Price: ${product.price}</Text>
                    <View style={styles.ratingContainer}>
                        <AntDesign name="star" size={24} color={colors.primary} />
                        <Text style={styles.ratingText}>Rating: {product.rating}</Text>
                    </View>
                    <Text style={styles.productDescription}>{product.description}</Text>
                    <View style={styles.iconContainer}>
                        <AntDesign name="heart" size={30} color={colors.secondary} />
                        <Feather name="shopping-cart" size={30} color={colors.secondary} />
                        {/* Agrega más iconos adicionales según tus necesidades */}
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        marginTop: 10, // Margen superior añadido
    },
    imageContainer: {
        borderWidth: 1,
        borderColor: colors.primary,
        borderRadius: 10,
        padding: 10,
        shadowColor: colors.primary,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5,
    },
    image: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
    },
    productInfo: {
        alignItems: 'center',
    },
    productTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    productPrice: {
        fontSize: 18,
        color: colors.primary,
        marginBottom: 10,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    ratingText: {
        fontSize: 18,
        marginLeft: 5,
    },
    productDescription: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
