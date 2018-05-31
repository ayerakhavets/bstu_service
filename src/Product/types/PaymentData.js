// @flow
export type PaymentData = {
  date: string,
  image: {
    name: string,
    url: string
  },
  key: string,
  moneyAmount: string,
  paymentType: string,
  isResolved: boolean
}
