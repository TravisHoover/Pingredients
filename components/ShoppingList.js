import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { IngredientDetails } from "./common";

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

  	this.state.ingredients.map(list => {
  		list.map(subItems => {
  			let index = categories.findIndex(i => i.category === subItems.category);
			  if (index === -1) {
				  categories.push({category: subItems.category});
				  compiledList.push(subItems);
			  } else {
			  	  subItems.ingredients.map(e => {
			  	  	compiledList[index].ingredients.push(e);
				    });
			  }
		  });
	  });

	  return compiledList.map(section =>
		  <ScrollView>
			  <Text style={{color: '#C92228', fontWeight: 'bold'}}> {section.category} </Text>
			  <IngredientDetails
				  addToList={this.addToList}
				  key={section.category}
				  ingredients={section.ingredients}/>
		  </ScrollView>
	  );

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
