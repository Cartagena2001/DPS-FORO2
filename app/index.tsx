import { onAuthStateChanged, User } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { auth } from '../utils/firebaseConfig';
import AuthNavigator from './(auth)/AuthNavigator';
import AppNavigator from './(tabs)/index';

const RootNavigator = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {   
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return user ? <AppNavigator /> : <AuthNavigator/>;
};

export default RootNavigator;