// @flow
import type { PaymentData } from '../../types';

export const LOAD_PAYMENT_LIST_FAILURE = 'LOAD_PAYMENT_LIST_FAILURE@Dean';
export const LOAD_PAYMENT_LIST_REQUEST = 'LOAD_PAYMENT_LIST_REQUEST@Dean';
export const LOAD_PAYMENT_LIST_SUCCESS = 'LOAD_PAYMENT_LIST_SUCCESS@Dean';
export const OPEN_SHOW_PAYMENT_SCREEN = 'OPEN_SHOW_PAYMENT_SCREEN@Dean';

export type LoadPaymentListFailureAction = { type: typeof LOAD_PAYMENT_LIST_FAILURE };

export type LoadPaymentListRequestAction = { type: typeof LOAD_PAYMENT_LIST_REQUEST };

export type LoadPaymentListSuccessAction = {
  type: typeof LOAD_PAYMENT_LIST_SUCCESS,
  payload: PaymentData[]
};

export type OpenShowPaymentScreenAction = {
   type: typeof OPEN_SHOW_PAYMENT_SCREEN,
   payload: PaymentData
};

export const loadPaymentListFailure = (): LoadPaymentListFailureAction => ({
  type: LOAD_PAYMENT_LIST_FAILURE
});

export const loadPaymentListRequest = (): LoadPaymentListRequestAction => ({
  type: LOAD_PAYMENT_LIST_REQUEST
});

export const loadPaymentListSuccess = (paymentList: PaymentData[]): LoadPaymentListSuccessAction =>
  ({
    type: LOAD_PAYMENT_LIST_SUCCESS,
    payload: paymentList
  });

export const openShowPaymentScreen = (paymentData: PaymentData): OpenShowPaymentScreenAction =>
  ({
    type: OPEN_SHOW_PAYMENT_SCREEN,
    payload: paymentData
  });

export type PaymentListActions =
  | LoadPaymentListFailureAction
  | LoadPaymentListRequestAction
  | LoadPaymentListSuccessAction
  | OpenShowPaymentScreenAction
