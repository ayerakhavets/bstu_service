// @flow
import type { ApplicationState } from '../../Product.reducer';

export const selectEmail = ({ logInReducer }: ApplicationState): string => logInReducer.email;

export const selectIsRemember = ({ logInReducer }: ApplicationState): boolean =>
  logInReducer.isRemember;

export const selectPassword = ({ logInReducer }: ApplicationState): string => logInReducer.password;

export const selectUid = ({ logInReducer }: ApplicationState): string => logInReducer.uid;
