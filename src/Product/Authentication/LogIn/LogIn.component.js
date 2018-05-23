// @flow
import React, { Component } from 'react';
import {
  TextInput,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { Button } from '../../../Components';
import {
  changeEmailValue,
  changePasswordValue,
  logIn,
  signUp
} from './LogIn.actions';
import styles from './LogIn.styles';

type LogInProps = {
  onChangeEmail: () => void,
  onChangePassword: () => void,
  onLogIn: () => void,
  onSignIn: () => void
};

// eslint-disable-next-line react/prefer-stateless-function
class LogIn extends Component<LogInProps> {
  render() {
    const {
      onChangeEmail,
      onLogIn,
      onChangePassword,
      onSignIn
    } = this.props;

    return (
      <View style={ styles.container }>
        <TextInput
          keyboardType="email-address"
          placeholder="Электронная почта"
          style={ styles.input }
          onChangeText={ onChangeEmail }
        />
        <TextInput
          placeholder="Пароль"
          secureTextEntry
          style={ styles.input }
          onChangeText={ onChangePassword }
        />
        <Button
          title="Войти"
          onPress={ onLogIn }
        />
        <Button
          title="Зарегистрироваться"
          onPress={ onSignIn }
        />
      </View>
    );
  }
}

const mapDispatchToProps = {
  onChangeEmail: changeEmailValue,
  onChangePassword: changePasswordValue,
  onSignIn: signUp,
  onLogIn: logIn
};

export default connect(null, mapDispatchToProps)(LogIn);
