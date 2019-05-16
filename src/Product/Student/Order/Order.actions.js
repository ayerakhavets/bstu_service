// @flow
import type { OrderData } from '../../types';

export const CHANGE_ORDER_DATA = 'CHANGE_ORDER_DATA@Student';
export const CLEAR_ORDER_DATA = 'CLEAR_ORDER_DATA@Student';

export type ChangeOrderDataAction = { type: typeof CHANGE_ORDER_DATA, payload: OrderData };
export type ClearPaymentDataAction = { type: typeof CLEAR_ORDER_DATA };

export const changeOrderData = (orderData: OrderData): ChangeOrderDataAction => ({
  type: CHANGE_ORDER_DATA,
  payload: orderData
});

export const clearPaymentData = (): ClearPaymentDataAction => ({ type: CLEAR_ORDER_DATA });

export type PaymentActions =
  | ClearPaymentDataAction
