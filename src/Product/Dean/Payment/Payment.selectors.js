// @flow
import { createSelector } from 'reselect';
import { helpers, type PickerItem } from '../../../Components';
import type { ApplicationState } from '../../types';
import type { PaymentImage } from './Payment.reducer';

export const selectDate = ({ dean }: ApplicationState): string =>
  dean.payment.date;

export const selectImage = ({ dean }: ApplicationState): PaymentImage =>
  dean.payment.image;

export const selectKey = ({ dean }: ApplicationState): string =>
  dean.payment.key;

export const selectIsLoading = ({ dean }: ApplicationState): boolean =>
  dean.payment.isLoading;

export const selectMoneyAmount = ({ dean }: ApplicationState): string =>
  dean.payment.moneyAmount;

export const selectPaymentType = ({ dean }: ApplicationState): string =>
  dean.payment.paymentType;

export const selectPaymentTypes = ({ dean }: ApplicationState): string[] =>
  dean.payment.paymentTypes;

export const selectMappedPaymentTypes = createSelector(
  selectPaymentTypes,
  (paymentTypes): PickerItem[] => paymentTypes.map(helpers.mapItemToPickerItem)
);
