// @flow
import { type ApplicationState as S } from '../../types';

export const selectDate = ({ student }: S): string => student.order.date;

export const selectStudent = ({ student }: S): string => student.order.student;

export const selectStartDate = ({ student }: S): string => student.order.startDate;

export const selectEndDate = ({ student }: S): string => student.order.endDate;

export const selectLecturer = ({ student }: S): string => student.order.lecturer;

export const selectMark = ({ student }: S): string => student.order.mark;

export const selectSubject = ({ student }: S): string => student.order.subject;

export const selectKey = ({ student }: S): string => student.order.key;

export const selectIsLoading = ({ student }: S): boolean => student.order.isLoading;
