import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import RecipeDetail from './RecipeDetail';

class RecipeList extends Component {
  state = { recipes: [] };
  
  componentWillMount() {
    axios.get('')
    .then(response => this.setState({recipes: response.data}))
  }
  
  renderRecipes() {
    return this.state.recipes.map(recipe =>
      <RecipeDetail key={recipe.title} recipe={recipe}/>
    );
  }
  
  render() {
    return (
      <View>
        {this.renderRecipes()}
      </View>
    )
  }
}

export default RecipeList;
