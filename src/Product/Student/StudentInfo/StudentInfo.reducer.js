// @flow
import {
  CHANGE_COURSE,
  CHANGE_FACULTY,
  CHANGE_MIDDLE_NAME,
  CHANGE_NAME,
  CHANGE_SPECIALTY,
  CHANGE_STUDENT_ID,
  CHANGE_SURNAME,
  type StudentInfoActions
} from './StudentInfo.actions';

export type StudentInfoState = {
  course: string,
  courses: string[],
  faculty: string,
  faculties: string[],
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
  courses: ['1', '2', '3', '4'],
  faculty: '',
  faculties: ['', 'ФИТ'],
  middleName: '',
  name: '',
  specialty: '',
  specialties: ['ДЭиВИ', 'ПОиБМС', 'ПОИТ', 'ИСИТ'],
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
  default:
    return state;
  }
};

