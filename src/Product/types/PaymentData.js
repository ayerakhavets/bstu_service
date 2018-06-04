// @flow
export type PaymentData = {
  date: string,
  image: {
    name: string,
    url: string
  },
  isResolved: boolean,
  key: string,
  moneyAmount: string,
  paymentType: string,
}
