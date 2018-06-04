// @flow
import type { ApplicationState, PaymentData } from '../../types';

export const selectPaymentList = ({ dean }: ApplicationState): PaymentData[] =>
  dean.paymentList.paymentList;

export const selectIsLoading = ({ dean }: ApplicationState): boolean =>
  dean.paymentList.isLoading;
