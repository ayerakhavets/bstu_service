// @flow
import LogIn from './LogIn.component';
import {
  CHANGE_EMAIL,
  CHANGE_UID,
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
import { selectEmail, selectUid } from './LogIn.selectors';


export default LogIn;

export {
  CHANGE_EMAIL,
  CHANGE_UID,
  LOG_IN,
  SIGN_UP,
  changeEmailValue,
  changePasswordValue,
  logIn,
  selectEmail,
  selectUid,
  signUp,

  logInSaga,
  logInReducer
};

export type {
  LogInActions,
  LogInState
};
