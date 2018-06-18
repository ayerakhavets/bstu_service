// @flow
import {
  CHANGE_SUBJECT,
  type SubjectListActions
} from './SubjectList.actions';

export type SubjectListState = {
  subject: string
}

const initialState = {
  subject: ''
};

export default (state: SubjectListState = initialState,
  action: SubjectListActions): SubjectListState => {
  switch (action.type) {
  case CHANGE_SUBJECT:
    return {
      ...state,
      subject: action.payload
    };
  default:
    return state;
  }
};

