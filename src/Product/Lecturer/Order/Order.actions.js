// @flow
import type { OrderData } from '../../types';

export const CHANGE_ORDER_DATA = 'CHANGE_ORDER_DATA@Lecturer';
export const CHANGE_DATE = 'CHANGE_DATE@Lecturer';
export const CHANGE_MARK = 'CHANGE_MARK@Lecturer';
export const CLOSE_ORDER_FAILURE = 'CLOSE_ORDER_FAILURE@Lecturer';
export const CLOSE_ORDER_REQUEST = 'CLOSE_ORDER_REQUEST@Lecturer';
export const CLOSE_ORDER_SUCCESS = 'CLOSE_ORDER_SUCCESS@Lecturer';
export const OPEN_IMAGE_PICKER = 'OPEN_IMAGE_PICKER@Lecturer';

export type ChangeOrderDataAction = { type: typeof CHANGE_ORDER_DATA, payload: OrderData };
export type ChangeDateAction = { type: typeof CHANGE_DATE, payload: string };
export type ChangeMarkAction = { type: typeof CHANGE_MARK, payload: string };
export type CloseOrderFailureAction = { type: typeof CLOSE_ORDER_FAILURE };
export type CloseOrderRequestAction = { type: typeof CLOSE_ORDER_REQUEST };
export type CloseOrderSuccessAction = { type: typeof CLOSE_ORDER_SUCCESS };

export const changeOrderData = (orderData: OrderData): ChangeOrderDataAction => ({
  type: CHANGE_ORDER_DATA,
  payload: orderData
});

export const changeDate = (date: string): ChangeDateAction => ({
  type: CHANGE_DATE,
  payload: date
});

export const changeMark = (mark: string): ChangeMarkAction => ({
  type: CHANGE_MARK,
  payload: mark
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

export const APPROVE_ORDER_FAILURE = 'APPROVE_ORDER_FAILURE@Lecturer';
export const approveOrderFailure = (): ApproveOrderFailureAction => ({ type: APPROVE_ORDER_FAILURE });
export type ApproveOrderFailureAction = { type: typeof APPROVE_ORDER_FAILURE };

export const APPROVE_ORDER_REQUEST = 'APPROVE_ORDER_REQUEST@Lecturer';
export const approveOrderRequest = (): ApproveOrderRequestAction => ({ type: APPROVE_ORDER_REQUEST });
export type ApproveOrderRequestAction = { type: typeof APPROVE_ORDER_REQUEST };

export const APPROVE_ORDER_SUCCESS = 'APPROVE_ORDER_SUCCESS@Lecturer';
export const approveOrderSuccess = (): ApproveOrderSuccessAction => ({ type: APPROVE_ORDER_SUCCESS });
export type ApproveOrderSuccessAction = { type: typeof APPROVE_ORDER_SUCCESS };
