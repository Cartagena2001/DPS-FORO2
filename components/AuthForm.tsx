import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithCredential, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { auth } from '../utils/firebaseConfig';
import { configureGoogleSignIn } from '../utils/googleAuth';

interface AuthFormProps {
  isLogin: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({ isLogin }) => {
  useEffect(() => {
    configureGoogleSignIn();
  }, []);

  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const tokens = await GoogleSignin.getTokens();
      const idToken = tokens.idToken;
  
      if (!idToken) {
        throw new Error('No se pudo obtener el idToken');
      }
  
      const credential = GoogleAuthProvider.credential(idToken);
      await signInWithCredential(auth, credential);
    } catch (error) {
      console.error(error);
      Alert.alert('Error al iniciar sesión con Google');
    }
  };
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (): void => {
    if (isLogin) {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          Alert.alert('Inicio de sesión exitoso');
        })
        .catch((error: Error) => {
          Alert.alert(error.message);
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          Alert.alert('Registro exitoso');
        })
        .catch((error: Error) => {
          Alert.alert(error.message);
        });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesion 🖐️</Text>
      <Text style={styles.subtitle}>Bienvenido al FORO 2 de DPS</Text>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Correo Electronico</Text>
        <TextInput 
          style={styles.input}
          placeholder="Correo electrónico" 
          value={email} 
          onChangeText={setEmail} 
          keyboardType="email-address" 
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Contraseña</Text>
        <TextInput 
          style={styles.input}
          placeholder="Contraseña" 
          value={password} 
          onChangeText={setPassword} 
          secureTextEntry 
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Continuar con Google"
          onPress={signInWithGoogle}
          color="#4285F4"
        />
      </View>
      <Button 
        title={isLogin ? "Iniciar Sesion" : "Registrarse"} 
        onPress={handleSubmit}
        color="#1D9BF0"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 12,
    fontSize: 16,
  },
  forgotPassword: {
    color: '#666',
    fontSize: 14,
    marginTop: 8,
    textAlign: 'right',
  },
  buttonContainer: {
    marginTop: 24,
    marginBottom: 16,
  },
  signupText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 14,
  },
  signupLink: {
    color: '#1D9BF0',
    fontWeight: 'bold',
  },
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  separatorText: {
    flex: 1,
    textAlign: 'center',
    color: '#666',
  },
});

export default AuthForm;