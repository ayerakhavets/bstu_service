// @flow
import type { PaymentData } from '../../types';

export const CHANGE_PAYMENT_DATA = 'CHANGE_PAYMENT_DATA';
export type ChangePaymentDataAction = { type: typeof CHANGE_PAYMENT_DATA, payload: PaymentData };
export const changePaymentData = (paymentData: PaymentData): ChangePaymentDataAction => ({
  type: CHANGE_PAYMENT_DATA,
  payload: paymentData
});
export const CLEAR_PAYMENT_DATA = 'CLEAR_PAYMENT_DATA@Dean';
export const OPEN_IMAGE_PICKER = 'OPEN_IMAGE_PICKER@Dean';
export const REMOVE_PAYMENT_FAILURE = 'REMOVE_PAYMENT_FAILURE@Dean';
export const REMOVE_PAYMENT_REQUEST = 'REMOVE_PAYMENT_REQUEST@Dean';
export const REMOVE_PAYMENT_SUCCESS = 'REMOVE_PAYMENT_SUCCESS@Dean';
export const UPLOAD_PAYMENT_FAILURE = 'UPLOAD_PAYMENT_FAILURE@Dean';
export const UPLOAD_PAYMENT_REQUEST = 'UPLOAD_PAYMENT_REQUEST@Dean';
export const UPLOAD_PAYMENT_SUCCESS = 'UPLOAD_PAYMENT_SUCCESS@Dean';

export type ClearPaymentDataAction = { type: typeof CLEAR_PAYMENT_DATA };
export type OpenImagePickerAction = { type: typeof OPEN_IMAGE_PICKER };
export type RemovePaymentFailureAction = { type: typeof REMOVE_PAYMENT_FAILURE };
export type RemovePaymentRequestAction = { type: typeof REMOVE_PAYMENT_REQUEST };
export type RemovePaymentSuccessAction = { type: typeof REMOVE_PAYMENT_SUCCESS };
export type UploadPaymentFailureAction = { type: typeof UPLOAD_PAYMENT_FAILURE };
export type UploadPaymentRequestAction = {
  type: typeof UPLOAD_PAYMENT_REQUEST,
  payload: UploadPaymentType
};
export type UploadPaymentSuccessAction = { type: typeof UPLOAD_PAYMENT_SUCCESS };

export const clearPaymentData = (): ClearPaymentDataAction => ({ type: CLEAR_PAYMENT_DATA });

export const openImagePicker = (): OpenImagePickerAction => ({ type: OPEN_IMAGE_PICKER });

export const removePaymentFailure = (): RemovePaymentFailureAction =>
  ({ type: REMOVE_PAYMENT_FAILURE });

export const removePaymentRequest = (): RemovePaymentRequestAction =>
  ({ type: REMOVE_PAYMENT_REQUEST });

export const removePaymentSuccess = (): RemovePaymentSuccessAction =>
  ({ type: REMOVE_PAYMENT_SUCCESS });

export const uploadPaymentFailure = (): UploadPaymentFailureAction =>
  ({ type: UPLOAD_PAYMENT_FAILURE });

export const uploadPaymentRequest = (type: UploadPaymentType): UploadPaymentRequestAction => ({
  type: UPLOAD_PAYMENT_REQUEST,
  payload: type
});

export const uploadPaymentSuccess = (): UploadPaymentSuccessAction =>
  ({ type: UPLOAD_PAYMENT_SUCCESS });

export type PaymentActions =
  | ClearPaymentDataAction
  | OpenImagePickerAction
  | RemovePaymentFailureAction
  | RemovePaymentRequestAction
  | RemovePaymentSuccessAction
  | UploadPaymentFailureAction
  | UploadPaymentRequestAction
  | UploadPaymentSuccessAction
