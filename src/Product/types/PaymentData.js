// @flow
export type PaymentData = {
  date: string,
  // TODO: use PaymentImage type from Paument reducer.
  image: {
    name: string,
    url: string,
    uri: string,
    path: ?string
  },
  status: string,
  lecturer: string,
  subject: string,
  key: string,
  moneyAmount: string,
  paymentType: string,
}
