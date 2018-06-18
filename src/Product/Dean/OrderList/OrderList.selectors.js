// @flow
import type { ApplicationState, OrderData } from '../../types';

export const selectOrderList = ({ student }: ApplicationState): OrderData[] =>
  student.orderList.orderList;

export const selectIsLoading = ({ student }: ApplicationState): boolean =>
  student.orderList.isLoading;
