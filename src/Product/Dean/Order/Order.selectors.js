// @flow
import type { ApplicationState as S, StudentInfo } from '../../types';

export const selectDate = ({ dean }: S): string => dean.order.date;

export const selectEndDate = ({ dean }: S): string => dean.order.endDate;

export const selectIsLoading = ({ dean }: S): boolean => dean.order.isLoading;

export const selectKey = ({ dean }: S): string => dean.order.key;

export const selectLecturer = ({ dean }: S): string => dean.order.lecturer;

export const selectMark = ({ dean }: S): string => dean.order.mark;

export const selectStartDate = ({ dean }: S): string => dean.order.startDate;

export const selectStatus = ({ dean }: S): string => dean.order.status;

export const selectStudent = ({ dean }: S): StudentInfo => dean.order.student;

export const selectSubject = ({ dean }: S): string => dean.order.subject;
