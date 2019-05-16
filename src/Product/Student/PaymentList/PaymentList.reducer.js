// @flow
import { handleActions } from 'redux-actions';
import { type PaymentData } from '../../types';
import {
  LOAD_PAYMENT_LIST_FAILURE,
  LOAD_PAYMENT_LIST_REQUEST,
  LOAD_PAYMENT_LIST_SUCCESS, type LoadPaymentListSuccess
} from './PaymentList.actions';

export type PaymentListState = {
  isLoading: boolean,
  paymentList: PaymentData[]
}
type S = PaymentListState;

const initialState = {
  isLoading: false,
  paymentList: []
};

export default handleActions({
  [LOAD_PAYMENT_LIST_FAILURE]: (state: S) => ({
    ...state,
    isLoading: false
  }),
  [LOAD_PAYMENT_LIST_REQUEST]: (state: S) => ({
    ...state,
    isLoading: false
  }),
  [LOAD_PAYMENT_LIST_SUCCESS]: (state: S, { payload }: LoadPaymentListSuccess) => ({
    ...state,
    isLoading: false,
    paymentList: payload
  })
}, initialState);
