// @flow
import {
  ADD_PAYMENT_FAILURE,
  ADD_PAYMENT_REQUEST,
  ADD_PAYMENT_SUCCESS,
  CHANGE_DATE,
  CHANGE_IMAGE,
  CHANGE_MONEY_AMOUNT,
  CHANGE_PAYMENT_DATA,
  CHANGE_PAYMENT_TYPE,
  CLEAR_PAYMENT_DATA,
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
  case ADD_PAYMENT_FAILURE:
    return {
      ...state,
      isLoading: false
    };
  case ADD_PAYMENT_SUCCESS:
    return {
      ...state,
      isLoading: false
    };
  case ADD_PAYMENT_REQUEST:
    return {
      ...state,
      isLoading: true
    };
  case CHANGE_DATE:
    return {
      ...state,
      date: action.payload
    };
  case CHANGE_IMAGE:
    return {
      ...state,
      image: {
        path: action.payload.path || state.image.path,
        name: action.payload.name || state.image.name,
        url: action.payload.url || state.image.url
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
        url: action.payload.pathToImage
      }
    };
  case CHANGE_PAYMENT_TYPE:
    return {
      ...state,
      paymentType: action.payload
    };
  case CLEAR_PAYMENT_DATA:
    return initialState;
  default:
    return state;
  }
};
