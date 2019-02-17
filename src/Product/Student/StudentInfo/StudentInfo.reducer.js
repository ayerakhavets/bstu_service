// @flow
import { combineActions, handleActions } from 'redux-actions';

import {
  CHANGE_COURSE, type ChangeCourse,
  CHANGE_FACULTY, type ChangeFaculty,
  CHANGE_MIDDLE_NAME, type ChangeMiddleName,
  CHANGE_NAME, type ChangeName,
  CHANGE_SPECIALTY, type СhangeSpecialty,
  CHANGE_STUDENT_ID, type ChangeStudentId,
  CHANGE_SURNAME, type ChangeSurname,
  CHANGE_USER_INFO, type ChangeUserInfo,
  CLEAR_STUDENT_INFO,
  SAVE_STUDENT_INFO_FAILURE,
  SAVE_STUDENT_INFO_REQUEST,
  SAVE_STUDENT_INFO_SUCCESS
} from './StudentInfo.actions';


export type StudentInfoState = {
  course: string,
  courses: string[],
  email: string,
  faculties: string[],
  faculty: string,
  isLoading: boolean,
  middleName: string,
  name: string,
  specialties: string[],
  specialty: string,
  studentId: string,
  surname: string
}
type S = StudentInfoState;

// TODO: use server data instead of the mocked one.
const initialState = {
  course: '',
  courses: ['', '1', '2', '3', '4'],
  email: '',
  faculties: ['', 'ФИТ'],
  faculty: '',
  isLoading: false,
  middleName: '',
  name: '',
  specialties: ['', 'ДЭиВИ', 'ПОиБМС', 'ПОИТ', 'ИСИТ'],
  specialty: '',
  studentId: '',
  surname: ''
};

export default handleActions({
  [CHANGE_COURSE]: (state: S, { payload }: ChangeCourse) => ({
    ...state,
    course: payload
  }),
  [CHANGE_FACULTY]: (state: S, { payload }: ChangeFaculty): S => ({
    ...state,
    faculty: payload
  }),
  [CHANGE_MIDDLE_NAME]: (state: S, { payload }: ChangeMiddleName): S => ({
    ...state,
    middleName: payload
  }),
  [CHANGE_NAME]: (state: S, { payload }: ChangeName): S => ({
    ...state,
    name: payload
  }),
  [CHANGE_SPECIALTY]: (state: S, { payload }: СhangeSpecialty): S => ({
    ...state,
    specialty: payload
  }),
  [CHANGE_STUDENT_ID]: (state: S, { payload }: ChangeStudentId): S => ({
    ...state,
    studentId: payload
  }),
  [CHANGE_SURNAME]: (state: S, { payload }: ChangeSurname): S => ({
    ...state,
    surname: payload
  }),
  [CHANGE_USER_INFO]: (state: S, { payload }: ChangeUserInfo): S => ({
    ...state,
    ...payload
  }),
  [CLEAR_STUDENT_INFO]: (): S => initialState,
  [combineActions(SAVE_STUDENT_INFO_FAILURE, SAVE_STUDENT_INFO_SUCCESS)]: (state: S): S => ({
    ...state,
    isLoading: false
  }),
  [SAVE_STUDENT_INFO_REQUEST]: (state: S): S => ({
    ...state,
    isLoading: true
  })
}, initialState);
