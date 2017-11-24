import React, { Component } from 'react';
import { Text, View, Image, Linking } from 'react-native';
import { Card, CardSection, Button } from '../common';

class RecipeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: [],
      boardName: null,
      recipe: this.props.recipe,
    }
  }
  
  onButtonPress = () => {
    this.props.addToList(this.props.recipe.metadata.recipe.ingredients);
  }
  
  render() {
    return (
      <Card>
        <CardSection>
          <View style={styles.recipeContainerStyle}>
            <Image style={styles.thumbnailStyle}
                   source={{uri: this.props.recipe.image.original.url}}/>
          </View>
          <View style={styles.headerContentStyle}>
            <Text style={styles.headerTextStyle}>{this.props.recipe.metadata.link.title}</Text>
            <Text>{this.props.recipe.metadata.link.description}</Text>
          </View>
        </CardSection>
      
        <CardSection>
          <Image style={styles.imageStyle}
                 source={{uri: this.props.recipe.image.original.url}}/>
        </CardSection>
      
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Add to list
          </Button>
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 20
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  recipeContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle : {
    height: 300,
    flex: 1,
    width: null
  }
};

export { RecipeDetail };