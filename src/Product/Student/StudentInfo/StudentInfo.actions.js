// @flow
import type { StudentInfo } from '../../types';

export const CHANGE_COURSE = 'CHANGE_COURSE';
export const CHANGE_FACULTY = 'CHANGE_FACULTY';
export const CHANGE_MIDDLE_NAME = 'CHANGE_MIDDLE_NAME';
export const CHANGE_NAME = 'CHANGE_NAME';
export const CHANGE_SPECIALTY = 'CHANGE_SPECIALTY';
export const CHANGE_STUDENT_ID = 'CHANGE_STUDENT_ID';
export const CHANGE_SURNAME = 'CHANGE_SURNAME';
export const CHANGE_USER_INFO = 'CHANGE_USER_INFO';
export const LOG_OUT = 'LOG_OUT';
export const SAVE_STUDENT_INFO_FAILURE = 'SAVE_STUDENT_INFO_FAILURE';
export const SAVE_STUDENT_INFO_REQUEST = 'SAVE_STUDENT_INFO_REQUEST';
export const SAVE_STUDENT_INFO_SUCCESS = 'SAVE_STUDENT_INFO_SUCCESS';

export type ChangeCourseAction = { type: typeof CHANGE_COURSE, payload: string };
export type ChangeFacultyAction = { type: typeof CHANGE_FACULTY, payload: string };
export type ChangeMiddleNameAction = { type: typeof CHANGE_MIDDLE_NAME, payload: string };
export type ChangeNameAction = { type: typeof CHANGE_NAME, payload: string };
export type СhangeSpecialtyAction = { type: typeof CHANGE_SPECIALTY, payload: string };
export type ChangeStudentIdAction = { type: typeof CHANGE_STUDENT_ID, payload: string };
export type ChangeSurnameAction = { type: typeof CHANGE_SURNAME, payload: string };
export type ChangeUserInfoAction = { type: typeof CHANGE_USER_INFO, payload: StudentInfo };
export type LogOutAction = { type: typeof LOG_OUT };
export type SaveStudentInfoFailureAction = { type: typeof SAVE_STUDENT_INFO_FAILURE };
export type SaveStudentInfoRequestAction = { type: typeof SAVE_STUDENT_INFO_REQUEST };
export type SaveStudentInfoSuccessAction = { type: typeof SAVE_STUDENT_INFO_SUCCESS };

export const changeCourse = (course: string): ChangeCourseAction => ({
  type: CHANGE_COURSE,
  payload: course
});

export const changeFaculty = (faculty: string): ChangeFacultyAction => ({
  type: CHANGE_FACULTY,
  payload: faculty
});

export const changeMiddleName = (middleName: string): ChangeMiddleNameAction => ({
  type: CHANGE_MIDDLE_NAME,
  payload: middleName
});

export const changeName = (name: string): ChangeNameAction => ({
  type: CHANGE_NAME,
  payload: name
});

export const changeSpecialty = (specialty: string): СhangeSpecialtyAction => ({
  type: CHANGE_SPECIALTY,
  payload: specialty
});

export const changeStudentId = (studentId: string): ChangeStudentIdAction => ({
  type: CHANGE_STUDENT_ID,
  payload: studentId
});

export const changeSurname = (surname: string): ChangeSurnameAction => ({
  type: CHANGE_SURNAME,
  payload: surname
});

export const changeUserInfo = (userInfo: StudentInfo): ChangeUserInfoAction => ({
  type: CHANGE_USER_INFO,
  payload: userInfo
});

export const logOut = (): LogOutAction => ({ type: LOG_OUT });

export const saveStudentInfoFailure = (): SaveStudentInfoFailureAction =>
  ({ type: SAVE_STUDENT_INFO_FAILURE });

export const saveStudentInfoRequest = (): SaveStudentInfoRequestAction =>
  ({ type: SAVE_STUDENT_INFO_REQUEST });

export const saveStudentInfoSuccess = (): SaveStudentInfoSuccessAction =>
  ({ type: SAVE_STUDENT_INFO_SUCCESS });


export type StudentInfoActions =
  | ChangeCourseAction
  | ChangeFacultyAction
  | ChangeMiddleNameAction
  | ChangeNameAction
  | СhangeSpecialtyAction
  | ChangeStudentIdAction
  | ChangeSurnameAction
  | ChangeUserInfoAction
  | SaveStudentInfoFailureAction
  | SaveStudentInfoRequestAction
  | SaveStudentInfoSuccessAction
  | LogOutAction
