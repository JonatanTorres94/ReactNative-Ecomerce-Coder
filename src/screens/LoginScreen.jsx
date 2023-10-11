import React from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { firebasE_auth } from '../firebase/firebase__auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setIdToken, setUser } from '../redux/slice/authSlice';

export const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { control, handleSubmit, formState: { errors } } = useForm();

  const handleLoginNavigation = () => {
    // Navegar a la pantalla de registro
    navigation.navigate('Register');
  };

  const onSubmit = async (data) => {
    try {
      const response = await signInWithEmailAndPassword(firebasE_auth, data.email, data.password);
      dispatch(setUser(response.user.email));
      dispatch(setIdToken(response._tokenResponse.idToken));
    } catch (error) {
      console.log("Error login", error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>

      {/* Campo de correo electrónico con validación */}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            keyboardType="email-address"
            autoCapitalize="none"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
        rules={{
          required: 'Correo electrónico requerido',
          pattern: {
            value: /^\S+@\S+\.\S+$/,
            message: 'Correo electrónico inválido',
          },
        }}
        defaultValue=""
      />
      {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}

      {/* Campo de contraseña con validación */}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
        rules={{
          required: 'Contraseña requerida',
          minLength: {
            value: 8,
            message: 'La contraseña debe tener al menos 8 caracteres',
          },
        }}
        defaultValue=""
      />
      {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}

      <Pressable style={styles.registerButton} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </Pressable>

      <Text style={styles.loginText}>
        ¿Ya tienes una cuenta?
        <Text style={styles.loginLink} onPress={handleLoginNavigation}>
          Registrarse
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
  errorText: {
    color: 'red',
  },
});

