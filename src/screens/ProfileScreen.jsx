import React, { useState } from 'react'
import { View, Text, Image, Button, StyleSheet, TouchableOpacity,ActivityIndicator } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { usePutImageMutation } from '../services/ecApi';
import { useGetImageQuery } from '../services/ecApi';

export const ProfileScreen = () => {

    const defaultImage = "data:image/png;base64,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"

    const [putImage, result] = usePutImageMutation();

    const { data, isLoading, error, isError, refetch } = useGetImageQuery();

    const pickImage = async () => {

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            base64: true
        });


        if (!result.canceled) {
            await putImage({
                image: `data:image/jpeg;base64,${result.assets[0].base64}` //encabezado para la db + la imagen
            });
        } else {
            console.log('Has cancelado acceso')
        }

        refetch();
    };

    const openmCamara = async () => {
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

        if (!permissionResult.granted) {
            alert('No se permitio acceso a la camara')
            return;
        } else {
            const result = await ImagePicker.launchCameraAsync();

            if (!result.canceled) {
                await putImage({
                    image: `data:image/jpeg;base64, ${result.assets[0].base64}`
                });

            }

            refetch();
        }
    }


    return (
        <View style={styles.container}>
            
            <Image
            
                source={{ uri: data ? data.image : defaultImage }}
                style={styles.profileImage}
            />
            <TouchableOpacity style={styles.button} onPress={openmCamara}>
                <MaterialCommunityIcons name="camera" size={24} color="white" />
                <Text style={styles.buttonText}>Abrir Cámara</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={pickImage}>
                <MaterialCommunityIcons name="image" size={24} color="white" />
                <Text style={styles.buttonText}>Abrir Galería</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => console.log('MapScreen')}>
                <MaterialCommunityIcons name="map" size={24} color="white" />
                <Text style={styles.buttonText}>Abrir Mapa</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75, // Para que la imagen sea redonda
        marginBottom: 20,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    buttonText: {
        color: 'white',
        marginLeft: 10,
    },
});