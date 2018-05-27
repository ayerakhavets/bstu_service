// @flow
import { createSelector } from 'reselect';
import type { ApplicationState } from '../../Product.reducer';
import type { PickerItem } from '../../../Components';

export const selectChecks = ({ studentReducer }: ApplicationState): any =>
  studentReducer.checkListReducer.checks;

export const selectDate = ({ studentReducer }: ApplicationState): string =>
  studentReducer.checkListReducer.check.date;

export const selectPaymentType = ({ studentReducer }: ApplicationState): string =>
  studentReducer.checkListReducer.check.paymentType;

export const selectPaymentTypes = ({ studentReducer }: ApplicationState): string[] =>
  studentReducer.checkListReducer.paymentTypes;

export const selectMoneyAmount = ({ studentReducer }: ApplicationState): string =>
  studentReducer.checkListReducer.check.moneyAmount;

export const selectMappedPaymentTypes = createSelector(
  selectPaymentTypes,
  paymentTypes =>
    paymentTypes.map((paymentType): PickerItem => ({ label: paymentType, value: paymentType }))
);
