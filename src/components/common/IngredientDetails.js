import React, { Component } from 'react';
import { Text, View, Image, Linking } from 'react-native';
import { Card, CardSection, Button } from '../common';

class IngredientDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ingredients: this.props.ingredients
		}
	}

	renderList() {
		let rows = [];
		this.props.ingredients.map((entry) => {
			rows.push('\n', entry.category, '\n\n');
			entry.ingredients.map((list) => {
				rows.push(list.amount, '    ', list.name, '\n');
			});
			}
		);
		return (
			<Text>{rows}</Text>
		)
	}

	render() {
		console.log('this.props in ingredientDetails: ', this.props);
		return (
			<Card>
				<CardSection>
					<View style={styles.headerContentStyle}>
						{this.renderList()}
					</View>
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

export { IngredientDetails };
