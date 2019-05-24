// @flow
import {
  CHANGE_DATE,
  CHANGE_IMAGE,
  CHANGE_SUBJECT_TYPE,
  CHANGE_LECTURER_TYPE,
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
  name: string,
  uri: string,
  url: string
}

export type PaymentState = {
  date: string,
  image: PaymentImage,
  subject: string,
  lecturer: string,
  key: string,
  moneyAmount: string,
  paymentType: string,
  isLoading: boolean,
  status: string
}

const initialState = {
  date: '',
  image: { },
  key: '',
  subject: '',
  lecturer: '',
  moneyAmount: '',
  paymentType: '',
  isLoading: false,
  status: 'declined'
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
        name: action.payload.name,
        uri: action.payload.uri,
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
  case CHANGE_SUBJECT_TYPE:
    return {
      ...state,
      subject: action.payload
    };
  case CHANGE_LECTURER_TYPE:
    return {
      ...state,
      lecturer: action.payload
    };
  case CLEAR_PAYMENT_DATA:
    return initialState;
  case REMOVE_PAYMENT_REQUEST:
  case UPLOAD_PAYMENT_REQUEST:
    return {
      ...state,
      isLoading: true
    };
  case REMOVE_PAYMENT_FAILURE:
  case REMOVE_PAYMENT_SUCCESS:
  case UPLOAD_PAYMENT_FAILURE:
  case UPLOAD_PAYMENT_SUCCESS:
    return {
      ...state,
      isLoading: false
    };
  default:
    return state;
  }
};
