import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { Card, CardSection, Input, Button, Header, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser, loginUserFailed } from '../actions';

class LoginForm extends Component {
  onEmailChange = text => {
    this.props.emailChanged(text);
  };

  onPasswordChange = text => {
    this.props.passwordChanged(text);
  };

  onButtonPress = () => {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  };

  renderError = () => {
    if (this.props.error) {
      return (
        <View>
          <Text>{this.props.error}</Text>
        </View>
      );
    }
  };

  renderButton = () => {
    if (this.props.isLoading) {
      return <Spinner size='large' />;
    }
    return <Button onPress={this.onButtonPress}>Login</Button>;
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
        {this.renderError()}
        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    isLoading: state.auth.isLoading,
  };
};

export default connect(
  mapStateToProps,
  {
    emailChanged,
    passwordChanged,
    loginUser,
    loginUserFailed,
  },
)(LoginForm);
