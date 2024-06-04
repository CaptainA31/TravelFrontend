import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import * as Facebook from 'expo-auth-session/providers/facebook';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import styles from '../style';

export default function FacebookPage() {
  const [userInfo, setUserInfo] = useState(null);
  const [request, response, promptAsync] = Facebook.useAuthRequest({
    clientId: '7686792701403560',
  });

  useEffect(() => {
    handleSignWithFacebook();
  }, [response]);

  async function handleSignWithFacebook() {
    if (!response) return; // No response yet, do nothing
    if (response.type === 'error') {
      console.error('Facebook authentication error:', response.error);
      return;
    }
    if (response.type === 'success') {
      const token = response.params.access_token;
      try {
        const user = await fetchUserInfo(token);
        await AsyncStorage.setItem('@user', JSON.stringify(user));
        setUserInfo(user);
      } catch (error) {
        console.error('Error fetching user information:', error);
      }
    }
  }

  const fetchUserInfo = async (token) => {
    try {
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,picture`
      );
      return await response.json();
    } catch (error) {
      throw new Error('Failed to fetch user information');
    }
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem('@user');
    setUserInfo(null);
  };

  return (
    <View style={[styles.mainContainer, { flex: 1, justifyContent: 'center', alignItems: 'center' }]}>
      <Text>FacebookPage</Text>
      <Text>{JSON.stringify(userInfo, null, 2)}</Text>
      <Button title="Sign in with Facebook" disabled={!request} onPress={promptAsync} />
      <Button title="Logout" onPress={handleLogout} />
      <StatusBar style="auto" />
    </View>
  );
}
