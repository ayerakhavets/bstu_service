// @flow
import { createStackNavigator } from 'react-navigation';
import { CourseList } from './CourseList';
import { StudentList } from './StudentList';
import { PaymentList } from './PaymentList';
import { Payment } from './Payment';
import { colors } from '../../Components';
import { Charts } from './Charts';

// FIXME: path names
export const STUDENT_LIST = 'Students.Dean';
export const COURSE_LIST = 'Courses.Dean';
export const PAYMENT_LIST = 'Payments.Dean';
export const PAYMENT = 'Payment.Dean';
export const CHARTS = 'Charts.Dean';

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
  [PAYMENT_LIST]: {
    screen: PaymentList,
    navigationOptions: {
      title: 'Платежи'
    }
  },
  [PAYMENT]: {
    screen: Payment,
    navigationOptions: {
      title: 'Платёж'
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
