// @flow
import {
  CHANGE_COURSE,
  CHANGE_SPECIALTY,
  type CourseListActions
} from './CourseList.actions';

export type CourseListState = {
  course: string,
  specialty: string
}

const initialState = {
  course: '',
  specialty: ''
};

export default (
  state: CourseListState = initialState,
  action: CourseListActions): CourseListState => {
  switch (action.type) {
  case CHANGE_COURSE:
    return {
      ...state,
      course: action.payload
    };
  case CHANGE_SPECIALTY:
    return {
      ...state,
      specialty: action.payload
    };
  default:
    return state;
  }
};

