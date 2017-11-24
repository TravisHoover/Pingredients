import React, { Component } from 'react';
import { Text, View } from 'react-native';

class ShoppingList extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      ingredients: this.props.ingredientList,
    }
  }
  
  render() {
    return (
    <View>
      <Text>
        {props}
      </Text>
    </View>
    )
  }
}

const styles = {

};

export { ShoppingList };
