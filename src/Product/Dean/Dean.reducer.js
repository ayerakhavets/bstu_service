// @flow
import { combineReducers } from 'redux';
import { studentListReducer, type StudentListState } from './StudentList';
import { courseListReducer, type CourseListState } from './CourseList';
import { paymentListReducer, type PaymentListState } from './PaymentList';
import { paymentReducer, type PaymentState } from './Payment';

export type StudentState = {
  studentList: StudentListState,
  courseList: CourseListState,
  paymentList: PaymentListState,
  payment: PaymentState
}

export default combineReducers({
  studentList: studentListReducer,
  courseList: courseListReducer,
  paymentList: paymentListReducer,
  payment: paymentReducer
});
