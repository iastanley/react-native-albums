import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardSection = props => {
  return (
    <View style={styles.cardSectionStyle}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  cardSectionStyle: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    padding: 5,
    backgroundColor: '#fff',
    flexDirection: 'row', //remember column is default
    justifyContent: 'flex-start',
    position: 'relative'
  }
});

export default CardSection;