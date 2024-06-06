import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from '../style';
import { useNavigation } from '@react-navigation/native';


const categories = [
  { id: '1', name: 'Historic locations' },
  { id: '2', name: 'Culture and events' },
  { id: '3', name: 'Local hotspots' },
  { id: '4', name: 'Important figures' },
  { id: '5', name: 'Popular attractions' },
  { id: '6', name: 'Food and treats' },
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
    navigation.navigate("UserPreferences");
  }

  function handleContinue(){
    navigation.navigate("NamePage");
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
          What are some subjects that you are interested in learning more about?
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
