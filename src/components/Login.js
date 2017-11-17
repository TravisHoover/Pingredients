import React, { Component } from 'react';
import axios from 'axios';
import { Linking, AsyncStorage, ScrollView, View, Image } from 'react-native';
import { Button, Card, CardSection, Spinner, RecipeList } from './common';
import { Boards } from './common/Boards'
import { Header } from './common/Header'

class LoginForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      access_token: null,
      username: null,
      board: null,
      loading: false,
    };
  }
  
  componentWillMount() {
    try {
      Promise.all([
        AsyncStorage.getItem('access_token'),
        AsyncStorage.getItem('username'),
        AsyncStorage.getItem('board'),
      ]).then(results => {
        const access_token = results[0] || null;
        const username = results[1] || null;
        const board = results[2] || null;
        this.setState({ access_token, username, board });
      });
    } catch (error) {
      console.error(error);
    }
  }
  
  getBoard(event) {
    AsyncStorage.setItem('board', event);
    this.setState({ board: event })
  }
  
  onButtonPress = () => {
    
    Linking.openURL('https://api.pinterest.com/oauth/?scope=read_public%2Cwrite_public&client_id=4911971725215810382&state=768uyFys%20response_type=code&redirect_uri=https://pingredients&response_type=token')
    Linking.addEventListener('url', handleUrl.bind(this))
    
    function handleUrl (event) {
      try {
        let accessToken = event.url.match(/\?(?:access_token)\=([\S\s]*?)\&/)[1];
        AsyncStorage.setItem('access_token', accessToken)
        axios.get('https://api.pinterest.com/v1/me/?access_token='
          + accessToken
          + '&fields=username')
        .then(response => {
          this.setState({access_token: accessToken, username: response.data.data.username})
          AsyncStorage.setItem('username', response.data.data.username)
        })
      } catch (error) {
        console.error('permission denied');
      }
    }
  }
  
  logout() {
    AsyncStorage.removeItem('access_token')
    .then(() => {
      this.setState({access_token: null, username: null, board: null})
      AsyncStorage.removeItem('access_token')
      AsyncStorage.removeItem('username')
      AsyncStorage.removeItem('board')
    })
  }
  
  renderButton () {
    if (this.state.loading) {
      return <Spinner size={'large'}/>
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log in
      </Button>
    );
  }
  
  render () {
    if (this.state.access_token && this.state.username && this.state.board !== null) {
      return (
        <View>
        <ScrollView>
          <Header headerText='Pingredients'/>
          <RecipeList access_token={this.state.access_token} username={this.state.username} board={this.state.board}/>
          <Button onPress={this.logout.bind(this)}>
            Logout
          </Button>
        </ScrollView>
        </View>
      )
    } else if (this.state.access_token && this.state.username && this.state.board === null) {
      return (
        <Boards getBoard={this.getBoard.bind(this)} access_token={this.state.access_token}/>
      )
    } else {
      return (
        <Card>
          <Image
            style={{justifyContent: 'center', alignItems: 'center', width: 400, height: 400}}
            source={require('../../android/app/src/main/ic_launcher-web.png')}/>
          <CardSection>
            {this.renderButton()}
          </CardSection>
        </Card>
      )
    }
  }
}

export default LoginForm;
