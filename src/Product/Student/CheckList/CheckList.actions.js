// @flow
// import type { PaymentInfo } from './CheckList.reducer';

export const ADD_CHECK = 'ADD_CHECK';
// export const ADD_IMAGE = 'ADD_IMAGE';
export const CHANGE_DATE = 'CHANGE_DATE';
export const CHANGE_MONEY_AMOUNT = 'CHANGE_MONEY_AMOUNT';
export const CHANGE_PAYMENT_TYPE = 'CHANGE_PAYMENT_TYPE';
export const LOAD_CHECKS = 'LOAD_CHECKS';
// export const SELECT_CHECK = 'SELECT_CHECK';

type ChangeDateAction = { type: typeof CHANGE_DATE, payload: string };
type ChangeMoneyAmountAction = { type: typeof CHANGE_MONEY_AMOUNT, payload: string };
type ChangePaymentTypeAction = { type: typeof CHANGE_PAYMENT_TYPE, payload: string };

type AddCheckAction = { type: typeof ADD_CHECK };
type LoadChecksAction = { type: typeof LOAD_CHECKS };

export const addCheck = (): AddCheckAction => ({ type: ADD_CHECK });

export const changeDate = (date: string): ChangeDateAction => ({
  type: CHANGE_DATE,
  payload: date
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

export type CheckListActions =
  | AddCheckAction
  | ChangeDateAction
  | ChangeMoneyAmountAction
  | ChangePaymentTypeAction
  | LoadChecksAction
