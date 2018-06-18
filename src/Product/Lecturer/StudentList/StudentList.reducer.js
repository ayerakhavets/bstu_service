// @flow
import type { StudentInfo } from '../../types';
import {
  CHANGE_CURRENT_STUDENT,
  LOAD_STUDENT_LIST_FAILURE,
  LOAD_STUDENT_LIST_REQUEST,
  LOAD_STUDENT_LIST_SUCCESS,
  type StudentListActions
} from './StudentList.actions';

export type StudentListState = {
  currentStudent: StudentInfo,
  isLoading: boolean,
  studentList: StudentInfo[]
}

const initialState = {
  currentStudent: {},
  isLoading: false,
  studentList: []
};

export default (state: StudentListState = initialState,
  action: StudentListActions): StudentListState => {
  switch (action.type) {
  case CHANGE_CURRENT_STUDENT:
    return {
      ...state,
      currentStudent: action.payload
    };
  case LOAD_STUDENT_LIST_FAILURE:
    return {
      ...state,
      isLoading: false
    };
  case LOAD_STUDENT_LIST_REQUEST:
    return {
      ...state,
      isLoading: true
    };
  case LOAD_STUDENT_LIST_SUCCESS:
    return {
      ...state,
      isLoading: false,
      studentList: action.payload
    };
  default:
    return state;
  }
};
