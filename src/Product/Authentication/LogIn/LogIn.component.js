// @flow
import React, { Component, Fragment } from 'react';
import {
  TextInput,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { Button, Header } from '../../../Components';
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
  onSignUp: () => void
};

// TODO: add "remember me" checkbox.
// eslint-disable-next-line react/prefer-stateless-function
class LogIn extends Component<LogInProps> {
  render() {
    const {
      onChangeEmail,
      onChangePassword,
      onLogIn,
      onSignUp
    } = this.props;

    return (
      <Fragment>
        <Header title="Вход в приложение" />

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
            onPress={ onSignUp }
          />
        </View>
      </Fragment>
    );
  }
}

const mapDispatchToProps = {
  onChangeEmail: changeEmailValue,
  onChangePassword: changePasswordValue,
  onLogIn: logIn,
  onSignUp: signUp
};

export default connect(null, mapDispatchToProps)(LogIn);
