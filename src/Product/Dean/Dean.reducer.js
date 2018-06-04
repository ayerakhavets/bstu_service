// @flow
import { combineReducers } from 'redux';
import { studentListReducer, type StudentListState } from './StudentList';
import { courseListReducer, type CourseListState } from './CourseList';
import { paymentListReducer, type PaymentListState } from './PaymentList';

export type StudentState = {
  studentList: StudentListState,
  courseList: CourseListState,
  paymentList: PaymentListState
}

export default combineReducers({
  studentList: studentListReducer,
  courseList: courseListReducer,
  paymentList: paymentListReducer
});
