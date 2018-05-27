// @flow
import { StyleSheet } from 'react-native';
import { colors } from '../../../Components';

// FIXME: use alphabetic order for style objects.
export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: '100%',
    padding: 10,
    paddingBottom: 20
  },
  datePicker: {
    width: 200
  },
  datePlaceholderText: {
    color: 'black'
  },
  editContainer: {
    paddingLeft: 10,
    backgroundColor: colors.greyLight
  },
  input: {
    width: 80
  },
  moneyContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  button: {
    alignSelf: 'flex-end',
    height: 40,
    width: 140
  }
});
