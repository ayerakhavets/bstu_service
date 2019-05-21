// @flow
import { StyleSheet } from 'react-native';
import { colors } from '@my/components';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
    backgroundColor: colors.white,
    padding: 10
  },
  emptyItemContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  flatList: {
    marginTop: 10,
    width: '100%'
  }
});
