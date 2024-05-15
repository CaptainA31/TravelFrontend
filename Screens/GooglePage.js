import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import styles from '../style';

WebBrowser.maybeCompleteAuthSession();

export default function GooglePage() {
  const [userInfo, setUserInfo] = useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "374183237302-vi0kichaab7iaup6ecdq7f0r8sbkf8td.apps.googleusercontent.com",
    webClientId: "374183237302-90fe3049adrg9j5uvvurbu50hs266qoq.apps.googleusercontent.com"
  });

  useEffect(() => {
    handleSignWithGoogle();
  }, [response])

  async function handleSignWithGoogle() {
    const user = await AsyncStorage.getItem("@user");
    if (!user) {
      if (response?.type === "success") {
        await getUserInfo(response.authentication.accessToken);
      }
    } else {
      setUserInfo(JSON.parse(user));
    }
  }

  const getUserInfo = async (token) => {
    if (!token) return;
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const user = await response.json();
      await AsyncStorage.setItem("@user", JSON.stringify(user));
      setUserInfo(user);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View  style={[styles.mainContainer, { flex: 1, justifyContent: "center", alignItems: "center" }]}>
      <Text>GooglePage</Text>
      <Text>{JSON.stringify(userInfo, null ,2)}</Text>
      <Button title='Sign in with Google' onPress={promptAsync} />
      <Button title='Delete local storage' onPress={() => AsyncStorage.removeItem("@user")} />
      <StatusBar style='auto' />
    </View>
  )
}
