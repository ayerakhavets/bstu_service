// @flow
import {
  CHANGE_ORDER_DATA,
  CHANGE_DATE,
  CHANGE_MARK,
  CLOSE_ORDER_FAILURE,
  CLOSE_ORDER_REQUEST,
  CLOSE_ORDER_SUCCESS,
  APPROVE_ORDER_FAILURE,
  APPROVE_ORDER_REQUEST,
  APPROVE_ORDER_SUCCESS
} from './Order.actions';

export type PaymentImage = {
  name: string,
  path: string,
  url: string
}

export type OrderState = {
  date: string,
  startDate: string,
  endDate: string,
  subject: string,
  lecturer: string,
  image: PaymentImage,
  key: string,
  mark: string,
  moneyAmount: string,
  paymentType: string,
  isLoading: boolean,
  status: string
}

const initialState = {
  date: '',
  startDate: '',
  endDate: '',
  subject: '',
  lecturer: '',
  image: {
    name: '',
    path: '',
    url: ''
  },
  key: '',
  mark: '',
  moneyAmount: '',
  paymentType: '',
  isLoading: false,
  status: 'declined'
};

export default (state: OrderState = initialState, action: any): OrderState => {
  switch (action.type) {
  case CHANGE_ORDER_DATA:
    return {
      ...state,
      ...action.payload
    };
  case CHANGE_MARK:
    return {
      ...state,
      mark: action.payload
    };
  case CHANGE_DATE:
    return {
      ...state,
      date: action.payload
    };
  case CLOSE_ORDER_FAILURE:
    return {
      ...state,
      isLoading: false
    };
  case CLOSE_ORDER_REQUEST:
    return {
      ...state,
      isLoading: true
    };
  case CLOSE_ORDER_SUCCESS:
    return {
      ...state,
      isLoading: false
    };
  case APPROVE_ORDER_FAILURE:
    return {
      ...state,
      isLoading: false
    };
  case APPROVE_ORDER_REQUEST:
    return {
      ...state,
      isLoading: true
    };
  case APPROVE_ORDER_SUCCESS:
    return {
      ...state,
      isLoading: false
    };
  default:
    return state;
  }
};
