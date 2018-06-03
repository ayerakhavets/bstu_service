// @flow
export const CHANGE_EMAIL = 'CHANGE_EMAIL';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const CHANGE_UID = 'CHANGE_UID';
export const CLEAR_USER_DATA = 'CLEAR_USER_DATA';
export const LOADING_END = 'LOADING_END';
export const LOADING_START = 'LOADING_START';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const PRE_AUTHENTICATION = 'PRE_AUTHENTICATION';
export const SIGN_UP = 'SIGN_UP';
export const TOGGLE_IS_REMEMBER = 'TOGGLE_IS_REMEMBER';

export type ChangeEmailAction = { type: typeof CHANGE_EMAIL, payload: string };
export type ChangePasswordAction = { type: typeof CHANGE_PASSWORD, payload: string };
export type ChangeUidAction = { type: typeof CHANGE_UID, payload: string };
export type ClearUserDataAction = { type: typeof CLEAR_USER_DATA };
export type LoadingEndAction = { type: typeof LOADING_END };
export type LoadingStartAction = { type: typeof LOADING_START };
export type LogInAction = { type: typeof LOG_IN };
export type LogOutAction = { type: typeof LOG_OUT };
export type PreAuthenticationAction = { type: typeof PRE_AUTHENTICATION };
export type SignUpAction = { type: typeof SIGN_UP };
export type ToggleIsRememberAction = { type: typeof TOGGLE_IS_REMEMBER };

export const changeEmail = (email: string): ChangeEmailAction => ({
  type: CHANGE_EMAIL,
  payload: email
});

export const changePassword = (password: string): ChangePasswordAction => ({
  type: CHANGE_PASSWORD,
  payload: password
});

export const changeUid = (uid: string): ChangeUidAction => ({
  type: CHANGE_UID,
  payload: uid
});

export const clearUserData = (): ClearUserDataAction => ({ type: CLEAR_USER_DATA });

export const loadingEnd = (): LoadingEndAction => ({ type: LOADING_END });

export const loadingStart = (): LoadingStartAction => ({ type: LOADING_START });

export const logIn = (): LogInAction => ({ type: LOG_IN });

export const logOut = (): LogOutAction => ({ type: LOG_OUT });

export const preAuthentication = (): PreAuthenticationAction => ({ type: PRE_AUTHENTICATION });

export const signUp = (): SignUpAction => ({ type: SIGN_UP });

export const toggleIsRemember = (): ToggleIsRememberAction => ({ type: TOGGLE_IS_REMEMBER });

export type AuthenticationActions =
  | ChangeEmailAction
  | ChangePasswordAction
  | ChangeUidAction
  | ClearUserDataAction
  | LoadingEndAction
  | LoadingStartAction
  | LogInAction
  | LogOutAction
  | PreAuthenticationAction
  | SignUpAction
  | ToggleIsRememberAction
