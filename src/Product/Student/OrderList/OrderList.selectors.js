// @flow
import type { ApplicationState as S, OrderData } from '../../types';

export const selectOrderList = ({ student }: S): OrderData[] => student.orderList.orderList;

export const selectIsLoading = ({ student }: S): boolean => student.orderList.isLoading;
