// @flow
import { createAction, type ActionType } from 'redux-actions';
import { STUDENT } from '../Student.constants';
import { type PaymentData } from '../../types';

export const LOAD_PAYMENT_LIST_FAILURE = `LOAD_PAYMENT_LIST_FAILURE${STUDENT}`;
export const loadPaymentListFailure = createAction(LOAD_PAYMENT_LIST_FAILURE, () => undefined);

export const LOAD_PAYMENT_LIST_REQUEST = `LOAD_PAYMENT_LIST_REQUEST${STUDENT}`;
export const loadPaymentListRequest = createAction(LOAD_PAYMENT_LIST_REQUEST, () => undefined);

export const LOAD_PAYMENT_LIST_SUCCESS = `LOAD_PAYMENT_LIST_SUCCESS${STUDENT}`;
export const loadPaymentListSuccess = createAction(LOAD_PAYMENT_LIST_SUCCESS, (payments: PaymentData[]) => payments);
export type LoadPaymentListSuccess = ActionType<typeof loadPaymentListSuccess>;

export const OPEN_ADD_PAYMENT_SCREEN = `OPEN_ADD_PAYMENT_SCREEN${STUDENT}`;
export const openAddPaymentScreen = createAction(OPEN_ADD_PAYMENT_SCREEN, () => undefined);

export const OPEN_SHOW_PAYMENT_SCREEN = `OPEN_SHOW_PAYMENT_SCREEN${STUDENT}`;
export const openShowPaymentScreen = createAction(OPEN_SHOW_PAYMENT_SCREEN, (payment: PaymentData) => payment);
export type OpenShowPaymentScreen = ActionType<typeof openShowPaymentScreen>;
