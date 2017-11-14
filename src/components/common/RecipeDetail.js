import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import { Card, CardSection, Button } from '../common';

const RecipeDetail = (props) => {
  return (
    <Card>
      
      <CardSection>
        <View style={styles.recipeContainerStyle}>
          <Image style={styles.thumbnailStyle}
                 source={{uri: props.recipe.image.original.url}} />
        </View>
        <View style={styles.headerContentStyle}>
          <Text style={styles.headerTextStyle}>{props.recipe.metadata.link.title}</Text>
          <Text>{props.recipe.metadata.link.description}</Text>
        </View>
      </CardSection>
      
      <CardSection>
        <Image style={styles.imageStyle}
               source={{uri: props.recipe.image.original.url}}/>
      </CardSection>
      
      <CardSection>
        <Button onPress={this.onButtonPress.bind(this)}>
          Add to list
        </Button>
      </CardSection>
    </Card>
  )
};

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