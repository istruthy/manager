import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Header } from './common';
import { emailChanged, passwordChanged } from '../actions';

class LoginForm extends Component {
  onEmailChange = text => {
    this.props.emailChanged(text);
  };

  onPasswordChange = text => {
    this.props.passwordChanged(text);
  };
  render() {
    return (
      <Card>
        <Header headerText='my app' />
        <CardSection>
          <Input
            label='email'
            placeholder='email@gmail.com'
            onChangeText={this.onEmailChange}
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input
            label='password'
            secureTextEntry
            placeholder='password'
            onChangeText={this.onPasswordChange}
            value={this.props.password}
          />
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
    password: state.auth.password,
  };
};

export default connect(
  mapStateToProps,
  {
    emailChanged,
    passwordChanged,
  },
)(LoginForm);
