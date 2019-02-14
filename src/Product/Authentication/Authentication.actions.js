// @flow
import { createAction, type ActionType } from 'redux-actions';
import { AUTHENTICATION } from './Authentication.constants';


export const CHANGE_EMAIL = `CHANGE_EMAIL@${AUTHENTICATION}`;
export const changeEmail = createAction(CHANGE_EMAIL, (email: string) => email);
export type ChangeEmail = ActionType<typeof changeEmail>;

export const CHANGE_PASSWORD = `CHANGE_PASSWORD@${AUTHENTICATION}`;
export const changePassword = createAction(CHANGE_PASSWORD, (password: string) => password);
export type ChangePassword = ActionType<typeof changePassword>

export const CHANGE_UID = `CHANGE_UID@${AUTHENTICATION}`;
export const changeUid = createAction(CHANGE_UID, (uid: string) => uid);
export type ChangeUid = ActionType<typeof changeUid>

export const CLEAR_USER_DATA = `CLEAR_USER_DATA@${AUTHENTICATION}`;
export const clearUserData = createAction(CLEAR_USER_DATA, () => undefined);

export const LOADING_END = `LOADING_END@${AUTHENTICATION}`;
export const loadingEnd = createAction(LOADING_END, () => undefined);

export const LOADING_START = `LOADING_START@${AUTHENTICATION}`;
export const loadingStart = createAction(LOADING_START, () => undefined);

export const LOG_IN = `LOG_IN@${AUTHENTICATION}`;
export const logIn = createAction(LOG_IN, () => undefined);

export const LOG_OUT = `LOG_OUT@${AUTHENTICATION}`;
export const logOut = createAction(LOG_OUT, () => undefined);

export const PRE_AUTHENTICATION = `PRE_AUTHENTICATION@${AUTHENTICATION}`;
export const preAuthentication = createAction(PRE_AUTHENTICATION, () => undefined);

export const SIGN_UP = `SIGN_UP@${AUTHENTICATION}`;
export const signUp = createAction(SIGN_UP, () => undefined);

export const TOGGLE_IS_REMEMBER = `TOGGLE_IS_REMEMBER@${AUTHENTICATION}`;
export const toggleIsRemember = createAction(TOGGLE_IS_REMEMBER, () => undefined);
