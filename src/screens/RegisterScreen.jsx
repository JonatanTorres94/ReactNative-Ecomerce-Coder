import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet
} from 'react-native';
import { firebasE_auth } from '../firebase/firebase__auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';


export const RegisterScreen = ({ navigation }) => {

  const handleLoginNavigation = () => {
    // Navegar a la pantalla de inicio de sesión
    navigation.navigate('Login');

  };

  const handleRegister = async() => {
    
    try {

      const response = await createUserWithEmailAndPassword(firebasE_auth, email, password)

      navigation.navigate('Login')

    } catch (e) {
      console.log("Error en registro",e)
    }

  }


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrarse</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Pressable style={styles.registerButton} onPress={() => handleRegister()}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </Pressable>
      <Text style={styles.loginText}>
        ¿Ya tienes una cuenta?
        <Text style={styles.loginLink} onPress={handleLoginNavigation}>
          Iniciar sesión
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  registerButton: {
    backgroundColor: 'blue',
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginText: {
    marginTop: 20,
    fontSize: 16,
  },
  loginLink: {
    color: 'blue',
    fontWeight: 'bold',
  },
});
