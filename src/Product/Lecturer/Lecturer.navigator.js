// @flow
import { createStackNavigator } from 'react-navigation';
import { colors } from '../../Components';
import { Order } from './Order';
import { OrderList } from './OrderList';
import { StudentList } from './StudentList';
import { SubjectList } from './SubjectList';

export const ORDER = 'ORDER.Lecturer';
export const ORDER_LIST = 'ORDER_LIST.Lecturer';
export const STUDENT_LIST = 'STUDENT_LIST.Lecturer';
export const SUBJECT_LIST = 'SUBJECT_LIST.Lecturer';

export default createStackNavigator({
  [ORDER]: {
    screen: Order,
    navigationOptions: {
      title: 'Направление'
    }
  },
  [ORDER_LIST]: {
    screen: OrderList,
    navigationOptions: {
      title: 'Направления'
    }
  },
  [STUDENT_LIST]: {
    screen: StudentList,
    navigationOptions: {
      title: 'Студенты'
    }
  },
  [SUBJECT_LIST]: {
    screen: SubjectList,
    navigationOptions: {
      title: 'Предметы'
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
