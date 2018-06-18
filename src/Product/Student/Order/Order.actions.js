// @flow
import type { PaymentData } from '../../types';

export const CHANGE_ORDER_DATA = 'CHANGE_ORDER_DATA@Student';
export const CLEAR_ORDER_DATA = 'CLEAR_ORDER_DATA@Student';

export type ChangeOrderDataAction = { type: typeof CHANGE_PAYMENT_DATA, payload: Object };
export type ClearPaymentDataAction = { type: typeof CLEAR_PAYMENT_DATA };

export const changeOrderData = (orderData: PaymentData): ChangeOrderDataAction => ({
  type: CHANGE_ORDER_DATA,
  payload: orderData
});

export const clearPaymentData = (): ClearPaymentDataAction => ({ type: CLEAR_PAYMENT_DATA });

export type PaymentActions =
  | ClearPaymentDataAction
