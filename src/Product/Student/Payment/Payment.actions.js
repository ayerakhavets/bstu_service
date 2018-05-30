// @flow
import type { PaymentData } from '../../types';
import type { PaymentImage } from './Payment.reducer';

export const ADD_PAYMENT_REQUEST = 'ADD_PAYMENT_REQUEST';
export const ADD_PAYMENT_FAILURE = 'ADD_PAYMENT_FAILURE';
export const ADD_PAYMENT_SUCCESS = 'ADD_PAYMENT_SUCCESS';
export const CHANGE_DATE = 'CHANGE_DATE';
export const CHANGE_IMAGE = 'CHANGE_IMAGE';
export const CHANGE_MONEY_AMOUNT = 'CHANGE_MONEY_AMOUNT';
export const CHANGE_PAYMENT_DATA = 'CHANGE_PAYMENT_DATA';
export const CHANGE_PAYMENT_TYPE = 'CHANGE_PAYMENT_TYPE';
export const CLEAR_PAYMENT_DATA = 'CLEAR_PAYMENT_DATA';
export const OPEN_IMAGE_PICKER = 'OPEN_IMAGE_PICKER';

export type AddPaymentRequestAction = { type: typeof ADD_PAYMENT_REQUEST };
export type AddPaymentFailureAction = { type: typeof ADD_PAYMENT_FAILURE };
export type AddPaymentSuccessAction = { type: typeof ADD_PAYMENT_SUCCESS };
export type ChangeDateAction = { type: typeof CHANGE_DATE, payload: string };
export type ChangeImageAction = { type: typeof CHANGE_IMAGE, payload: PaymentImage };
export type ChangeMoneyAmountAction = { type: typeof CHANGE_MONEY_AMOUNT, payload: string };
export type ChangePaymentDataAction = { type: typeof CHANGE_PAYMENT_DATA, payload: PaymentData };
export type ChangePaymentTypeAction = { type: typeof CHANGE_PAYMENT_TYPE, payload: string };
export type ClearPaymentDataAction = { type: typeof CLEAR_PAYMENT_DATA };
export type OpenImagePickerAction = { type: typeof OPEN_IMAGE_PICKER };

export const addPaymentRequest = (): AddPaymentRequestAction => ({ type: ADD_PAYMENT_REQUEST });

export const addPaymentFailure = (): AddPaymentFailureAction => ({ type: ADD_PAYMENT_FAILURE });

export const addPaymentSuccess = (): AddPaymentSuccessAction => ({ type: ADD_PAYMENT_SUCCESS });

export const changeDate = (date: string): ChangeDateAction => ({
  type: CHANGE_DATE,
  payload: date
});

export const changeImage = (image: PaymentImage): ChangeImageAction => ({
  type: CHANGE_IMAGE,
  payload: image
});

export const changeMoneyAmount = (moneyAmount: string): ChangeMoneyAmountAction => ({
  type: CHANGE_MONEY_AMOUNT,
  payload: moneyAmount
});

export const changePaymentData = (paymentData: PaymentData): ChangePaymentDataAction => ({
  type: CHANGE_PAYMENT_DATA,
  payload: paymentData
});

export const changePaymentType = (paymentType: string): ChangePaymentTypeAction => ({
  type: CHANGE_PAYMENT_TYPE,
  payload: paymentType
});

export const clearPaymentData = (): ClearPaymentDataAction => ({ type: CLEAR_PAYMENT_DATA });

export const openImagePicker = (): OpenImagePickerAction => ({ type: OPEN_IMAGE_PICKER });

export type PaymentActions =
  | AddPaymentRequestAction
  | AddPaymentFailureAction
  | AddPaymentSuccessAction
  | ChangeDateAction
  | ChangeImageAction
  | ChangeMoneyAmountAction
  | ChangePaymentDataAction
  | ChangePaymentTypeAction
  | ClearPaymentDataAction
  | OpenImagePickerAction;
