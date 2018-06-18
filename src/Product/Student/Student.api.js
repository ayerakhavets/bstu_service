// @flow
import firebase from 'react-native-firebase';
import type { OrderData, PaymentData, StudentInfo } from '../types';

export const updateStudentInfo = (studentInfo: StudentInfo): Promise<void> => {
  const updates = {};
  updates[`/students/${studentInfo.uid}`] = studentInfo;
  updates[`/specialties/${studentInfo.specialty}/${studentInfo.uid}`] = studentInfo;
  return firebase.database().ref('').update(updates);
};

export const getPaymentImageUrl = (storageImagePath: string): Promise<string> =>
  firebase.storage().ref(storageImagePath).getDownloadURL();

// $FlowFixMe property `key` is missing in `Promise`.
export const getNewPaymentKey = () => firebase.database().ref('').child('payments').push().key;

export const addPayment = async (uid: string, paymentInfo: PaymentData,
  storageImagePath: string, localImagePath: string): Promise<void> => {
  // $FlowFixMe string is incompatible with object
  await firebase.storage().ref(storageImagePath).putFile(localImagePath);

  const updates = {};
  updates[`/payments/${uid}/${paymentInfo.key}`] = paymentInfo;
  // FIXME: use more specific methods to add a record.
  // eslint-disable-next-line consistent-return
  return firebase.database().ref('').update(updates);
};

export const updatePayment = async (uid: string, paymentInfo: PaymentData,
  storageImagePath: string, localImagePath: ?string): Promise<void> => {
  if (localImagePath) {
    // $FlowFixMe string is incompatible with object.
    await firebase.storage().ref(storageImagePath).putFile(localImagePath);
  }

  const updates = {};
  updates[`/payments/${uid}/${paymentInfo.key}`] = paymentInfo;
  // FIXME: use more specific methods to add a record.
  // eslint-disable-next-line consistent-return
  return firebase.database().ref('').update(updates);
};

export const removePayment = async (
  databasePath: string, storagePath: string): Promise<void> => {
  await firebase.storage().ref(`${storagePath}`).delete();
  return firebase.database().ref(`/payments/${databasePath}`).remove();
};

export const getPaymentList = (uid: string): PaymentData[] =>
  // $FlowFixMe function once() requires another argument.
  firebase.database().ref(`/payments/${uid}`).once('value')
    // eslint-disable-next-line no-underscore-dangle
    .then(response => response._value);


export const getOrderList = (uid: string): OrderData[] =>
  // $FlowFixMe function once() requires another argument.
  firebase.database().ref(`/orders/${uid}`)
    .once('value')
    .then(response => response._value); // eslint-disable-line no-underscore-dangle
