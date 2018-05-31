// @flow
import { createSelector } from 'reselect';
import { helpers, type PickerItem } from '../../../Components';
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

export const selectPaymentType = ({ student }: ApplicationState): string =>
  student.payment.paymentType;

export const selectPaymentTypes = ({ student }: ApplicationState): string[] =>
  student.payment.paymentTypes;

export const selectMappedPaymentTypes = createSelector(
  selectPaymentTypes,
  (paymentTypes): PickerItem[] => paymentTypes.map(helpers.mapItemToPickerItem)
);
