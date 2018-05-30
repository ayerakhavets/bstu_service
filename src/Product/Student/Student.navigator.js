// @flow
import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { PaymentList } from './PaymentList';
import { StudentInfo } from './StudentInfo';
import { colors, styles } from '../../Components';
import { Payment } from './Payment';

// TODO: add internationalization.
export const STUDENT = 'Пользователь';
export const PAYMENT = 'Чек';
export const PAYMENT_LIST = 'Платежи';

const PaymentStack = createStackNavigator({
  [PAYMENT_LIST]: PaymentList,
  [PAYMENT]: Payment
},
{
  navigationOptions: ({ navigation }) => ({
    title: navigation.state.routeName,
    headerTintColor: colors.white,
    headerStyle: {
      backgroundColor: colors.greenLight
    }
  })
});

const StudentTabs = createBottomTabNavigator({
  [PAYMENT_LIST]: PaymentStack,
  [STUDENT]: StudentInfo
},
{
  initialRouteName: STUDENT,
  tabBarOptions: {
    activeTintColor: colors.greenDark
  },
  navigationOptions: ({ navigation }) => ({
    // eslint-disable-next-line react/display-name, react/prop-types
    tabBarIcon: ({ focused }) => {
      let iconName;
      switch (navigation.state.routeName) {
      case PAYMENT_LIST:
        iconName = `ios-list-box${focused ? '' : '-outline'}`; break;
      case STUDENT:
        iconName = `ios-contact${focused ? '' : '-outline'}`; break;
      default: break;
      }
      return (<Icon
        color={ focused ? colors.greenDark : colors.grey }
        name={ iconName }
        size={ styles.tabIconSize }
        type="ionicon"
      />);
    }
  })
});

export default StudentTabs;

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'DOUBLE tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu'
// });

// checkList: {
//   screen: CheckList,
//   navigationOptions: () => ({
//     tabBarIcon: ({ tintColor }) => (
//       <Icon
//         name="bookmark"
//         color={ tintColor }
//         size={ 24 }
//       />
//     )
//   })
// },
