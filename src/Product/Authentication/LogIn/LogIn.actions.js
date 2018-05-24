// @flow
export const CHANGE_EMAIL = 'CHANGE_EMAIL';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const CHANGE_UID = 'CHANGE_UID';
export const LOG_IN = 'LOG_IN';
export const SIGN_UP = 'SIGN_UP';

type ChangeEmailAction = { type: typeof CHANGE_EMAIL, payload: string };
type ChangePasswordAction = { type: typeof CHANGE_PASSWORD, payload: string };
type ChangeUidAction = { type: typeof CHANGE_UID, payload: string };
type LogInAction = { type: typeof LOG_IN };
type SignUpAction = { type: typeof SIGN_UP };

export const changeEmailValue = (email: string): ChangeEmailAction => ({
  type: CHANGE_EMAIL,
  payload: email
});

export const changePasswordValue = (password: string): ChangePasswordAction => ({
  type: CHANGE_PASSWORD,
  payload: password
});

export const changeUid = (uid: string): ChangeUidAction => ({
  type: CHANGE_UID,
  payload: uid
});

export const logIn = (): LogInAction => ({ type: LOG_IN });

export const signUp = (): SignUpAction => ({ type: SIGN_UP });

export type LogInActions =
  | ChangeEmailAction
  | ChangePasswordAction
  | ChangeUidAction
  | LogInAction
  | SignUpAction
