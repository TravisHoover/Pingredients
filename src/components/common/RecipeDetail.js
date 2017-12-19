import React, { Component } from 'react';
import { Image, TouchableHighlight, Linking } from 'react-native';
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
  };
  
  render() {
    if (this.props.recipe.metadata.recipe) {
	    return (
		    <Card>

			    <TouchableHighlight
				    onPress={() => Linking.openURL(this.props.recipe.url)}>
			        <Image style={styles.imageStyle}
				           source={{uri: this.props.recipe.image.original.url}}/>
			    </TouchableHighlight>

			    <CardSection>
				    <Button onPress={this.onButtonPress.bind(this)}>
					    Add to list
				    </Button>
			    </CardSection>
		    </Card>
	    )
    } else {
	    return (
		    <Card>

			    <TouchableHighlight
			      onPress={() => Linking.openURL(this.props.recipe.url)}>
				      <Image style={styles.imageStyle}
				           source={{uri: this.props.recipe.image.original.url}}/>
			    </TouchableHighlight>

			    <CardSection>
				    <Button>
					    No ingredients in recipe
				    </Button>
			    </CardSection>
		    </Card>
	    )
    }
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