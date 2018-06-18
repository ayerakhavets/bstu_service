// @flow
import { combineReducers } from 'redux';
import { orderReducer, type OrderState } from './Order';
import { orderListReducer, type OrderListState } from './OrderList';
import { studentListReducer, type StudentListState } from './StudentList';
import { subjectListReducer, type SubjectListState } from './SubjectList';

export type LecturerState = {
  order: OrderState,
  orderList: OrderListState,
  studentList: StudentListState,
  subjectList: SubjectListState
}

export default combineReducers({
  order: orderReducer,
  orderList: orderListReducer,
  studentList: studentListReducer,
  subjectList: subjectListReducer
});
