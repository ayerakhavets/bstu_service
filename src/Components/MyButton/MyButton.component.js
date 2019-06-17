// @flow
import React from 'react';
import { type ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';
import { Button } from 'react-native-elements';

import styles from './MyButton.styles';
import colors from '../colors';

type ButtonProps = {
  containerViewStyle?: ViewStyleProp
}

function MyButton(props: ButtonProps) {
  const { containerViewStyle, ...rest } = props;

  return (
    <Button
      buttonStyle={{
        backgroundColor: colors.greenDark
      }}
      borderRadius={ 3 }
      containerStyle={ [styles.container, containerViewStyle] }
      raised
      { ...rest }
    />
  );
}

export default MyButton;
