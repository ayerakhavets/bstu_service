// @flow
import type { UserInfo } from '../../types';

export const CHANGE_COURSE = 'CHANGE_COURSE';
export const CHANGE_FACULTY = 'CHANGE_FACULTY';
export const CHANGE_MIDDLE_NAME = 'CHANGE_MIDDLE_NAME';
export const CHANGE_NAME = 'CHANGE_NAME';
export const CHANGE_SPECIALTY = 'CHANGE_SPECIALTY';
export const CHANGE_STUDENT_ID = 'CHANGE_STUDENT_ID';
export const CHANGE_SURNAME = 'CHANGE_SURNAME';
export const CHANGE_USER_INFO = 'CHANGE_USER_INFO';
export const SAVE_STUDENT_INFO = 'SAVE_STUDENT_INFO';

type ChangeCourseAction = { type: typeof CHANGE_COURSE, payload: string };
type ChangeFacultyAction = { type: typeof CHANGE_FACULTY, payload: string };
type ChangeMiddleNameAction = { type: typeof CHANGE_MIDDLE_NAME, payload: string };
type ChangeNameAction = { type: typeof CHANGE_NAME, payload: string };
type СhangeSpecialtyAction = { type: typeof CHANGE_SPECIALTY, payload: string };
type ChangeStudentIdAction = { type: typeof CHANGE_STUDENT_ID, payload: string };
type ChangeSurnameAction = { type: typeof CHANGE_SURNAME, payload: string };
type ChangeUserInfoAction = { type: typeof CHANGE_USER_INFO, payload: UserInfo };
type SaveStudentInfoAction = { type: typeof SAVE_STUDENT_INFO };

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

export const changeUserInfo = (userInfo: UserInfo): ChangeUserInfoAction => ({
  type: CHANGE_USER_INFO,
  payload: userInfo
});

export const saveStudentInfo = (): SaveStudentInfoAction => ({ type: SAVE_STUDENT_INFO });

export type StudentInfoActions =
  | ChangeCourseAction
  | ChangeFacultyAction
  | ChangeMiddleNameAction
  | ChangeNameAction
  | СhangeSpecialtyAction
  | ChangeStudentIdAction
  | ChangeSurnameAction
  | ChangeUserInfoAction
  | SaveStudentInfoAction
