import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import QuoteListScreen from './screens/QuoteListScreen';
import Navigation from './navigation/navigation';

import * as firebase from 'firebase';
import { firebaseConfig } from './config/config';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return (
    <Navigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
