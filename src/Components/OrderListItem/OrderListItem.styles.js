// @flow
import { StyleSheet } from 'react-native';
import colors from '../colors';

export default StyleSheet.create({
  avatar: {
    height: 80,
    width: 80
  },
  container: {
    width: '100%',
    backgroundColor: colors.greyLight
  },
  subtitle: {
    // marginLeft: 10
  },
  paymentTypeText: {
    // FIXME: use the color of the ListItem title.
    color: colors.grey0
  }
});
