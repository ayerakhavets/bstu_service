// @flow
import type { PaymentData } from '../../types';

export const LOAD_PAYMENT_LIST_FAILURE = 'LOAD_PAYMENT_LIST_FAILURE';
export const LOAD_PAYMENT_LIST_REQUEST = 'LOAD_PAYMENT_LIST_REQUEST';
export const LOAD_PAYMENT_LIST_SUCCESS = 'LOAD_PAYMENT_LIST_SUCCESS';
export const OPEN_ADD_PAYMENT_SCREEN = 'OPEN_ADD_PAYMENT_SCREEN';
export const OPEN_SHOW_PAYMENT_SCREEN = 'OPEN_SHOW_PAYMENT_SCREEN';

export type LoadPaymentListFailureAction = { type: typeof LOAD_PAYMENT_LIST_FAILURE };

export type LoadPaymentListRequestAction = { type: typeof LOAD_PAYMENT_LIST_REQUEST };

export type LoadPaymentListSuccessAction = {
  type: typeof LOAD_PAYMENT_LIST_SUCCESS,
  payload: PaymentData[]
};

export type OpenAddPaymentScreenAction = { type: typeof OPEN_ADD_PAYMENT_SCREEN };

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

export const openAddPaymentScreen = (): OpenAddPaymentScreenAction => ({
  type: OPEN_ADD_PAYMENT_SCREEN
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
  | OpenAddPaymentScreenAction
  | OpenShowPaymentScreenAction
