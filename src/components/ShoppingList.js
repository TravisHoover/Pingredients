import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import {IngredientDetails} from "./common";

class ShoppingList extends Component {
  
  constructor(props) {
	  super(props);
	  this.state = {
		  ingredients: this.props.ingredientList,
	  };
  }

  renderIngredients() {
    return this.props.ingredientList.map(ingredients =>
      <IngredientDetails
        addToList={this.addToList}
        key={ingredients.category}
        ingredients={ingredients}/>
    );
  }
  
  render() {
    return (
	    <ScrollView>
		    {this.renderIngredients()}
	    </ScrollView>
    );
  }
}

const styles = {

};

export { ShoppingList };
