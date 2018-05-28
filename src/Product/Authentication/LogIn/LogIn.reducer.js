// @flow
import {
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  CHANGE_UID,
  TOGGLE_IS_REMEMBER,
  type LogInActions
} from './LogIn.actions';

export type LogInState = {
  email: string,
  isRemember: boolean,
  password: string,
  uid: string
}

const initialState = {
  email: '',
  isRemember: false,
  password: '',
  uid: ''
};

export default (
  state: LogInState = initialState,
  action: LogInActions): LogInState => {
  switch (action.type) {
  case CHANGE_EMAIL:
    return {
      ...state,
      email: action.payload
    };
  case TOGGLE_IS_REMEMBER:
    return {
      ...state,
      isRemember: !state.isRemember
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
  default:
    return state;
  }
};
