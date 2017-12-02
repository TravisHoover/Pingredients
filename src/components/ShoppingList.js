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

  combineIngredientList() {
	  let categories = [];
	  let compiledList = [];

  	this.props.ingredientList.map(list => {
  		list.map(subItems => {
  			let index = categories.findIndex(i => i.category === subItems.category);
			  if (index === -1) {
				  categories.push({category: subItems.category});
				  compiledList.push(subItems);
			  } else {
				  subItems.ingredients.map(ingredient => {
				  	compiledList[index].ingredients.push(ingredient);
				  })
			  }
		  });
	  });
	  return (
		  <IngredientDetails
			  addToList={this.addToList}
			  key={categories}
			  ingredients={compiledList}/>
	  )
  }
  
  render() {
    return (
	    <ScrollView>
		    {this.combineIngredientList()}
	    </ScrollView>
    );
  }
}

const styles = {

};

export { ShoppingList };
