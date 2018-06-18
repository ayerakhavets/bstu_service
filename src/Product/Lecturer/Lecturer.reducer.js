// @flow
import { combineReducers } from 'redux';
import { subjectListReducer, type SubjectListState } from './SubjectList';
import { orderListReducer, type OrderListState } from './OrderList';
import { orderReducer, type OrderState } from './Order';
import { studentListReducer, type StudentListState } from './StudentList';

export type StudentState = {
  subjectList: SubjectListState,
  order: OrderState,
  orderList: OrderListState,
  studentList: StudentListState
}

export default combineReducers({
  subjectList: subjectListReducer,
  order: orderReducer,
  orderList: orderListReducer,
  studentList: studentListReducer
});
