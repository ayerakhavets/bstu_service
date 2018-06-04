// @flow
import {
  CHANGE_PAYMENT_DATA,
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
  image: PaymentImage,
  key: string,
  moneyAmount: string,
  paymentType: string,
  isLoading: boolean,
  isResolved: boolean,
  paymentTypes: string[]
}

const initialState = {
  date: '',
  image: {
    name: '',
    path: '',
    url: ''
  },
  key: '',
  moneyAmount: '',
  paymentType: '',
  isLoading: false,
  isResolved: false
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
