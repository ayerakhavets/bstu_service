// @flow
import type { PaymentData } from '../../types';

export const CHANGE_PAYMENT_DATA = 'CHANGE_PAYMENT_DATA@Dean';
export const CLEAR_PAYMENT_DATA = 'CLEAR_PAYMENT_DATA@Dean';
export const OPEN_IMAGE_PICKER = 'OPEN_IMAGE_PICKER@Dean';
export const REMOVE_PAYMENT_FAILURE = 'REMOVE_PAYMENT_FAILURE@Dean';
export const REMOVE_PAYMENT_REQUEST = 'REMOVE_PAYMENT_REQUEST@Dean';
export const REMOVE_PAYMENT_SUCCESS = 'REMOVE_PAYMENT_SUCCESS@Dean';
export const APPROVE_PAYMENT_FAILURE = 'APPROVE_PAYMENT_FAILURE@Dean';
export const APPROVE_PAYMENT_REQUEST = 'APPROVE_PAYMENT_REQUEST@Dean';
export const APPROVE_PAYMENT_SUCCESS = 'APPROVE_PAYMENT_SUCCESS@Dean';
export const DECLINE_PAYMENT_FAILURE = 'DECLINE_PAYMENT_FAILURE@Dean';
export const DECLINE_PAYMENT_REQUEST = 'DECLINE_PAYMENT_REQUEST@Dean';
export const DECLINE_PAYMENT_SUCCESS = 'DECLINE_PAYMENT_SUCCESS@Dean';

export type ChangePaymentDataAction = { type: typeof CHANGE_PAYMENT_DATA, payload: PaymentData };
export type ClearPaymentDataAction = { type: typeof CLEAR_PAYMENT_DATA };
export type RemovePaymentFailureAction = { type: typeof REMOVE_PAYMENT_FAILURE };
export type RemovePaymentRequestAction = { type: typeof REMOVE_PAYMENT_REQUEST };
export type RemovePaymentSuccessAction = { type: typeof REMOVE_PAYMENT_SUCCESS };
export type ApprovePaymentFailureAction = { type: typeof APPROVE_PAYMENT_FAILURE };
export type ApprovePaymentRequestAction = { type: typeof APPROVE_PAYMENT_REQUEST };
export type ApprovePaymentSuccessAction = { type: typeof APPROVE_PAYMENT_SUCCESS };
export type DeclinePaymentFailureAction = { type: typeof DECLINE_PAYMENT_FAILURE };
export type DeclinePaymentRequestAction = { type: typeof DECLINE_PAYMENT_REQUEST };
export type DeclinePaymentSuccessAction = { type: typeof DECLINE_PAYMENT_SUCCESS };

export const changePaymentData = (paymentData: PaymentData): ChangePaymentDataAction => ({
  type: CHANGE_PAYMENT_DATA,
  payload: paymentData
});

export const clearPaymentData = (): ClearPaymentDataAction => ({ type: CLEAR_PAYMENT_DATA });

export const removePaymentFailure = (): RemovePaymentFailureAction =>
  ({ type: REMOVE_PAYMENT_FAILURE });

export const removePaymentRequest = (): RemovePaymentRequestAction =>
  ({ type: REMOVE_PAYMENT_REQUEST });

export const removePaymentSuccess = (): RemovePaymentSuccessAction =>
  ({ type: REMOVE_PAYMENT_SUCCESS });

export const approvePaymentFailure = (): ApprovePaymentFailureAction =>
  ({ type: APPROVE_PAYMENT_FAILURE });

export const approvePaymentRequest = (): ApprovePaymentRequestAction =>
  ({ type: APPROVE_PAYMENT_REQUEST });

export const approvePaymentSuccess = (): ApprovePaymentSuccessAction =>
  ({ type: APPROVE_PAYMENT_SUCCESS });

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
