// @flow
import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { Button } from '../../../Components';
import { logIn, signUp } from '../Authentication.actions';
// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'DOUBLE tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu'
// });

type Props = {
  navigation: any,
  handleLogIn: ()=> void,
  handleSignIn: ()=> void
};

class LogIn extends Component<Props> {
  mock = () => {
    this.props.navigation.navigate('Dean');
  }

  render() {
    return (
      <View style={ styles.container }>
        <TextInput
          placeholder="Электронная почта"
          style={ styles.input }
        />
        <TextInput
          placeholder="Пароль"
          style={ styles.input }
        />
        <Button
          title="Войти"
          onPress={ this.props.handleLogIn }
        />
        <Button
          title="Зарегистрироваться"
          onPress={ this.props.handleSignIn }
        />
      </View>
    );
  }
}

const white = '#F5FCFF';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: white,
    padding: 10
  },
  input: {
    width: '100%'
  }
});

// const mapStateToProps = state => ({

// });

const mapDispatchToProps = {
  handleSignIn: signUp,
  handleLogIn: logIn
};

export default connect(null, mapDispatchToProps)(LogIn);
