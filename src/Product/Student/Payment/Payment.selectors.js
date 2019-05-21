// @flow
import type { ApplicationState as S } from '../../types';
import type { PaymentImage } from './Payment.reducer';

export const selectDate = ({ student }: S): string => student.payment.date;

export const selectImage = ({ student }: S): PaymentImage => student.payment.image;

export const selectKey = ({ student }: S): string => student.payment.key;

export const selectIsLoading = ({ student }: S): boolean => student.payment.isLoading;

export const selectMoneyAmount = ({ student }: S): string => student.payment.moneyAmount;

export const selectLecturer = ({ student }: S): string => student.payment.lecturer;

export const selectSubject = ({ student }: S): string => student.payment.subject;

export const selectPaymentType = ({ student }: S): string => student.payment.paymentType;

export const selectStatus = ({ student }: S): string => student.payment.status;
