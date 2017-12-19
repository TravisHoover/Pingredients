import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import axios from 'axios';
import { RecipeDetail, Spinner, Button } from '../common';
import { ShoppingList } from '../ShoppingList'

class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.addToList = this.addToList.bind(this);
    this.state = {
      recipes: [],
      username: this.props.username,
      board: this.props.board,
      access_token: this.props.access_token,
      ingredientList: [],
      showList: false,
    }
  }
  
  componentWillMount() {
    axios.get('https://api.pinterest.com/v1/boards/'
      + this.state.username
      + '/' + this.state.board + '/pins/?access_token='
      + this.state.access_token
      + '&fields=id%2Clink%2Cnote%2Curl%2Cmetadata%2Cimage')
    .then(response => this.setState({recipes: response.data}))
  }
  
  renderRecipes() {
    return !this.state.showList
      ? this.state.recipes.data.map(recipe =>
        <RecipeDetail
          addToList={this.addToList}
          key={recipe.note}
          recipe={recipe}/>
        )
      : null;
  }
  
  showList() {
    if (this.state.showList) {
	    return (
		    <ShoppingList ingredientList={this.state.ingredientList}/>
	    )
    } else {
      return <Button onPress={this.onButtonPress.bind(this)}>
	      Show list
      </Button>;
    }
  }

  onButtonPress() {
    this.setState({showList: true})
  }
  
  addToList(event) {
      let oldStateArray = this.state.ingredientList.slice();
      oldStateArray.push(event);
      //AsyncStorage.setItem();
      this.setState({ingredientList: oldStateArray})
  }
  
  render() {
    if (this.state.recipes.data && this.state.recipes.data.length > 0 && this.state.ingredientList.length === 0) {
      return (
        <ScrollView>
          {this.renderRecipes()}
        </ScrollView>
      )
    }
    if (this.state.ingredientList.length > 0) {
      return (
        <ScrollView>
          {this.renderRecipes()}
          {this.showList()}
        </ScrollView>
      )
    } else {
      return <Spinner/>
    }
  }
}

export { RecipeList };
