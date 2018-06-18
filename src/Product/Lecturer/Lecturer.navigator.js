// @flow
import { createStackNavigator } from 'react-navigation';
import { SubjectList } from './SubjectList';
import { StudentList } from './StudentList';
import { OrderList } from './OrderList';
import { Order } from './Order';
import { colors } from '../../Components';

export const STUDENT_LIST = 'Students.Lecturer';
export const SUBJECT_LIST = 'Subjects.Lecturer';
export const ORDER_LIST = 'Orders.Lecturer';
export const ORDER = 'Order.Lecturer';

const LecturerStack = createStackNavigator({
  [SUBJECT_LIST]: {
    screen: SubjectList,
    navigationOptions: {
      title: 'Предметы'
    }
  },
  [STUDENT_LIST]: {
    screen: StudentList,
    navigationOptions: {
      title: 'Студенты'
    }
  },
  [ORDER_LIST]: {
    screen: OrderList,
    navigationOptions: {
      title: 'Направления'
    }
  },
  [ORDER]: {
    screen: Order,
    navigationOptions: {
      title: 'Направление'
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

export default LecturerStack;
