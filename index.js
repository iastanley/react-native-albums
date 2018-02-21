// Import library to help create component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/Header';

// Create component
const App = () => {
  return (
    <Header />
  );
};

// Render to device
AppRegistry.registerComponent('albums', () => App);
