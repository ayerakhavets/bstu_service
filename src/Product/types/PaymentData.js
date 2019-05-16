// @flow
export type PaymentData = {
  date: string,
  image: {
    name: string,
    url: string,
    path: ?string
  },
  status: string,
  lecturer: string,
  subject: string,
  key: string,
  moneyAmount: string,
  paymentType: string,
}
