import React, { Component } from 'react';
import { ScrollView, AsyncStorage } from 'react-native';
import axios from 'axios';
import { Button, Spinner } from '../common';
import LoginForm from '../Login'

class Boards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: [],
      boardName: null,
      access_token: this.props.access_token,
    }
  }
  
  componentWillMount() {
    axios.get('https://api.pinterest.com/v1/me/boards/?access_token='
      + this.state.access_token + '&fields=id%2Cname%2Curl')
    .then(response => {
      this.setState({boards: response.data})})
  }
  
  onButtonPress(board){
    let boardForUrl = (board.url.match(/([^\/]*)\/*$/)[1]);
    this.props.getBoard(boardForUrl)
  }
  
  renderBoards() {
    return this.state.boards.data.map(board =>
        <Button
          onPress={this.onButtonPress.bind(this, board)}
          key={board.name}
          board={board}>
          {board.name}
          </Button>
    );
  }
  
  render() {
    if (this.state.boards.data && this.state.boards.data.length > 0) {
      return (
        <ScrollView>
          {this.renderBoards()}
        </ScrollView>
      )
    } else {
      return <LoginForm/>
    }
  }
}

export { Boards };
