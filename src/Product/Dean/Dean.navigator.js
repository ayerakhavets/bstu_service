// @flow
import { createStackNavigator } from 'react-navigation';
import { CourseList } from './CourseList';
import { StudentList } from './StudentList';
import { PaymentList } from './PaymentList';
import { Payment } from './Payment';
import { colors } from '../../Components';

// FIXME:
export const STUDENT_LIST = 'Студенты@Dean';
export const COURSE_LIST = 'Курсы@Dean';
export const PAYMENT_LIST = 'Платежи@Dean';
export const PAYMENT = 'Платёж@Dean';

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
