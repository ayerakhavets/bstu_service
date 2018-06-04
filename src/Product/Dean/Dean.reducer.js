// @flow
import { combineReducers } from 'redux';
import { courseListReducer, type CourseListState } from './CourseList';
import { paymentListReducer, type PaymentListState } from './PaymentList';
import { paymentReducer, type PaymentState } from './Payment';
import { studentListReducer, type StudentListState } from './StudentList';

export type StudentState = {
  courseList: CourseListState,
  payment: PaymentState,
  paymentList: PaymentListState,
  studentList: StudentListState
}

export default combineReducers({
  courseList: courseListReducer,
  payment: paymentReducer,
  paymentList: paymentListReducer,
  studentList: studentListReducer
});
