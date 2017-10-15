import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import RecipeList from './src/components/RecipeList';
import Login from './src/components/Login';

const App = () => (
  <View style={{flex: 1}}>
    <Header headerText={'Pingredients'} />
    <Login/>
  </View>
);


AppRegistry.registerComponent('Pingredients', () => App);
