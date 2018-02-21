// Import library to help create component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Create component
const App = () => {
  return (
    <Text>Some Text</Text>
  );
};

// Render to device
AppRegistry.registerComponent('albums', () => App);
