// @flow
import type { ApplicationState, PaymentData } from '../../types';

export const selectPaymentList = ({ student }: ApplicationState): PaymentData[] =>
  student.paymentList.paymentList;

export const selectIsLoading = ({ student }: ApplicationState): boolean =>
  student.paymentList.isLoading;
