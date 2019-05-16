// @flow
import {
  CHANGE_ORDER_DATA,
  CLEAR_ORDER_DATA,
  type PaymentActions
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
  moneyAmount: '',
  paymentType: '',
  isLoading: false,
  status: 'declined'
};

export default (state: OrderState = initialState,
  action: PaymentActions): OrderState => {
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
