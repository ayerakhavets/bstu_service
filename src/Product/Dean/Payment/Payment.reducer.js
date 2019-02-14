// @flow
import {
  CHANGE_PAYMENT_DATA,
  CHANGE_START_DATE,
  CHANGE_END_DATE,
  APPROVE_PAYMENT_FAILURE,
  APPROVE_PAYMENT_REQUEST,
  APPROVE_PAYMENT_SUCCESS,
  DECLINE_PAYMENT_FAILURE,
  DECLINE_PAYMENT_REQUEST,
  DECLINE_PAYMENT_SUCCESS,
  CLEAR_PAYMENT_DATA,
  REMOVE_PAYMENT_FAILURE,
  REMOVE_PAYMENT_REQUEST,
  REMOVE_PAYMENT_SUCCESS,
  type PaymentActions
} from './Payment.actions';

export type PaymentImage = {
  name: string,
  path: string,
  url: string
}

export type PaymentState = {
  date: string,
  startDate: string,
  endDate: string,
  subject: string,
  lecturer: string,
  image: PaymentImage,
  key: string,
  moneyAmount: string,
  paymentType: string,
  isLoading: boolean,
  status: string,
  paymentTypes: string[]
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
  moneyAmount: '',
  paymentType: '',
  paymentTypes: [], // was added without any check.
  isLoading: false,
  status: 'declined'
};

export default (
  state: PaymentState = initialState,
  action: PaymentActions): PaymentState => {
  switch (action.type) {
  case CHANGE_PAYMENT_DATA:
    return {
      ...state,
      ...action.payload,
      image: {
        ...state.image,
        ...action.payload.image
      }
    };
  case CHANGE_START_DATE:
    return {
      ...state,
      startDate: action.payload
    };
  case CHANGE_END_DATE:
    return {
      ...state,
      endDate: action.payload
    };
  case CLEAR_PAYMENT_DATA:
    return initialState;
  case REMOVE_PAYMENT_FAILURE:
    return {
      ...state,
      isLoading: false
    };
  case REMOVE_PAYMENT_REQUEST:
    return {
      ...state,
      isLoading: true
    };
  case REMOVE_PAYMENT_SUCCESS:
    return {
      ...state,
      isLoading: false
    };
  case APPROVE_PAYMENT_FAILURE:
    return {
      ...state,
      isLoading: false
    };
  case APPROVE_PAYMENT_REQUEST:
    return {
      ...state,
      isLoading: true
    };
  case APPROVE_PAYMENT_SUCCESS:
    return {
      ...state,
      isLoading: false
    };
  case DECLINE_PAYMENT_FAILURE:
    return {
      ...state,
      isLoading: false
    };
  case DECLINE_PAYMENT_REQUEST:
    return {
      ...state,
      isLoading: true
    };
  case DECLINE_PAYMENT_SUCCESS:
    return {
      ...state,
      isLoading: false
    };
  default:
    return state;
  }
};
