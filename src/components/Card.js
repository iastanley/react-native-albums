import React from 'react';
import { View, Platform } from 'react-native';

const Card = props => {
  return (
    <View style={styles.cardStyle}>
      {props.children}
    </View>
  );
}

const styles = {
  cardStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2
      },
      android: {
        elevation: 1
      }
    })

  }
}

export default Card;