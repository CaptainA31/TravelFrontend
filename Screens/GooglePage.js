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
    androidClientId: "741714239027-3useg5j9t913rdqkr991pid0kqr3m07c.apps.googleusercontent.com",
    webClientId: "741714239027-p9gjrll3q0lhgbhbirb9utt9ofog21hh.apps.googleusercontent.com"
  });

  useEffect(() => {
    async function checkUser() {
      const user = await AsyncStorage.getItem("@user");
      if (user) {
        setUserInfo(JSON.parse(user));
      } else if (response?.type === "success") {
        await getUserInfo(response.authentication.accessToken);
      }
    }
    checkUser();
  }, [response]);

  const getUserInfo = async (token) => {
    if (!token) return;
    try {
      const userInfoResponse = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const user = await userInfoResponse.json();
      await AsyncStorage.setItem("@user", JSON.stringify(user));
      setUserInfo(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={[styles.mainContainer, { flex: 1, justifyContent: "center", alignItems: "center" }]}>
      <Text>GooglePage</Text>
      <Text>{JSON.stringify(userInfo, null, 2)}</Text>
      <Button title='Sign in with Google' disabled={!request} onPress={() => promptAsync()} />
      <Button title='Delete local storage' onPress={() => AsyncStorage.removeItem("@user")} />
      <StatusBar style='auto' />
    </View>
  );
}
