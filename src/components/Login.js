import React, { Component } from 'react';
import { Linking } from 'react-native';
import { Button, Card, CardSection, Spinner } from './common';

class LoginForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email   : '',
      password : '',
      access_token : '',
      error    : '',
      loading  : false,
      login    : true,
    };
  }
  
  onButtonPress = () => {
    console.log('button pressed');
    Linking.openURL('https://api.pinterest.com/oauth/?scope=read_public&client_id=4911971725215810382&state=768uyFys%20response_type=code&redirect_uri=https://pingredients&response_type=token')
    Linking.addEventListener( 'url', handleUrl.bind(this))
    function handleUrl(event) {
      console.log('event: ', event);
      let accessToken = event.url.match(/\?(?:access_token)\=([\S\s]*?)\&/)[1];
      this.setState({access_token: accessToken})
    }
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
    console.log('state: ', this.state);
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
