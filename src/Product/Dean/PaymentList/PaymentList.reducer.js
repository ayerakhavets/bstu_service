// @flow
import {
  LOAD_PAYMENT_LIST_FAILURE,
  LOAD_PAYMENT_LIST_REQUEST,
  LOAD_PAYMENT_LIST_SUCCESS,
  type PaymentListActions
} from './PaymentList.actions';
import type { PaymentData } from '../../types';

export type PaymentListState = {
  isLoading: boolean,
  paymentList: PaymentData[]
}

const initialState = {
  isLoading: false,
  paymentList: []
};

export default (
  state: PaymentListState = initialState,
  action: PaymentListActions): PaymentListState => {
  switch (action.type) {
  case LOAD_PAYMENT_LIST_FAILURE:
    return {
      ...state,
      isLoading: false
    };
  case LOAD_PAYMENT_LIST_REQUEST:
    return {
      ...state,
      isLoading: true
    };
  case LOAD_PAYMENT_LIST_SUCCESS:
    return {
      ...state,
      isLoading: false,
      paymentList: action.payload
    };
  default:
    return state;
  }
};
