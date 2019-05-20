// @flow
import { combineReducers } from 'redux';
import { courseListReducer, type CourseListState } from './CourseList';
import { paymentListReducer, type PaymentListState } from './PaymentList';
import { orderListReducer, type OrderListState } from './OrderList';
import { orderReducer, type OrderState } from './Order';
import { paymentReducer, type PaymentState } from './Payment';
import { studentListReducer, type StudentListState } from './StudentList';

export type DeanState = {
  courseList: CourseListState,
  payment: PaymentState,
  order: OrderState,
  orderList: OrderListState,
  paymentList: PaymentListState,
  studentList: StudentListState
}

export default combineReducers({
  courseList: courseListReducer,
  order: orderReducer,
  payment: paymentReducer,
  orderList: orderListReducer,
  paymentList: paymentListReducer,
  studentList: studentListReducer
});
