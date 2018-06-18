// @flow
export const CHANGE_SUBJECT = 'CHANGE_SUBJECT@Lecturer';
export const OPEN_STUDENT_LIST = 'OPEN_STUDENT_LIST@Lecturer';

export type NavigationParams = { subject: string }

export type ChangeSubjectAction = { type: typeof CHANGE_SUBJECT, payload: string };
export type OpenStudentListAction = { type: typeof OPEN_STUDENT_LIST, payload: NavigationParams };

export const changeSubject = (subject: string): ChangeSubjectAction => ({
  type: CHANGE_SUBJECT,
  payload: subject
});

export const openStudentList = (navigationParams: NavigationParams): OpenStudentListAction => ({
  type: OPEN_STUDENT_LIST,
  payload: navigationParams
});

export type SubjectListActions =
  | ChangeSubjectAction
  | OpenStudentListAction
