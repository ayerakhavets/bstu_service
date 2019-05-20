// @flow
import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Icon, { type MaterialCommunityIconsGlyphs } from 'react-native-vector-icons/MaterialCommunityIcons';
import { HeaderRight, colors, styles } from '@my/components';

import { I18n } from '@my/framework';

import { Order } from './Order';
import { OrderList } from './OrderList';
import { Payment } from './Payment';
import { PaymentList } from './PaymentList';
import { StudentInfo } from './StudentInfo';

import {
  ORDER_LIST_ROUTE,
  ORDER_ROUTE,
  PAYMENT_LIST_ROUTE,
  PAYMENT_ROUTE,
  STUDENT_INFO_ROUTE,
  STUDENT_ROUTE
} from './Student.constants';

const ORDER_LIST_INDEX = 0;

const StudentTabs = createBottomTabNavigator({
  [ORDER_LIST_ROUTE]: OrderList,
  [PAYMENT_LIST_ROUTE]: PaymentList,
  [STUDENT_INFO_ROUTE]: StudentInfo
},
{
  navigationOptions: ({ navigation: { state } }) => {
    const { index } = state;
    const { routeName } = state.routes[index];

    let title: string;
    switch (routeName) {
    case ORDER_LIST_ROUTE:
      title = I18n.translate('student.routes.orderList'); break;
    case PAYMENT_LIST_ROUTE:
      title = I18n.translate('student.routes.paymentList'); break;
    case STUDENT_INFO_ROUTE:
      title = I18n.translate('student.routes.studentInfo'); break;
    default:
      title = '';
    }

    return { title };
  },
  defaultNavigationOptions: ({ navigation }) => ({
    // eslint-disable-next-line react/display-name, react/prop-types
    tabBarIcon: ({ focused }) => {
      let iconName: MaterialCommunityIconsGlyphs;
      switch (navigation.state.routeName) {
      case ORDER_LIST_ROUTE:
        iconName = 'file-multiple'; break;
      case PAYMENT_LIST_ROUTE:
        iconName = 'view-list'; break;
      case STUDENT_INFO_ROUTE:
        iconName = 'account'; break;
      default:
        iconName = 'blank';
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

export default createStackNavigator({
  [STUDENT_ROUTE]: {
    screen: StudentTabs,
    navigationOptions: ({ navigation: { state } }) => {
      const params = state.routes[ORDER_LIST_INDEX].params || {};
      return {
        headerRight: <HeaderRight iconName="exit-to-app" onIconPress={ params.onLogOut } />
      };
    }
  },
  [PAYMENT_ROUTE]: {
    screen: Payment,
    navigationOptions: {
      title: I18n.translate('student.routes.payment')
    }
  },
  [ORDER_ROUTE]: {
    screen: Order,
    navigationOptions: {
      title: I18n.translate('student.routes.order')
    }
  }
},
{
  defaultNavigationOptions: {
    headerTintColor: colors.white,
    headerStyle: {
      backgroundColor: colors.greenLight
    }
  },
  mode: 'modal'
});
