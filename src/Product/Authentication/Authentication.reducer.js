// @flow
import { handleActions } from 'redux-actions';

import {
  CHANGE_EMAIL, type ChangeEmail,
  CHANGE_PASSWORD, type ChangePassword,
  CHANGE_UID, type ChangeUid,
  CLEAR_USER_DATA,
  LOADING_END,
  LOADING_START,
  TOGGLE_IS_REMEMBER
} from './Authentication.actions';

export type AuthenticationState = {
  email: string,
  isLoading: boolean,
  isRemember: boolean,
  password: string,
  uid: string
}
type S = AuthenticationState;

const initialState = {
  email: '',
  isLoading: false,
  isRemember: false,
  password: '',
  uid: ''
};

export default handleActions({
  [CHANGE_EMAIL]: (state: S, { payload }: ChangeEmail): S => ({
    ...state,
    email: payload
  }),
  [CHANGE_PASSWORD]: (state: S, { payload }: ChangePassword): S => ({
    ...state,
    password: payload
  }),
  [CHANGE_UID]: (state: S, { payload }: ChangeUid): S => ({
    ...state,
    uid: payload
  }),
  [CLEAR_USER_DATA]: (): S => initialState,
  [LOADING_END]: (state: S): S => ({
    ...state,
    isLoading: false
  }),
  [LOADING_START]: (state: S): S => ({
    ...state,
    isLoading: true
  }),
  [TOGGLE_IS_REMEMBER]: (state: S): S => ({
    ...state,
    isRemember: !state.isRemember
  })
}, initialState);
