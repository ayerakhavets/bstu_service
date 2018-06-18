// @flow
import type { PaymentData } from '../../types';

export const CHANGE_ORDER_DATA = 'CHANGE_ORDER_DATA@Lecturer';
export const CHANGE_DATE = 'CHANGE_DATE@Lecturer';
export const CHANGE_MARK = 'CHANGE_MARK@Lecturer';
export const CLOSE_ORDER_FAILURE = 'CLOSE_ORDER_FAILURE@Lecturer';
export const CLOSE_ORDER_REQUEST = 'CLOSE_ORDER_REQUEST@Lecturer';
export const CLOSE_ORDER_SUCCESS = 'CLOSE_ORDER_SUCCESS@Lecturer';
export const CLEAR_ORDER_DATA = 'CLEAR_ORDER_DATA@Lecturer';
export const OPEN_IMAGE_PICKER = 'OPEN_IMAGE_PICKER@Lecturer';
export const APPROVE_ORDER_FAILURE = 'APPROVE_ORDER_FAILURE@Lecturer';
export const APPROVE_ORDER_REQUEST = 'APPROVE_ORDER_REQUEST@Lecturer';
export const APPROVE_ORDER_SUCCESS = 'APPROVE_ORDER_SUCCESS@Lecturer';

export type ChangeOrderDataAction = { type: typeof CHANGE_PAYMENT_DATA, payload: Object };
export type ChangeDateAction = { type: typeof CHANGE_DATE, payload: string };
export type ChangeEndDateAction = { type: typeof CHANGE_END_DATE, payload: string };
export type ChangeMarkAction = { type: typeof CHANGE_MARK, payload: string };
export type ClearPaymentDataAction = { type: typeof CLEAR_PAYMENT_DATA };
export type CloseOrderFailureAction = { type: typeof CLOSE_ORDER_FAILURE };
export type CloseOrderRequestAction = { type: typeof CLOSE_ORDER_REQUEST };
export type CloseOrderSuccessAction = { type: typeof CLOSE_ORDER_SUCCESS };
export type RemovePaymentFailureAction = { type: typeof REMOVE_PAYMENT_FAILURE };
export type RemovePaymentRequestAction = { type: typeof REMOVE_PAYMENT_REQUEST };
export type RemovePaymentSuccessAction = { type: typeof REMOVE_PAYMENT_SUCCESS };
export type ApproveOrderFailureAction = { type: typeof APPROVE_ORDER_FAILURE };
export type ApproveOrderRequestAction = { type: typeof APPROVE_ORDER_REQUEST };
export type ApproveOrderSuccessAction = { type: typeof APPROVE_ORDER_SUCCESS };
export type DeclinePaymentFailureAction = { type: typeof DECLINE_PAYMENT_FAILURE };
export type DeclinePaymentRequestAction = { type: typeof DECLINE_PAYMENT_REQUEST };
export type DeclinePaymentSuccessAction = { type: typeof DECLINE_PAYMENT_SUCCESS };

export const changeOrderData = (orderData: PaymentData): ChangeOrderDataAction => ({
  type: CHANGE_ORDER_DATA,
  payload: orderData
});

export const changeDate = (date: string): ChangeDateAction => ({
  type: CHANGE_DATE,
  payload: date
});

export const closeOrderFailure = (): CloseOrderFailureAction => ({
  type: CLOSE_ORDER_FAILURE
});
export const closeOrderRequest = (): CloseOrderRequestAction => ({
  type: CLOSE_ORDER_REQUEST
});
export const closeOrderSuccess = (): CloseOrderSuccessAction => ({
  type: CLOSE_ORDER_SUCCESS
});

export const changeMark = (mark: string): ChangeMarkAction => ({
  type: CHANGE_MARK,
  payload: mark
});

export const changeEndDate = (date: string): ChangeEndDateAction => ({
  type: CHANGE_END_DATE,
  payload: date
});

export const clearPaymentData = (): ClearPaymentDataAction => ({ type: CLEAR_PAYMENT_DATA });

export const removePaymentFailure = (): RemovePaymentFailureAction =>
  ({ type: REMOVE_PAYMENT_FAILURE });

export const removePaymentRequest = (): RemovePaymentRequestAction =>
  ({ type: REMOVE_PAYMENT_REQUEST });

export const removePaymentSuccess = (): RemovePaymentSuccessAction =>
  ({ type: REMOVE_PAYMENT_SUCCESS });

export const approveOrderFailure = (): ApproveOrderFailureAction =>
  ({ type: APPROVE_ORDER_FAILURE });

export const approveOrderRequest = (): ApproveOrderRequestAction =>
  ({ type: APPROVE_ORDER_REQUEST });

export const approveOrderSuccess = (): ApproveOrderSuccessAction =>
  ({ type: APPROVE_ORDER_SUCCESS });

export const declinePaymentFailure = (): DeclinePaymentFailureAction =>
  ({ type: DECLINE_PAYMENT_FAILURE });

export const declinePaymentRequest = (): DeclinePaymentRequestAction =>
  ({ type: DECLINE_PAYMENT_REQUEST });

export const declinePaymentSuccess = (): DeclinePaymentSuccessAction =>
  ({ type: DECLINE_PAYMENT_SUCCESS });

export type PaymentActions =
  | ClearPaymentDataAction
  | RemovePaymentFailureAction
  | RemovePaymentRequestAction
  | RemovePaymentSuccessAction
