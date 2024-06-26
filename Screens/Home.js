// web 374183237302-90fe3049adrg9j5uvvurbu50hs266qoq.apps.googleusercontent.com
// android 374183237302-vi0kichaab7iaup6ecdq7f0r8sbkf8td.apps.googleusercontent.com









import { View, Text, Image, TouchableOpacity } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import * as WebBrowser from 'expo-web-browser';

import React from 'react'
import styles from '../style';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  
  const navigation = useNavigation()


  function handleSignIn(){
    console.log('Sign in button pressed');
    navigation.navigate("Login");
  }

  function handleGetStarted(){
    navigation.navigate("SelectCity")
  }


  return (
    <View style={[styles.mainContainer, { flex: 1, justifyContent: "center", alignItems: "center" }]}>
      <View>
        <Image
          source={require("../assets/whale.png")}
          style={[styles.logo, {height: 260, width: 260, marginTop: -20}]}
        />
      </View>
      
        <Text style={[styles.textBig]}>Already have an Inume Account</Text>
        <Text style={styles.textSmall}>Start Touring where you left off</Text>
        <TouchableOpacity style={[styles.ButtonFill, { marginTop: 20 }]} onPress={handleSignIn}>
          <Text style={styles.textSign}>SIGN IN</Text>
        </TouchableOpacity>
        <Text style={[styles.textBig, {marginTop: 80}]}>New to Inume?</Text>
        <Text style={styles.textSmall}>Start Touring now.</Text>
        <TouchableOpacity style={[styles.ButtonNoFill, { marginTop: 20 }]} onPress={handleGetStarted}>
          <Text style={[styles.textSign, {color: "#2566FE"}]}>GET STARTED</Text>
        </TouchableOpacity>
    </View>
    
  );
}
