import React from 'react';
import { Text, TouchableOpacity, Platform, StyleSheet } from 'react-native';

const Button = ({onPress, btnColor, children}) => {
  const { buttonStyle, buttonTextStyle } = styles

  const buttonStyles = [buttonStyle];
  const buttonTextStyles = [buttonTextStyle];

  if (btnColor) {
    const customColorStyle = Platform.OS === 'ios' ?
      {
        borderColor: btnColor
      } : {
        backgroundColor: btnColor
      }
    buttonStyles.push(customColorStyle);
    if (Platform.OS === 'ios') {
      const customTextColor = Platform.OS === 'ios' && { color: btnColor };
      buttonTextStyles.push(customTextColor);
    }
  }

  return (
    <TouchableOpacity
      onPress={onPress} 
      style={buttonStyles}>
      <Text style={buttonTextStyles}>{children}</Text>
    </TouchableOpacity>
  );
}
const defaultColor = "#00f" // how do i make this configurable with props?!
const styles = StyleSheet.create({
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    ...Platform.select({
      ios: {
        backgroundColor: '#fff',
        borderColor: defaultColor,
        borderRadius: 5,
        borderWidth: 1,
        marginLeft: 5,
        marginRight: 5
      },
      android: {
        backgroundColor: defaultColor,
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
        color: defaultColor
      },
      android: {
        color: '#fff'
      }
    })
  }
});

export default Button;