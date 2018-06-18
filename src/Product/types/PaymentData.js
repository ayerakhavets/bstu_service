// @flow
export type PaymentData = {
  date: string,
  image: {
    name: string,
    url: string
  },
  status: string,
  key: string,
  moneyAmount: string,
  paymentType: string,
}
