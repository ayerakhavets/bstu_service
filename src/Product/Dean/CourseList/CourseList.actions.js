// @flow
export const CHANGE_COURSE = 'CHANGE_COURSE@Dean';
export const CHANGE_SPECIALTY = 'CHANGE_SPECIALTY@Dean';
export const OPEN_STUDENT_LIST = 'OPEN_STUDENT_LIST@Dean';

export type NavigationParams = {
  course: string,
  specialty: string
}

export type ChangeCourseAction = { type: typeof CHANGE_COURSE, payload: string };
export type СhangeSpecialtyAction = { type: typeof CHANGE_SPECIALTY, payload: string };
export type OpenStudentListAction = { type: typeof OPEN_STUDENT_LIST, payload: NavigationParams };

export const changeCourse = (course: string): ChangeCourseAction => ({
  type: CHANGE_COURSE,
  payload: course
});

export const changeSpecialty = (specialty: string): СhangeSpecialtyAction => ({
  type: CHANGE_SPECIALTY,
  payload: specialty
});

export const openStudentList = (navigationParams: NavigationParams): OpenStudentListAction => ({
  type: OPEN_STUDENT_LIST,
  payload: navigationParams
});

export type CourseListActions =
  | ChangeCourseAction
  | СhangeSpecialtyAction
  | OpenStudentListAction
