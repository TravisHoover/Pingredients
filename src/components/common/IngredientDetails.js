import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, CardSection } from '../common';
import {Button} from "./Button";
import {ShoppingList} from "../ShoppingList";

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
			rows.push(entry.amount, '    ', entry.name, '\n');
		});
		return (
			<Text>{rows}</Text>
		)
	}

	render() {
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
