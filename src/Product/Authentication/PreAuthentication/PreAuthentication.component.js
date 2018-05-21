// @flow
import React from 'react';
import {
  ActivityIndicator,
  // AsyncStorage,
  StatusBar,
  StyleSheet,
  View
} from 'react-native';

type Props = {
  navigation: any
};

class PreAuthentication extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  bootstrapAsync = async () => {
    // const userToken = await AsyncStorage.getItem('userToken');
    console.log('hello from PRE');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    // this.props.navigation.navigate(userToken ? 'Dean' : 'Auth');
    this.props.navigation.navigate('Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={ styles.container }>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
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
    backgroundColor: white
  }
});

export default PreAuthentication;
