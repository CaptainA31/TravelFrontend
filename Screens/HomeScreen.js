import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Platform, StatusBar, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from '../style';

export default function HomeScreen() {
  const navigation = useNavigation();

  function handleMenu() {
    navigation.openDrawer();
  }

  return (
    <View style={[{
      flex: 1,
      backgroundColor: '#FFF',
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleMenu}>
          <FontAwesome name="bars" size={24} color="black" />
        </TouchableOpacity>
        <Image source={require('../assets/whale.png')} style={styles.smallLogo} />
        <Text style={styles.headerText}>INUME</Text>
        <Image source={require('../assets/Toronto.png')} style={styles.rightLogo} />
      </View>

      <ScrollView style={styles.chatContainer}>
        <View style={styles.appMessage}>
          <Text>Hey! I'm Inume, your AI tour guide. Choose any of the options below to get started.</Text>
        </View>
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.optionBox}>
            <Image source={require('../assets/newTour.png')} style={styles.optionImage} />
            <Text>Plan a new tour</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionBox}>
            <Image source={require('../assets/StartTour.png')} style={styles.optionImage} />
            <Text>Start planned tour</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionBox}>
            <Image source={require('../assets/TravelJournal.png')} style={styles.optionImage} />
            <Text>Travel Journal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionBox}>
            <Image source={require('../assets/AnyQuestion.png')} style={styles.optionImage} />
            <Text>Ask any question</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.appMessage}>
          <Text>...or you can start asking me about your current city Toronto right away! How can I help you?</Text>
        </View>
      </ScrollView>

      <View style={styles.chatInputContainer}>
        <TextInput style={styles.chatInput} placeholder="Ask me anything" />
        <TouchableOpacity style={styles.cameraButton}>
          <FontAwesome name="camera" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
