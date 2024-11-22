// src/screens/HomeScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Compass from '../components/Compass.js';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Compass />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
});

export default HomeScreen;
