// @flow
import { combineReducers } from 'redux';
import { orderListReducer, type OrderListState } from './OrderList';
import { orderReducer, type OrderState } from './Order';
import { paymentReducer, type PaymentState } from './Payment';
import { paymentListReducer, type PaymentListState } from './PaymentList';
import { studentInfoReducer, type StudentInfoState } from './StudentInfo';

export type StudentState = {
  orderList: OrderListState,
  payment: PaymentState,
  order: OrderState,
  paymentList: PaymentListState,
  studentInfo: StudentInfoState,
}

export default combineReducers({
  orderList: orderListReducer,
  order: orderReducer,
  payment: paymentReducer,
  paymentList: paymentListReducer,
  studentInfo: studentInfoReducer
});
