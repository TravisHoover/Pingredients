import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';
import { RecipeDetail, Spinner } from '../common';

class RecipeList extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      recipes: [],
      access_token: this.props.access_token,
    }
  }
  
  componentWillMount() {
    axios.get('https://api.pinterest.com/v1/boards/traviskhoover/recipes/pins/?access_token='
      + this.state.access_token
      + '&fields=id%2Clink%2Cnote%2Curl%2Cmetadata%2Cimage')
    .then(response => this.setState({recipes: response.data}))
  }
  
  renderRecipes() {
    return this.state.recipes.data.map(recipe =>
      <RecipeDetail key={recipe.metadata.article.name} recipe={recipe}/>
    );
  }
  
  render() {
    if (this.state.recipes.data && this.state.recipes.data.length > 0) {
      return (
        <ScrollView>
          {this.renderRecipes()}
        </ScrollView>
      )
    } else {
      return <Spinner/>
    }
  }
}

export { RecipeList };
