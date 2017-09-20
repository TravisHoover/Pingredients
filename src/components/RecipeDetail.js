import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const RecipeDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <View style={styles.recipeContainerStyle}>
          <Image style={styles.thumbnailStyle}
                 source={{uri: props.recipe.thumbnail_image}} />
        </View>
        <View style={styles.headerContentStyle}>
          <Text style={styles.headerTextStyle}>{props.recipe.title}</Text>
          <Text>{props.recipe.description}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={styles.imageStyle}
               source={{uri: props.recipe.image}}/>
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
    fontSize: 18
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

export default RecipeDetail;