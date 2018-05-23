// @flow
export const CHANGE_EMAIL_VALUE = 'CHANGE_EMAIL_VALUE';
export const CHANGE_PASSWORD_VALUE = 'CHANGE_PASSWORD_VALUE';
export const LOG_IN = 'LOG_IN';
export const SIGN_UP = 'SIGN_UP';

type ChangeEmailValueAction = { type: typeof CHANGE_EMAIL_VALUE, payload: string };
type ChangePasswordValueAction = { type: typeof CHANGE_PASSWORD_VALUE, payload: string };
type LogInAction = { type: typeof LOG_IN };
type SignUpAction = { type: typeof SIGN_UP };

export const changeEmailValue = (email: string): ChangeEmailValueAction => ({
  type: CHANGE_EMAIL_VALUE,
  payload: email
});

export const changePasswordValue = (password: string): ChangePasswordValueAction => ({
  type: CHANGE_PASSWORD_VALUE,
  payload: password
});

export const logIn = (): LogInAction => ({ type: LOG_IN });

export const signUp = (): SignUpAction => ({ type: SIGN_UP });

export type LogInActions =
  | ChangeEmailValueAction
  | ChangePasswordValueAction
  | LogInAction
  | SignUpAction
