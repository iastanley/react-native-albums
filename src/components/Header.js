import React from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native';
import {HEADER_LIGHT_GRAY} from '../styleConstants';

const Header = ({ headerText }) => {
  const { viewStyle, textStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{headerText}</Text>
    </View>  
  );
};

// all styles go in this styles object
const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: HEADER_LIGHT_GRAY,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60, //what are the units here - pixels?!
    elevation: 2,
    position: 'relative',
    ...Platform.select({
      ios: {
        // iOS only
        paddingTop: 15,
        shadowOpacity: 0.2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 }, 
      },
      android: {
        // Android only 
        elevation: 2 // this is part of android material design support   
      }
    })
  },
  textStyle: {
    fontSize: 20
  }
});

export default Header;

Header.defaultProps = {
  headerText: 'Albums'
};
