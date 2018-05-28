// @flow
import { StyleSheet } from 'react-native';
import { colors } from '../../../Components';

const { greenDark } = colors;

export { greenDark };
// FIXME: use alphabetic order for style objects.
export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    padding: 10
  },
  datePicker: {
    width: 200
  },
  datePlaceholderText: {
    color: 'black'
  },
  editContainer: {
    paddingBottom: 10,
    backgroundColor: colors.greyLight,
    marginBottom: 20
  },
  input: {
    width: 66
  },
  moneyContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  button: {
margin: 10
  }
});
