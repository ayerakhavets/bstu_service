// @flow
import type { ApplicationState as S } from '../../types';
import type { PaymentImage } from './Payment.reducer';

export const selectDate = ({ dean }: S): string => dean.payment.date;

export const selectStartDate = ({ dean }: S): string => dean.payment.startDate;

export const selectEndDate = ({ dean }: S): string => dean.payment.endDate;

export const selectLecturer = ({ dean }: S): string => dean.payment.lecturer;

export const selectSubject = ({ dean }: S): string => dean.payment.subject;

export const selectImage = ({ dean }: S): PaymentImage => dean.payment.image;

export const selectKey = ({ dean }: S): string => dean.payment.key;

export const selectIsLoading = ({ dean }: S): boolean => dean.payment.isLoading;

export const selectMoneyAmount = ({ dean }: S): string => dean.payment.moneyAmount;

export const selectPaymentType = ({ dean }: S): string => dean.payment.paymentType;

export const selectStatus = ({ dean }: S): string => dean.payment.status;
