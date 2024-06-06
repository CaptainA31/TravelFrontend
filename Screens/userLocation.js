import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from '../style';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function UserLocation() {
  const navigation = useNavigation();
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
    })();
  }, []);

  function handleBack() {
    navigation.navigate("NamePage");
  }

  function handleContinue(){
    navigation.navigate("HomeScreen");
  }

  async function handleShareLocation() {
    setLoading(true);
    try {
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    } catch (error) {
      setErrorMsg('Error getting location');
    }
    setLoading(false);
  }

  let locationString = 'Waiting..';
  if (errorMsg) {
    locationString = errorMsg;
  } else if (location) {
    const { latitude, longitude } = location.coords;
    locationString = `Latitude: ${latitude}, Longitude: ${longitude}`;
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
          Finally, share your location with me so I can help guide you.
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.ButtonFill} onPress={handleShareLocation}>
          <Text style={styles.textSign}>SHARE LOCATION</Text>
        </TouchableOpacity>
      </View>

      {loading && <ActivityIndicator size="large" color="#0000ff" />}

      {location && (
        <View style={{ flex: 1 }}>
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
            />
          </MapView>
          <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 16, textAlign: 'center' }}>{locationString}</Text>
          </View>
        </View>
      )}

    <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.ButtonFill} onPress={handleContinue}>
          <Text style={styles.textSign}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
