// @flow
import firebase from 'react-native-firebase';

export const updateStudentInfo = (updates: Object) => firebase.database().ref('').update(updates);

export const addCheck = async (uid: string, paymentInfo: Object) => {
  // $FlowFixMe incompatable with Promise
  const key = await firebase.database().ref('').child('checks').push().key;

  const updates = {};
  updates[`/checks/${uid}/${key}`] = paymentInfo;
  return firebase.database().ref('').update(updates);
};

export const getCheckList =
    // $FlowFixMe function once() requires another argument.
    (uid: string): UserInfo => firebase.database().ref(`/checks/${uid}`).once('value')
    // eslint-disable-next-line no-underscore-dangle
      .then(response => response);
