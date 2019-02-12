// @flow
import type { ApplicationState } from '../../types';

export const selectDate = ({ student }: ApplicationState): string =>
  student.order.date;

export const selectStudent = ({ student }: ApplicationState): string =>
  student.order.student;

export const selectStartDate = ({ student }: ApplicationState): string =>
  student.order.startDate;

export const selectEndDate = ({ student }: ApplicationState): string =>
  student.order.endDate;

export const selectLecturer = ({ student }: ApplicationState): string =>
  student.order.lecturer;

export const selectStatus = ({ student }: ApplicationState): string =>
  student.order.status;

export const selectMark = ({ student }: ApplicationState): string =>
  student.order.mark;

export const selectSubject = ({ student }: ApplicationState): string =>
  student.order.subject;

export const selectKey = ({ student }: ApplicationState): string =>
  student.order.key;

export const selectIsLoading = ({ student }: ApplicationState): boolean =>
  student.order.isLoading;
