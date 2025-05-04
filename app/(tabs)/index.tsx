import { Image } from 'expo-image';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet } from 'react-native';
import { auth } from '../../utils/firebaseConfig';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const [userEmail, setUserEmail] = useState<string>('');

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setUserEmail(user.email || 'No email available');
    }
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.container}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">¡Bienvenido!</ThemedText>
          <HelloWave />
        </ThemedView>

        <ThemedView style={styles.userInfoContainer}>
          <ThemedText type="subtitle">Información del Usuario</ThemedText>
          <ThemedText>Email: {userEmail}</ThemedText>
        </ThemedView>

        <ThemedView style={styles.logoutContainer}>
          <Button 
            title="Cerrar Sesión" 
            onPress={handleLogout}
            color="#FF4444"
          />
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 30,
  },
  userInfoContainer: {
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
    gap: 10,
  },
  logoutContainer: {
    marginTop: 'auto',
    paddingVertical: 20,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
