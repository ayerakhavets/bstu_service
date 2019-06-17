// @flow
import firebase from 'react-native-firebase';


const callbackOn = response => response;

// FIXME: method is not used.
export const subscribeToOrdersUpdate = (uid: string) =>
  firebase.database().ref(`/orders/${uid}`).on('value', callbackOn);
