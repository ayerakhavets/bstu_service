// @flow
import { StyleSheet } from 'react-native';
import colors from '../colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.greenLight,
    borderBottomColor: colors.greyLight,
    borderBottomWidth: 1,
    justifyContent: 'center',
    height: 57,
    paddingLeft: 16,
    width: '100%'
  },
  text: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold'
  }
});
