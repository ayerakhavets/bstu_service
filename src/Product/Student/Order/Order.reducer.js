// @flow
import { handleActions } from 'redux-actions';
import {
  CHANGE_ORDER_DATA, type ChangeOrderData,
  CLEAR_ORDER_DATA
} from './Order.actions';
import { type StudentInfo } from '../../types';

export type OrderState = {
  date: string,
  endDate: string,
  isLoading: boolean,
  key: string,
  lecturer: string,
  mark: string,
  startDate: string,
  status: string,
  student: StudentInfo,
  subject: string
}
type S = OrderState;

const initialState: S = {
  date: '',
  endDate: '',
  isLoading: false,
  key: '',
  lecturer: '',
  mark: '',
  startDate: '',
  status: '',
  student: {},
  subject: ''
};

export default handleActions({
  [CHANGE_ORDER_DATA]: (state: S, { payload }: ChangeOrderData) => ({
    ...state,
    ...payload
  }),
  [CLEAR_ORDER_DATA]: () => initialState
}, initialState);
