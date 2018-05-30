// @flow
import { combineReducers } from 'redux';
import { paymentReducer, type PaymentState } from './Payment';
import { studentInfoReducer, type StudentInfoState } from './StudentInfo';
import { paymentListReducer, type PaymentListState } from './PaymentList';

export type StudentState = {
  payment: PaymentState,
  paymentList: PaymentListState,
  studentInfo: StudentInfoState,
}

export default combineReducers({
  payment: paymentReducer,
  paymentList: paymentListReducer,
  studentInfo: studentInfoReducer
});
