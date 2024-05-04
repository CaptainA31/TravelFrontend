import { View, Text, Button } from 'react-native'
import styles from './style'
import Login from './Screens/Login'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Register from './Screens/Register';
import Home from './Screens/Home';

export default function App() {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register} />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}