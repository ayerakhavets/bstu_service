// @flow
import type { ApplicationState } from '../../Product.reducer';

export const selectEmail = ({ logInReducer }: ApplicationState): string => logInReducer.email;

export const selectPassword = ({ logInReducer }: ApplicationState): string => logInReducer.password;
