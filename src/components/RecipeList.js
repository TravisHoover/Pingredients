import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import RecipeDetail from './RecipeDetail';

class RecipeList extends Component {
  state = { albums: [] };
  
  componentWillMount() {
    axios.get('')
    .then(response => this.setState({albums: response.data}))
  }
  
  renderAlbums() {
    return this.state.albums.map(album =>
      <RecipeDetail key={album.title} album={album}/>
    );
  }
  
  render() {
    return (
      <View>
        {this.renderAlbums()}
      </View>
    )
  }
}

export default RecipeList;
