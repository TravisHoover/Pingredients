import React, { Component } from 'react';
import { Text, View, Linking } from 'react-native'
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';
import OauthForm from './OauthForm';

class LoginForm extends Component {
  state = {  email   : '',
    password : '',
    error    : '',
    loading  : false,
    login    : true,
  };
  
  onButtonPress() {
    console.log('button pressed')
    Linking.openURL('https://api.pinterest.com/oauth/?scope=read_public&client_id=4911971725215810382&state=768uyFys%20response_type=code&redirect_uri=https://pingredients&response_type=token')
    Linking.addEventListener( 'url', handleUrl)
    function handleUrl( event ) {
      console.log('this handle url1 was called');
      console.log('event: ', event);
    }
  }
  
  componentWillMount() {
    console.log('componentWillMount called');
    Linking.getInitialURL()
    .then((ev) => {
      if (ev) {
        console.log('ev: ', ev);
        this.handleUrl(ev);
      }
    }).catch(err => {
      console.log('An error occurred', err);
    });
    Linking.addEventListener( 'url', this.handleUrl)
  }
  
  handleUrl( event ) {
    console.log('handleUrl2 called');
    console.log('event: ', event);
  }
  
  renderButton() {
    if(this.state.loading) {
      return <Spinner size={'small'}/>
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log in
      </Button>
    );
  }
  
  render() {
    return (
      <Card>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

export default LoginForm;
