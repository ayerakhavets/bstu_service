// @flow
import React from 'react';
import type { StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import { Button } from 'react-native-elements';

import styles from './MyButton.styles';
import colors from '../colors';

type ButtonProps = {
  containerViewStyle?: StyleObj
}

function MyButton(props: ButtonProps) {
  const { containerViewStyle, ...rest } = props;

  return (
    <Button
      backgroundColor={ colors.greenDark }
      borderRadius={ 3 }
      containerViewStyle={ [styles.container, containerViewStyle] }
      raised
      { ...rest }
    />
  );
}

export default MyButton;
