import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import emailChanged from '../actions';
import { thisExpression } from '@babel/types';

class LoginForm extends Component {
  render() {
    onEmailChange = text => {
      this.props.emailChanged(text);
    };

    return (
      <Card>
        <CardSection>
          <Input
            label='email'
            placeholder='email@gmail.com'
            onChangeText={this.onEmailChange}
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input label='password' secureTextEntry placeholder='password' />
        </CardSection>
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
  };
};

export default connect(
  mapStateToProps,
  {
    emailChanged,
  },
)(LoginForm);
