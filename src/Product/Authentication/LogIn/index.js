// @flow
import LogIn from './LogIn.component';
import {
  CHANGE_EMAIL_VALUE,
  CHANGE_PASSWORD_VALUE,
  LOG_IN,
  SIGN_UP,
  changeEmailValue,
  changePasswordValue,
  logIn,
  signUp,
  type LogInActions
} from './LogIn.actions';
import logInSaga from './LogIn.sagas';
import logInReducer, { type LogInState } from './LogIn.reducer';


export default LogIn;

export {
  CHANGE_EMAIL_VALUE,
  CHANGE_PASSWORD_VALUE,
  LOG_IN,
  SIGN_UP,
  changeEmailValue,
  changePasswordValue,
  logIn,
  signUp,

  logInSaga,
  logInReducer
};

export type {
  LogInActions,
  LogInState
};
