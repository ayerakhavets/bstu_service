// @flow
import type { ApplicationState } from '../../types';
import type { PaymentImage } from './Payment.reducer';

export const selectDate = ({ student }: ApplicationState): string =>
  student.payment.date;

export const selectImage = ({ student }: ApplicationState): PaymentImage =>
  student.payment.image;

export const selectKey = ({ student }: ApplicationState): string =>
  student.payment.key;

export const selectIsLoading = ({ student }: ApplicationState): boolean =>
  student.payment.isLoading;

export const selectMoneyAmount = ({ student }: ApplicationState): string =>
  student.payment.moneyAmount;

export const selectLecturer = ({ student }: ApplicationState): string =>
  student.payment.lecturer;

export const selectSubject = ({ student }: ApplicationState): string =>
  student.payment.subject;

export const selectPaymentType = ({ student }: ApplicationState): string =>
  student.payment.paymentType;
