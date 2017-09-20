import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import RecipeList from './src/components/RecipeList'

const App = () => (
  <View>
    <Header headerText={'Pingredients'} />
    <RecipeList/>
  </View>
);


AppRegistry.registerComponent('Pingredients', () => App);
