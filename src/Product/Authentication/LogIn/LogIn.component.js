// @flow
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { CheckBox } from 'react-native-elements';
import { MyButton, Header, LabelInput, Screen } from '../../../Components';
import {
  changeEmailValue,
  changePasswordValue,
  logIn,
  signUp,
  toggleIsRemember
} from './LogIn.actions';
import styles from './LogIn.styles';
import {
  selectEmail,
  selectIsRemember,
  selectPassword
} from './LogIn.selectors';

type LogInProps = {
  email: string,
  isRemember: boolean,
  password: string,
  onChangeEmail: () => void,
  onChangePassword: () => void,
  onLogIn: () => void,
  onSignUp: () => void,
  onPressIsRemember: () => void
};

// TODO: add "remember me" checkbox.
// eslint-disable-next-line react/prefer-stateless-function
class LogIn extends Component<LogInProps> {
  render() {
    const {
      email,
      isRemember,
      password,
      onChangeEmail,
      onChangePassword,
      onLogIn,
      onSignUp,
      onPressIsRemember
    } = this.props;

    return (
      <Fragment>
        <Header title="Вход в приложение" />

        <Screen style={ styles.container }>
          <LabelInput
            keyboardType="email-address"
            placeholder="Электронная почта"
            onChangeText={ onChangeEmail }
            errorMessage={ email ? '' : 'Обязательное поле' }
          />
          <LabelInput
            containerViewStyle={ styles.input }
            placeholder="Пароль"
            secureTextEntry
            errorMessage={ password ? '' : 'Обязательное поле' }
            onChangeText={ onChangePassword }
          />
          <MyButton
            title="Войти"
            containerViewStyle={ styles.button }
            onPress={ onLogIn }
          />
          <MyButton
            title="Зарегистрироваться"
            onPress={ onSignUp }
          />
          <CheckBox
            containerStyle={ styles.checkBox }
            title="Запомнить меня"
            checked={ isRemember }
            onPress={ onPressIsRemember }
          />
        </Screen>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  email: selectEmail(state),
  isRemember: selectIsRemember(state),
  password: selectPassword(state)
});

const mapDispatchToProps = {
  onChangeEmail: changeEmailValue,
  onPressIsRemember: toggleIsRemember,
  onChangePassword: changePasswordValue,
  onLogIn: logIn,
  onSignUp: signUp
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
