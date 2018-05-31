// @flow
import Authentication from './Authentication.component';
import { logOut } from './Authentication.actions';
import authenticationReducer, { type AuthenticationState } from './Authentication.reducer';
import authenticationSaga from './Authentication.sagas';
import { selectEmail, selectUid } from './Authentication.selectors';

export {
  Authentication,
  authenticationReducer,
  authenticationSaga,
  logOut,
  selectEmail,
  selectUid
};

export type {
  AuthenticationState
};

