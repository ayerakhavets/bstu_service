// @flow
import { StyleSheet } from 'react-native';
import { colors } from '@my/components';

export { colors };

export default StyleSheet.create({
  buttonAdd: {
    marginTop: 10,
    width: '100%'
  },
  buttonIcon: {
    alignSelf: 'flex-end',
    margin: 10,
    width: 50
  },
  container: {
    alignItems: 'center',
    backgroundColor: colors.greyLight,
    borderRadius: 3,
    marginBottom: 10,
    padding: 10,
    width: '100%'
  },
  datePicker: {
    marginTop: 10,
    alignSelf: 'flex-start',
    marginLeft: 18,
    width: 200
  },
  datePlaceholderText: {
    color: colors.black
  },
  image: {
    borderWidth: 1,
    borderColor: colors.grey,
    height: 400,
    marginBottom: 10,
    resizeMode: 'contain',
    width: '100%'
  },
  input: {
    width: 200
  },
  rowContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  errorText: {
    color: 'red',
    fontSize: 12
  }
});
