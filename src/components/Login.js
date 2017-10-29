import React, { Component } from 'react';
import axios from 'axios';
import { Linking, AsyncStorage, ScrollView, View } from 'react-native';
import { Button, Card, CardSection, Spinner, RecipeList } from './common';

class LoginForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      access_token: null,
      username: null,
      loading: false,
      login: false,
    };
  }
  
  componentWillMount() {
    try {
      AsyncStorage.getItem('access_token')
      .then((key) => {
        this.setState({
          access_token: key,
          login: true,
        })
      })
    } catch (error) {
      console.error(error);
    }
  }
  
  onButtonPress = () => {
    Linking.openURL('https://api.pinterest.com/oauth/?scope=read_public&client_id=4911971725215810382&state=768uyFys%20response_type=code&redirect_uri=https://pingredients&response_type=token')
    Linking.addEventListener('url', handleUrl.bind(this))
    
    function handleUrl (event) {
      try {
        let accessToken = event.url.match(/\?(?:access_token)\=([\S\s]*?)\&/)[1];
        AsyncStorage.setItem('access_token', accessToken)
        this.setState({access_token: accessToken}, () => {
          axios.get('https://api.pinterest.com/v1/me/?access_token='
            + this.state.access_token
            + '&fields=first_name%2Cid%2Clast_name%2Curl%2Cusername')
          .then(response => {
            this.setState({username: response.data.data.username, login: true})
          })
        })
      } catch (error) {
        console.error('permission denied');
      }
    }
  }
  
  logout() {
    AsyncStorage.removeItem('access_token')
    .then(() => {
      this.setState({access_token: null, login: false})
    })
  }
  
  renderButton () {
    if (this.state.loading) {
      return <Spinner size={'small'}/>
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log in
      </Button>
    );
  }
  
  render () {
    if (this.state.login && this.state.access_token && this.state.username) {
      return (
        <View>
        <ScrollView>
          <RecipeList access_token={this.state.access_token} username={this.state.username}/>
          <Button onPress={this.logout.bind(this)}>
            Logout
          </Button>
        </ScrollView>
        </View>
      )
    } else {
      return (
        <Card>
          <CardSection>
            {this.renderButton()}
          </CardSection>
        </Card>
      )
    }
  }
}

export default LoginForm;
