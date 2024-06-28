import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import AboutUs from './screens/AboutUs';
import Chat from './screens/Chat';
import Detection from './screens/Detection';

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}></Tab.Screen>
        <Tab.Screen name="AboutUs" component={AboutUs}></Tab.Screen>
        <Tab.Screen name="Detection" component={Detection}></Tab.Screen>
        <Tab.Screen name="Chat" component={Chat}></Tab.Screen>
      </Tab.Navigator>

    </NavigationContainer>
    
  );
}

