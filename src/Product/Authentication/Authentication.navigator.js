// @flow
import { createStackNavigator } from 'react-navigation';
import { colors } from '@my/components';
import Authentication from './Authentication.component';

export const APP_ENTRY = 'Вход в приложение';

export default createStackNavigator({
  [APP_ENTRY]: {
    screen: Authentication,
    navigationOptions: {
      title: APP_ENTRY,
      headerStyle: {
        backgroundColor: colors.greenLight
      },
      headerTintColor: colors.white
    }
  }
});
