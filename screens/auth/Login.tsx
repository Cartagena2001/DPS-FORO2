import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthForm from '../../components/AuthForm';

type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

type LoginScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'Login'>;

const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  return (
    <View>
      <Text>Iniciar Sesión</Text>
      <AuthForm isLogin={true} />
      <View  style={styles.container}>
        <Text 
          style={styles.signupText}
          onPress={() => navigation.navigate('Register')}
        >
          ¿No tienes cuenta? 
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


export default LoginScreen;