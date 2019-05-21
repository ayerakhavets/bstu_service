// @flow
import { createAction, type ActionType } from 'redux-actions';
import { type OrderData } from '../../types';
import { DEAN } from '../Dean.constants';

export const CHANGE_ORDER_DATA = `CHANGE_ORDER_DATA@${DEAN}`;
export const changeOrderData = createAction(CHANGE_ORDER_DATA, (order: OrderData) => order);
export type ChangeOrderData = ActionType<typeof changeOrderData>;

export const CLEAR_ORDER_DATA = `CLEAR_ORDER_DATA@${DEAN}`;
export const clearPaymentData = createAction(CLEAR_ORDER_DATA, () => undefined);
export type ClearPaymentData = ActionType<typeof clearPaymentData>;
