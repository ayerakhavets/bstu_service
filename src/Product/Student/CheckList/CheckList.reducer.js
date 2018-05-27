// @flow
import {
  CHANGE_DATE,
  CHANGE_MONEY_AMOUNT,
  CHANGE_PAYMENT_TYPE,
  type CheckListActions
} from './CheckList.actions';

export type PaymentInfo = {
  date: string,
  image: string,
  moneyAmount: string,
  paymentType: string
}

export type CheckListState = {
  check: PaymentInfo,
  checks: Object[],
  paymentTypes: string[]
}

const initialState = {
  check: {
    date: '',
    image: '',
    moneyAmount: '',
    paymentType: ''
  },
  // TODO: use server data instead of the mocked one.
  paymentTypes: ['Академическая задолженность', 'Обучение', 'Общежитие', 'Пеня'],
  checks: []
};

export default (
  state: CheckListState = initialState,
  action: CheckListActions): CheckListState => {
  switch (action.type) {
  case CHANGE_DATE:
    return {
      ...state,
      check: {
        ...state.check,
        date: action.payload
      }
    };
  case CHANGE_MONEY_AMOUNT:
    return {
      ...state,
      check: {
        ...state.check,
        moneyAmount: action.payload
      }
    };
  case CHANGE_PAYMENT_TYPE:
    return {
      ...state,
      check: {
        ...state.check,
        paymentType: action.payload
      }
    };
  default:
    return state;
  }
};

