// @flow
import type { ApplicationState, OrderData } from '../../types';

export const selectOrderList = ({ dean }: ApplicationState): OrderData[] =>
  dean.orderList.orderList;

export const selectIsLoading = ({ dean }: ApplicationState): boolean =>
  dean.orderList.isLoading;
