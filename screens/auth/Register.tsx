import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthForm from '../../components/AuthForm';

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Register'>;

const RegisterScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View>
      <Text>Registrarse</Text>
      <AuthForm isLogin={false} />
      <View  style={styles.container}>
        <Text 
            style={styles.signupText}
            onPress={() => navigation.navigate('Login')}
        >
            ¿Ya tienes una cuenta? Inicia sesión aquí"
            <Text style={styles.signupLink}>Regístrate aquí</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        alignItems: 'center', 
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
  });

export default RegisterScreen;