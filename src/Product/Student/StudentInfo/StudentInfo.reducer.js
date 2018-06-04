// @flow
import {
  CHANGE_COURSE,
  CHANGE_FACULTY,
  CHANGE_MIDDLE_NAME,
  CHANGE_NAME,
  CHANGE_SPECIALTY,
  CHANGE_STUDENT_ID,
  CHANGE_SURNAME,
  CHANGE_USER_INFO,
  CLEAR_STUDENT_INFO,
  SAVE_STUDENT_INFO_FAILURE,
  SAVE_STUDENT_INFO_REQUEST,
  SAVE_STUDENT_INFO_SUCCESS,
  type StudentInfoActions
} from './StudentInfo.actions';

export type StudentInfoState = {
  course: string,
  courses: string[],
  email: string,
  faculty: string,
  faculties: string[],
  isLoading: boolean,
  middleName: string,
  name: string,
  specialty: string,
  specialties: string[],
  studentId: string,
  surname: string
}

// TODO: use server data instead of the mocked one.
const initialState = {
  course: '',
  courses: ['', '1', '2', '3', '4'],
  email: '',
  faculty: '',
  faculties: ['', 'ФИТ'],
  isLoading: false,
  middleName: '',
  name: '',
  specialty: '',
  specialties: ['', 'ДЭиВИ', 'ПОиБМС', 'ПОИТ', 'ИСИТ'],
  studentId: '',
  surname: ''
};

export default (
  state: StudentInfoState = initialState,
  action: StudentInfoActions): StudentInfoState => {
  switch (action.type) {
  case CHANGE_COURSE:
    return {
      ...state,
      course: action.payload
    };
  case CHANGE_FACULTY:
    return {
      ...state,
      faculty: action.payload
    };
  case CHANGE_MIDDLE_NAME:
    return {
      ...state,
      middleName: action.payload
    };
  case CHANGE_NAME:
    return {
      ...state,
      name: action.payload
    };
  case CHANGE_SPECIALTY:
    return {
      ...state,
      specialty: action.payload
    };
  case CHANGE_STUDENT_ID:
    return {
      ...state,
      studentId: action.payload
    };
  case CHANGE_SURNAME:
    return {
      ...state,
      surname: action.payload
    };
  case CHANGE_USER_INFO:
    return {
      ...state,
      ...action.payload
    };
  case CLEAR_STUDENT_INFO:
    return initialState;
  case SAVE_STUDENT_INFO_FAILURE:
  case SAVE_STUDENT_INFO_SUCCESS:
    return {
      ...state,
      isLoading: false
    };
  case SAVE_STUDENT_INFO_REQUEST:
    return {
      ...state,
      isLoading: true
    };
  default:
    return state;
  }
};

