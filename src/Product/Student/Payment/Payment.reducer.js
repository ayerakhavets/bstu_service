// @flow
import {
  CHANGE_DATE,
  CHANGE_IMAGE,
  CHANGE_MONEY_AMOUNT,
  CHANGE_PAYMENT_DATA,
  CHANGE_PAYMENT_TYPE,
  CLEAR_PAYMENT_DATA,
  REMOVE_PAYMENT_FAILURE,
  REMOVE_PAYMENT_REQUEST,
  REMOVE_PAYMENT_SUCCESS,
  UPLOAD_PAYMENT_FAILURE,
  UPLOAD_PAYMENT_REQUEST,
  UPLOAD_PAYMENT_SUCCESS,
  type PaymentActions
} from './Payment.actions';

export type PaymentImage = {
  path: string,
  name: string,
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
    path: '',
    name: '',
    url: ''
  },
  key: '',
  moneyAmount: '',
  paymentType: '',
  isLoading: false,
  isResolved: false,
  // TODO: use server data instead of the mocked one.
  paymentTypes: ['', 'Академическая задолженность', 'Обучение', 'Общежитие', 'Пеня']
};

export default (
  state: PaymentState = initialState,
  action: PaymentActions): PaymentState => {
  switch (action.type) {
  case CHANGE_DATE:
    return {
      ...state,
      date: action.payload
    };
  case CHANGE_IMAGE:
    return {
      ...state,
      image: {
        path: action.payload.path,
        name: action.payload.name,
        url: action.payload.url
      }
    };
  case CHANGE_MONEY_AMOUNT:
    return {
      ...state,
      moneyAmount: action.payload
    };
  case CHANGE_PAYMENT_DATA:
    return {
      ...state,
      ...action.payload,
      image: {
        ...state.image,
        ...action.payload.image
      }
    };
  case CHANGE_PAYMENT_TYPE:
    return {
      ...state,
      paymentType: action.payload
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
  case UPLOAD_PAYMENT_FAILURE:
    return {
      ...state,
      isLoading: false
    };
  case UPLOAD_PAYMENT_SUCCESS:
    return {
      ...state,
      isLoading: false
    };
  case UPLOAD_PAYMENT_REQUEST:
    return {
      ...state,
      isLoading: true
    };
  default:
    return state;
  }
};
