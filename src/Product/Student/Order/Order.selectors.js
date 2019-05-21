// @flow
import type { ApplicationState as S, StudentInfo } from '../../types';

export const selectDate = ({ student }: S): string => student.order.date;

export const selectEndDate = ({ student }: S): string => student.order.endDate;

export const selectIsLoading = ({ student }: S): boolean => student.order.isLoading;

export const selectKey = ({ student }: S): string => student.order.key;

export const selectLecturer = ({ student }: S): string => student.order.lecturer;

export const selectMark = ({ student }: S): string => student.order.mark;

export const selectStartDate = ({ student }: S): string => student.order.startDate;

export const selectStatus = ({ student }: S): string => student.order.status;

export const selectStudent = ({ student }: S): StudentInfo => student.order.student;

export const selectSubject = ({ student }: S): string => student.order.subject;
