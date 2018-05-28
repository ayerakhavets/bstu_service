// @flow
import firebase from 'react-native-firebase';
import type { UserInfo } from '../types';

// FIXME: add type for updates.
export const updateStudentInfo = (updates: Object) => firebase.database().ref('').update(updates);

// FIXME: add type for image and paymentInfo.
export const addCheck = async (image: Object, paymentInfo: Object, uid: string) => {
  // $FlowFixMe incompatable with Promise
  const key = await firebase.database().ref('').child('checks').push().key;

  const { localPath, name } = image;
  if (localPath && name) {
    await firebase.storage().ref(`${key}/${name}`).putFile(localPath);
    console.log(1);
  }

  const updates = {};
  updates[`/checks/${uid}/${key}`] = paymentInfo;
  await firebase.database().ref('').update(updates);
  console.log(2);
};

export const getCheckList =
    // function once() requires another argument.
    (uid: string): UserInfo => firebase.database().ref(`/checks/${uid}`).once('value')
    // eslint-disable-next-line no-underscore-dangle
      .then(response => response);
