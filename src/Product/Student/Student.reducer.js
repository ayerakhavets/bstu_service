// @flow
import { combineReducers } from 'redux';
import { orderListReducer, type OrderListState } from './OrderList';
import { paymentReducer, type PaymentState } from './Payment';
import { paymentListReducer, type PaymentListState } from './PaymentList';
import { studentInfoReducer, type StudentInfoState } from './StudentInfo';

export type StudentState = {
  orderList: OrderListState,
  payment: PaymentState,
  paymentList: PaymentListState,
  studentInfo: StudentInfoState,
}

export default combineReducers({
  orderList: orderListReducer,
  payment: paymentReducer,
  paymentList: paymentListReducer,
  studentInfo: studentInfoReducer
});
