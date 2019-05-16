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
  email: string,
  faculty: string,
  isLoading: boolean,
  middleName: string,
  name: string,
  specialty: string,
  studentId: string,
  surname: string,
  uid: string
}
type S = StudentInfoState;

const initialState = {
  course: '',
  email: '',
  faculty: '',
  isLoading: false,
  middleName: '',
  name: '',
  specialty: '',
  studentId: '',
  surname: '',
  uid: ''
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
