import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  )
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2, // rounds the corners
    borderColor: '#ddd',
    borderBottomWidth: 0, // hides border at bottom
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2, //rounds the corners
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export default Card;