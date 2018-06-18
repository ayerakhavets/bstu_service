// @flow
import type { ApplicationState, OrderData } from '../../types';

export const selectOrderList = ({ lecturer }: ApplicationState): OrderData[] =>
  lecturer.orderList.orderList;

export const selectIsLoading = ({ lecturer }: ApplicationState): boolean =>
  lecturer.orderList.isLoading;
