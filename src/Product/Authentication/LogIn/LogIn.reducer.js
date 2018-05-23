// @flow
import {
  CHANGE_EMAIL_VALUE,
  CHANGE_PASSWORD_VALUE,
  type LogInActions
} from './LogIn.actions';

export type LogInState = {
  email: string,
  password: string
}

const initialState = {
  email: '',
  password: ''
};

export default (
  state: LogInState = initialState,
  action: LogInActions): LogInState => {
  switch (action.type) {
  case CHANGE_EMAIL_VALUE:
    return {
      ...state,
      email: action.payload
    };
  case CHANGE_PASSWORD_VALUE:
    return {
      ...state,
      password: action.payload
    };
  default:
    return state;
  }
};
