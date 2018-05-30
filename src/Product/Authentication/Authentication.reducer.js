// @flow
import {
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  CHANGE_UID,
  LOADING_END,
  LOADING_START,
  TOGGLE_IS_REMEMBER,
  type AuthenticationActions
} from './Authentication.actions';

export type AuthenticationState = {
  email: string,
  isLoading: boolean,
  isRemember: boolean,
  password: string,
  uid: string
}

const initialState = {
  email: '',
  isLoading: false,
  isRemember: false,
  password: '',
  uid: ''
};

export default (state: AuthenticationState = initialState,
  action: AuthenticationActions): AuthenticationState => {
  switch (action.type) {
  case CHANGE_EMAIL:
    return {
      ...state,
      email: action.payload
    };
  case CHANGE_PASSWORD:
    return {
      ...state,
      password: action.payload
    };
  case CHANGE_UID:
    return {
      ...state,
      uid: action.payload
    };
  case LOADING_END:
    return {
      ...state,
      isLoading: false
    };
  case LOADING_START:
    console.log('=== LOADING_START authentication');
    return {
      ...state,
      isLoading: true
    };
  case TOGGLE_IS_REMEMBER:
    return {
      ...state,
      isRemember: !state.isRemember
    };
  default:
    return state;
  }
};
