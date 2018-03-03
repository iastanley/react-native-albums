import React from 'react';
import { Text, TouchableOpacity, Platform } from 'react-native';

const Button = ({onPress, btnText}) => {
  const { buttonStyle, buttonTextStyle } = styles

  return (
    <TouchableOpacity
      onPress={onPress} 
      style={buttonStyle}>
      <Text style={buttonTextStyle}>{btnText}</Text>
    </TouchableOpacity>
  );
}
const btnColor = "#007aff" // how do i make this configurable with props?!
const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    ...Platform.select({
      ios: {
        backgroundColor: '#fff',
        borderColor: btnColor,
        borderRadius: 5,
        borderWidth: 1,
        marginLeft: 5,
        marginRight: 5
      },
      android: {
        backgroundColor: btnColor,
      }
    })
  },
  buttonTextStyle: {
    alignSelf: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 16,
    fontWeight: '600',
    ...Platform.select({
      ios: {
        color: btnColor
      },
      android: {
        color: '#fff'
      }
    })
  }
}

export default Button;