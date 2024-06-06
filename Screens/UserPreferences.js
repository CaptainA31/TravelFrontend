import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from '../style';
import { useNavigation } from '@react-navigation/native';


const categories = [
  { id: '1', name: 'Adventures' },
  { id: '2', name: 'Businesses & markets' },
  { id: '3', name: 'Casinos and spas' },
  { id: '4', name: 'Cathedrals and churches' },
  { id: '5', name: 'Festivals' },
  { id: '6', name: 'Monuments' },
  { id: '7', name: 'Marinas' },
  { id: '8', name: 'Museums and galleries' },
  { id: '9', name: 'Adventures' },
  { id: '10', name: 'Businesses & markets' },
  { id: '11', name: 'Casinos and spas' },
  { id: '12', name: 'Cathedrals and churches' },
  { id: '13', name: 'Festivals' },
  { id: '14', name: 'Monuments' },
  { id: '15', name: 'Marinas' },
  { id: '16', name: 'Museums and galleries' },
];

export default function UserPreferences() {
  const navigation = useNavigation();

  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [id]: !prevFavorites[id],
    }));
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity style={{marginTop: 10}} onPress={() => toggleFavorite(item.id)}>
        <FontAwesome
          name={favorites[item.id] ? 'heart-o' : 'heart'}
          size={24}
          color={favorites[item.id] ? 'black' : '#AF1915'}
          style={styles.icon}
        />
      </TouchableOpacity>
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  );

  function handleBack() {
    navigation.navigate("SelectCity");
  }

  function handleContinue(){
    navigation.navigate("SubjectPreferences");
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
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      />
    
    <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.ButtonFill} onPress={handleContinue}>
          <Text style={styles.textSign}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
