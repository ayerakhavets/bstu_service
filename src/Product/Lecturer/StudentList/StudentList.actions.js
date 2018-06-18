// @flow
import type { StudentInfo } from '../../types';

export const CHANGE_CURRENT_STUDENT = 'CHANGE_CURRENT_STUDENT@Lecturer';
export const LOAD_STUDENT_LIST_FAILURE = 'LOAD_STUDENT_LIST_FAILURE@Lecturer';
export const LOAD_STUDENT_LIST_REQUEST = 'LOAD_STUDENT_LIST_REQUEST@Lecturer';
export const LOAD_STUDENT_LIST_SUCCESS = 'LOAD_STUDENT_LIST_SUCCESS@Lecturer';
export const OPEN_ORDER_LIST = 'OPEN_ORDER_LIST@Lecturer';

export type ChangeCurrentStudentAction = {
  type: typeof CHANGE_CURRENT_STUDENT,
  payload: StudentInfo
};

export type LoadStudentListFailureAction = { type: typeof LOAD_STUDENT_LIST_FAILURE };

export type LoadStudentListRequestAction = { type: typeof LOAD_STUDENT_LIST_REQUEST };

export type LoadStudentListSuccessAction = {
  type: typeof LOAD_STUDENT_LIST_SUCCESS,
  payload: StudentInfo[]
};

export type OpenOrderListAction = {
  type: typeof OPEN_ORDER_LIST,
  payload: StudentInfo
};

export const changeCurrentStudent = (student: StudentInfo): ChangeCurrentStudentAction => ({
  type: CHANGE_CURRENT_STUDENT,
  payload: student
});

export const loadStudentListFailure = (): LoadStudentListFailureAction => ({
  type: LOAD_STUDENT_LIST_FAILURE
});

export const loadStudentListRequest = (): LoadStudentListRequestAction => ({
  type: LOAD_STUDENT_LIST_REQUEST
});

export const loadStudentListSuccess = (
  paymentList: PaymentData[]): LoadStudentListSuccessAction => ({
  type: LOAD_STUDENT_LIST_SUCCESS,
  payload: paymentList
});

export const openOrderList = (student: StudentInfo): OpenOrderListAction => ({
  type: OPEN_ORDER_LIST,
  payload: student
});

export type StudentListActions =
  | LoadStudentListFailureAction
  | LoadStudentListRequestAction
  | LoadStudentListSuccessAction
  | OpenOrderListAction
