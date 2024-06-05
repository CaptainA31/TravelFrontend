import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const categories = [
  { id: '1', name: 'Adventures' },
  { id: '2', name: 'Businesses & markets' },
  { id: '3', name: 'Casinos and spas' },
  { id: '4', name: 'Cathedrals and churches' },
  { id: '5', name: 'Festivals' },
  { id: '6', name: 'Monuments' },
  { id: '7', name: 'Marinas' },
  { id: '8', name: 'Museums and galleries' },
];

export default function UserPreferences() {
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [id]: !prevFavorites[id],
    }));
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
        <FontAwesome
          name={favorites[item.id] ? 'heart' : 'heart-o'}
          size={24}
          color={favorites[item.id] ? 'red' : 'black'}
          style={styles.icon}
        />
      </TouchableOpacity>
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  );

  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  icon: {
    marginRight: 10,
  },
  itemText: {
    fontSize: 18,
  },
});
