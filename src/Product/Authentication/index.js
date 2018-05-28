// @flow
import Authentication from './Authentication.component';
import authenticationSaga from './Authentication.sagas';
import authenticationReducer, { type AuthenticationState } from './Authentication.reducer';
import { selectEmail, selectUid } from './Authentication.selectors';

export {
  Authentication,
  authenticationReducer,
  authenticationSaga,
  selectEmail,
  selectUid
};

export type { AuthenticationState };

