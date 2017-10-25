import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import { Card, CardSection, Button } from '../common'

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
      
      <CardSection>
        <Button onPress={() => Linking.openURL(props.recipe.url)}>
          See on Pinterest!
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