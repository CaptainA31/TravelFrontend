import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../style';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function SelectCity() {
  const navigation = useNavigation();

  function handleBack() {
    navigation.navigate("Home");
  }

  function handleCityPress(cityName) {
    navigation.navigate("UserPreferences", { city: cityName });
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
          Let me ask you a couple questions before you get started! What city do you want to learn more about?
        </Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <TouchableOpacity style={styles.city} onPress={() => handleCityPress("Toronto")}>
          <Image
            source={require('../assets/Toronto.png')}
            style={styles.cityImage}
            resizeMode="contain"
          />
          <Text style={styles.cityName}>Toronto</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.city} onPress={() => handleCityPress("Montreal")}>
          <Image
            source={require('../assets/Montreal.png')}
            style={styles.cityImage}
            resizeMode="contain"
          />
          <Text style={styles.cityName}>Montreal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.city} onPress={() => handleCityPress("Vancouver")}>
          <Image
            source={require('../assets/Vancouver.png')}
            style={styles.cityImage}
            resizeMode="contain"
          />
          <Text style={styles.cityName}>Vancouver</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.city} onPress={() => handleCityPress("Toronto")}>
          <Image
            source={require('../assets/Toronto.png')}
            style={styles.cityImage}
            resizeMode="contain"
          />
          <Text style={styles.cityName}>Toronto</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.city} onPress={() => handleCityPress("Montreal")}>
          <Image
            source={require('../assets/Montreal.png')}
            style={styles.cityImage}
            resizeMode="contain"
          />
          <Text style={styles.cityName}>Montreal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.city} onPress={() => handleCityPress("Vancouver")}>
          <Image
            source={require('../assets/Vancouver.png')}
            style={styles.cityImage}
            resizeMode="contain"
          />
          <Text style={styles.cityName}>Vancouver</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
