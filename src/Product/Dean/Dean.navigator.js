// @flow
import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors, styles } from '@my/components';
import { CourseList } from './CourseList';
import { Order } from './Order';
import { OrderList } from './OrderList';
import { StudentList } from './StudentList';
import { PaymentList } from './PaymentList';
import { Payment } from './Payment';
import { Charts } from './Charts';

// FIXME: path names
export const ORDER = 'ORDER.Dean';
export const ORDER_LIST = 'ORDER_LIST.Dean';
export const STUDENT_LIST = 'Students.Dean';
export const STUDENT_LISTS_TABS = 'STUDENT_LISTS_TABS.Dean';
export const COURSE_LIST = 'Courses.Dean';
export const PAYMENT_LIST = 'Payments.Dean';
export const PAYMENT = 'Payment.Dean';
export const CHARTS = 'Charts.Dean';

const StudentListsTabs = createBottomTabNavigator({
  [ORDER_LIST]: OrderList,
  [PAYMENT_LIST]: PaymentList
},
{
  initialRouteName: PAYMENT_LIST,
  navigationOptions: ({ navigation }) => ({
    // eslint-disable-next-line react/display-name, react/prop-types
    tabBarIcon: ({ focused }) => {
      let iconName;
      switch (navigation.state.routeName) {
      case ORDER_LIST:
        iconName = 'file-multiple'; break;
      case PAYMENT_LIST:
        iconName = 'view-list'; break;
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

const DeanStack = createStackNavigator({
  [COURSE_LIST]: {
    screen: CourseList,
    navigationOptions: {
      title: 'Курсы'
    }
  },
  [STUDENT_LIST]: {
    screen: StudentList,
    navigationOptions: {
      title: 'Студенты'
    }
  },
  [STUDENT_LISTS_TABS]: {
    screen: StudentListsTabs,
    navigationOptions: ({ navigation }) => {
      const params = navigation || {};
      console.log('params student navigator: ', params);
      const { index } = navigation.state;
      let titleName = '';
      if (navigation.state.routes[index].routeName === 'ORDER_LIST.Dean') {
        titleName = 'Направления';
      } else {
        titleName = 'Платежи';
      }
      return {
        title: titleName
      };
    }
  },
  [PAYMENT]: {
    screen: Payment,
    navigationOptions: {
      title: 'Платёж'
    }
  },
  [ORDER]: {
    screen: Order,
    navigationOptions: {
      title: 'Направление'
    }
  },
  [CHARTS]: {
    screen: Charts,
    navigationOptions: {
      title: 'Учёт'
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

export default DeanStack;
