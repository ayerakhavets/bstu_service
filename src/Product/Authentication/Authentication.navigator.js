// @flow
import { createStackNavigator } from 'react-navigation';
import { I18n } from '@my/framework';
import { colors } from '@my/components';
import { AUTHENTICATION } from './Authentication.constants';
import Authentication from './Authentication.component';


export default createStackNavigator({
  [AUTHENTICATION]: {
    screen: Authentication,
    navigationOptions: {
      title: I18n.translate('auth.title'),
      headerStyle: {
        backgroundColor: colors.greenLight
      },
      headerTintColor: colors.white
    }
  }
});
