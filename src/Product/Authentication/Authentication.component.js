// @flow
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { ActivityIndicator } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { LabelInput, MyButton, Screen } from '@my/components';

import * as actions from './Authentication.actions';
import {
  selectEmail,
  selectIsLoading,
  selectIsRemember,
  selectPassword
} from './Authentication.selectors';

import styles, { checkboxColor } from './Authentication.styles';


type AuthenticationProps = {
  email: string,
  isLoading: boolean,
  isRemember: boolean,
  password: string,

  changeEmail: () => void,
  changePassword: () => void,
  logIn: () => void,
  preAuthentication: () => void,
  signUp: () => void,
  toggleIsRemember: () => void
};

class Authentication extends Component<AuthenticationProps> {
  constructor(props: AuthenticationProps) {
    super(props);
    props.preAuthentication();
  }

  render() {
    const {
      changeEmail,
      changePassword,
      email,
      isLoading,
      isRemember,
      logIn,
      password,
      signUp,
      toggleIsRemember
    } = this.props;

    return (
      <Screen>
        { isLoading
          ? <ActivityIndicator size="large" />
          : (
            <Fragment>
              <LabelInput
                isError={ !email }
                keyboardType="email-address"
                placeholder="Электронная почта"
                value={ email }
                onChangeText={ changeEmail }
              />
              <LabelInput
                containerViewStyle={ styles.input }
                isError={ !password }
                placeholder="Пароль"
                secureTextEntry
                value={ password }
                onChangeText={ changePassword }
              />
              <MyButton
                containerViewStyle={ styles.button }
                title="Войти"
                onPress={ logIn }
              />
              <MyButton
                title="Зарегистрироваться"
                onPress={ signUp }
              />
              <CheckBox
                checked={ isRemember }
                checkedColor={ checkboxColor }
                containerStyle={ styles.checkBox }
                title="Запомнить меня"
                onPress={ toggleIsRemember }
              />
            </Fragment>
          ) }
      </Screen>
    );
  }
}

const mapStateToProps = state => ({
  email: selectEmail(state),
  isLoading: selectIsLoading(state),
  isRemember: selectIsRemember(state),
  password: selectPassword(state)
});

const mapDispatchToProps = {
  changeEmail: actions.changeEmail,
  preAuthentication: actions.preAuthentication,
  toggleIsRemember: actions.toggleIsRemember,
  changePassword: actions.changePassword,
  logIn: actions.logIn,
  signUp: actions.signUp
};

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
