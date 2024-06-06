import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import styles from '../style';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function NamePage() {
  const navigation = useNavigation();

  const [name, setName] = useState('');

  function handleBack() {
    navigation.navigate("Home");
  }

  function handleContinue() {
    navigation.navigate("EmailPage");
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
          Let's create your profile. What is your name?
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <View style={styles.action}>
          <TextInput
            style={styles.textInput}
            onChange={e => setName(e.nativeEvent.text)}
            value={name}
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
