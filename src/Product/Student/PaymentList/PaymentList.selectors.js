// @flow
import type { ApplicationState as S, PaymentData } from '../../types';

export const selectPaymentList = ({ student }: S): PaymentData[] => student.paymentList.paymentList;

export const selectIsLoading = ({ student }: S): boolean => student.paymentList.isLoading;
