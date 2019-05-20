// @flow
import type { StudentInfo } from '../../types';

export const CHANGE_CURRENT_STUDENT = 'CHANGE_CURRENT_STUDENT@Dean';
export const LOAD_STUDENT_LIST_FAILURE = 'LOAD_STUDENT_LIST_FAILURE@Dean';
export const LOAD_STUDENT_LIST_REQUEST = 'LOAD_STUDENT_LIST_REQUEST@Dean';
export const LOAD_STUDENT_LIST_SUCCESS = 'LOAD_STUDENT_LIST_SUCCESS@Dean';
export const OPEN_PAYMENT_LIST = 'OPEN_PAYMENT_LIST@Dean';

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

export type OpenPaymentListAction = {
  type: typeof OPEN_PAYMENT_LIST,
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

export const loadStudentListSuccess = (paymentList: StudentInfo[]): LoadStudentListSuccessAction =>
  ({
    type: LOAD_STUDENT_LIST_SUCCESS,
    payload: paymentList
  });

// FIXME: think about it.
export const openPaymentList = (student: StudentInfo): OpenPaymentListAction => ({
  type: OPEN_PAYMENT_LIST,
  payload: student
});

export type StudentListActions =
  | LoadStudentListFailureAction
  | LoadStudentListRequestAction
  | LoadStudentListSuccessAction
  | OpenPaymentListAction
