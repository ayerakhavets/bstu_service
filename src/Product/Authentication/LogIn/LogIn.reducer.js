// @flow
import {
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  CHANGE_UID,
  type LogInActions
} from './LogIn.actions';

export type LogInState = {
  email: string,
  password: string,
  uid: string
}

const initialState = {
  email: '',
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
