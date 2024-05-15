import { View, Text, Button } from 'react-native'
import styles from './style'
import * as React from 'react';
import Login from './Screens/Login';
import Home from './Screens/Home';
import GooglePage from './Screens/GooglePage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Register from './Screens/Register';
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage  from '@react-native-async-storage/async-storage';



export default function App() {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="GooglePage" component={GooglePage} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register} />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}