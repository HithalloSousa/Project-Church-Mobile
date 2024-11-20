import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { MyDrawer } from './navigation/Drawer';

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
      <StatusBar style='light' />
    </NavigationContainer>
  );
}

