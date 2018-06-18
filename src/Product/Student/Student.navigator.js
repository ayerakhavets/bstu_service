// @flow
import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Order } from './Order';
import { OrderList } from './OrderList';
import { PaymentList } from './PaymentList';
import { StudentInfo } from './StudentInfo';
import { colors, HeaderRight, styles } from '../../Components';
import { Payment } from './Payment';

export const ORDER = 'Направление';
export const ORDER_LIST = 'Направления';
export const PAYMENT = 'Платёж';
export const PAYMENT_LIST = 'Платежи';
export const STUDENT = 'Пользователь';
export const STUDENT_TABS = 'Студент';


const StudentTabs = createBottomTabNavigator({
  [ORDER_LIST]: OrderList,
  [PAYMENT_LIST]: PaymentList,
  [STUDENT]: StudentInfo
},
{
  initialRouteName: STUDENT,
  navigationOptions: ({ navigation }) => ({
    // eslint-disable-next-line react/display-name, react/prop-types
    tabBarIcon: ({ focused }) => {
      let iconName;
      switch (navigation.state.routeName) {
      case ORDER_LIST:
        iconName = 'file-multiple'; break;
      case PAYMENT_LIST:
        iconName = 'view-list'; break;
      case STUDENT:
        iconName = 'account'; break;
      default: break;
      }
      return (<Icon
        color={ focused ? colors.greenDark : colors.grey }
        name={ iconName }
        size={ styles.tabIconSize }
      />);
    }
  }),
  tabBarOptions: {
    showLabel: false
  }
});

const StudentStack = createStackNavigator({
  [STUDENT_TABS]: {
    screen: StudentTabs,
    navigationOptions: ({ navigation }) => {
      const params = navigation.state.routes[1].params || {};
      console.log('params student navigator: ', params);
      const { index } = navigation.state;
      return {
        headerRight: <HeaderRight iconName="exit-to-app" onIconPress={ params.onLogOut } />,
        title: navigation.state.routes[index].routeName
      };
    }
  },
  [PAYMENT]: {
    screen: Payment,
    navigationOptions: {
      title: PAYMENT
    }
  },
  [ORDER]: {
    screen: Order,
    navigationOptions: {
      title: ORDER
    }
  }
},
{
  navigationOptions: {
    headerTintColor: colors.white,
    headerStyle: {
      backgroundColor: colors.greenLight
    }
  }
});

export default StudentStack;

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'DOUBLE tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu'
// });
