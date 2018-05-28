// @flow
// import type { PaymentInfo } from './CheckList.reducer';

export const ADD_CHECK = 'ADD_CHECK';
export const CHANGE_DATE = 'CHANGE_DATE';
export const CHANGE_IMAGE = 'CHANGE_IMAGE';
export const CHANGE_MONEY_AMOUNT = 'CHANGE_MONEY_AMOUNT';
export const CHANGE_PAYMENT_TYPE = 'CHANGE_PAYMENT_TYPE';
export const LOAD_CHECKS = 'LOAD_CHECKS';
export const LOADING_END = 'LOADING_END';
export const LOADING_START = 'LOADING_START';
export const OPEN_IMAGE_PICKER = 'OPEN_IMAGE_PICKER';
// export const SELECT_CHECK = 'SELECT_CHECK';

type ChangeDateAction = { type: typeof CHANGE_DATE, payload: string };
// FIXME: add type for payload.
type ChangeImageAction = { type: typeof CHANGE_IMAGE, payload: Object };
type ChangeMoneyAmountAction = { type: typeof CHANGE_MONEY_AMOUNT, payload: string };
type ChangePaymentTypeAction = { type: typeof CHANGE_PAYMENT_TYPE, payload: string };
type LoadingEndAction = { type: typeof LOADING_END };
type LoadingStartAction = { type: typeof LOADING_START };
type OpenImagePickerAction = { type: typeof OPEN_IMAGE_PICKER };

type AddCheckAction = { type: typeof ADD_CHECK };
type LoadChecksAction = { type: typeof LOAD_CHECKS };

export const addCheck = (): AddCheckAction => ({ type: ADD_CHECK });

export const changeDate = (date: string): ChangeDateAction => ({
  type: CHANGE_DATE,
  payload: date
});

// FIXME: add type for image
export const changeImage = (image: Object): ChangeImageAction => ({
  type: CHANGE_IMAGE,
  payload: image
});

export const changeMoneyAmount = (moneyAmount: string): ChangeMoneyAmountAction => ({
  type: CHANGE_MONEY_AMOUNT,
  payload: moneyAmount
});

export const changePaymentType = (paymentType: string): ChangePaymentTypeAction => ({
  type: CHANGE_PAYMENT_TYPE,
  payload: paymentType
});

export const loadChecks = (): LoadChecksAction => ({ type: LOAD_CHECKS });

export const loadingEnd = (): LoadingEndAction => ({ type: LOADING_END });

export const loadingStart = (): LoadingStartAction => ({ type: LOADING_START });

export const openImagePicker = (): OpenImagePickerAction => ({ type: OPEN_IMAGE_PICKER });

export type CheckListActions =
  | AddCheckAction
  | ChangeDateAction
  | ChangeImageAction
  | ChangeMoneyAmountAction
  | ChangePaymentTypeAction
  | LoadChecksAction
  | LoadingEndAction
  | LoadingStartAction
  | OpenImagePickerAction
