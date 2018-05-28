// @flow
import { createSelector } from 'reselect';
import type { ApplicationState } from '../../Product.reducer';
import type { PickerItem } from '../../../Components';

// TODO: add actual type instead of `any`.
export const selectChecks = ({ studentReducer }: ApplicationState): any =>
  studentReducer.checkListReducer.checks;

export const selectDate = ({ studentReducer }: ApplicationState): string =>
  studentReducer.checkListReducer.check.date;

// FIXME: add type.
export const selectImage = ({ studentReducer }: ApplicationState): Object =>
  studentReducer.checkListReducer.check.image;

export const selectMoneyAmount = ({ studentReducer }: ApplicationState): string =>
  studentReducer.checkListReducer.check.moneyAmount;

export const selectPaymentType = ({ studentReducer }: ApplicationState): string =>
  studentReducer.checkListReducer.check.paymentType;

export const selectPaymentTypes = ({ studentReducer }: ApplicationState): string[] =>
  studentReducer.checkListReducer.paymentTypes;

export const selectMappedPaymentTypes = createSelector(
  selectPaymentTypes,
  (paymentTypes): PickerItem[] =>
    paymentTypes.map((paymentType): PickerItem => ({ label: paymentType, value: paymentType }))
);
