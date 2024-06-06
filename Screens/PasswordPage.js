import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import styles from '../style';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function PasswordPage() {
  const navigation = useNavigation();

  const [password, setPassword] = useState('');

  function handleBack() {
    navigation.navigate("NamePage");
  }

  function handleContinue() {
    navigation.navigate("UserLocation");
  }

  return (
    <View style={[styles.loginContainer, { flex: 1 }]}>
      <View style={styles.header}>
        <View style={styles.columnContainer}>
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <FontAwesome name="arrow-left" size={24} color="black" />
          </TouchableOpacity>
          <Image
            source={require('../assets/whale.png')}
            style={styles.logo}
          />
        </View>
        <Text style={[styles.text_header, styles.roundedText]}>
          What is your password?
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.action}>
          <TextInput
            style={styles.textInput}
            secureTextEntry={true}
            onChange={e => setPassword(e.nativeEvent.text)}
            value={password}
          />
        </View>
        <View style={{ fontSize: 15, textAlign: 'left', marginTop: 10 }}>
          <Text> - At least 8 characters long</Text>
          <Text> - At least 1 uppercase and 1 lowercase letter</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.ButtonFill} onPress={handleContinue}>
          <Text style={styles.textSign}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
