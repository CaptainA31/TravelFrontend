// web 374183237302-90fe3049adrg9j5uvvurbu50hs266qoq.apps.googleusercontent.com
// android 374183237302-vi0kichaab7iaup6ecdq7f0r8sbkf8td.apps.googleusercontent.com









import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../style';

export default function Home() {
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
        <TouchableOpacity style={[styles.ButtonFill, { marginTop: 20 }]}>
          <Text style={styles.textSign}>SIGN IN</Text>
        </TouchableOpacity>
        <Text style={[styles.textBig, {marginTop: 80}]}>New to Inume?</Text>
        <Text style={styles.textSmall}>Start Touring now.</Text>
        <TouchableOpacity style={[styles.ButtonNoFill, { marginTop: 20 }]}>
          <Text style={[styles.textSign, {color: "#2566FE"}]}>GET STARTED</Text>
        </TouchableOpacity>
    </View>
  );
}
