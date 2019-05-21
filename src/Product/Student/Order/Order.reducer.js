// @flow
import {
  CHANGE_ORDER_DATA,
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

const initialState = {
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

export default (state: OrderState = initialState, action: any): OrderState => {
  switch (action.type) {
  case CHANGE_ORDER_DATA:
    return {
      ...state,
      ...action.payload
    };
  case CLEAR_ORDER_DATA:
    return initialState;
  default:
    return state;
  }
};
