// @flow
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { I18n } from '@my/framework';

import { ActivityIndicator } from 'react-native';
import { Input, CheckBox } from 'react-native-elements';
import { MyButton, Screen } from '@my/components';

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
              <Input
                value={ email }
                keyboardType="email-address"
                onChangeText={ changeEmail }
                placeholder={ I18n.translate('auth.email') }
                errorStyle={ styles.errorStyle }
                errorMessage={ !email && I18n.translate('components.field') }
              />
              <Input
                containerStyle={ styles.input }
                value={ password }
                onChangeText={ changePassword }
                secureTextEntry
                placeholder={ I18n.translate('auth.password') }
                errorStyle={ styles.errorStyle }
                errorMessage={ !password && I18n.translate('components.field') }
              />
              <MyButton
                containerViewStyle={ styles.button }
                title={ I18n.translate('auth.logIn') }
                onPress={ logIn }
              />
              <MyButton
                title={ I18n.translate('auth.signUp') }
                onPress={ signUp }
              />
              <CheckBox
                checked={ isRemember }
                checkedColor={ checkboxColor }
                containerStyle={ styles.checkBox }
                title={ I18n.translate('auth.remember') }
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