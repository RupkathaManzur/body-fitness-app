import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
import FavouriteScreen from './screens/FavouriteScreen';
import TabNavigator from './components/TabNavigator';


export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator home={HomeScreen} fav={FavouriteScreen}></TabNavigator>
    </NavigationContainer>
  );
}