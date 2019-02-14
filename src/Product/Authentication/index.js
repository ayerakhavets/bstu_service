// @flow
import Authentication from './Authentication.navigator';
import authenticationReducer, { type AuthenticationState } from './Authentication.reducer';
import authenticationSaga from './Authentication.saga';
import { logOut } from './Authentication.actions';
import { selectEmail, selectUid } from './Authentication.selectors';

export {
  Authentication,
  authenticationReducer,
  authenticationSaga,
  logOut,
  selectEmail,
  selectUid
};

export type { AuthenticationState };
