import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children } ) => {
  return(
    <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
      <Text style={styles.textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  )
};

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#C92228',
    borderWidth: 5,
    borderRadius: 1,
    borderColor: '#C92228',
    marginLeft: 5,
    marginRight: 5
  },
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
};

export default Button;