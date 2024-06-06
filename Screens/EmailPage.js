import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import styles from '../style';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function EmailPage() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');

  function handleBack() {
    navigation.navigate("NamePage");
  }

  function handleContinue() {
    navigation.navigate("PasswordPage");
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
          What is your email address?
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <View style={styles.action}>
          <TextInput
            style={styles.textInput}
            onChange={e => setEmail(e.nativeEvent.text)}
            value={email}
          />
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
