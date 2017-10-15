import React, { Component } from 'react';
import { TextInput } from 'react-native';
import Button from './Button';
import Card from './Card';
import CardSection from './CardSection';

class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <TextInput
            
            style={{height: 20, width: 100}}/>
        </CardSection>
        
        <CardSection>
        
        </CardSection>
        
        <CardSection>
          <Button>Log in</Button>
        </CardSection>
      </Card>
    )
  }
}

export default LoginForm;
