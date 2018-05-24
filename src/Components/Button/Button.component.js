// @flow
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import type { StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import styles from './Button.styles';

type ButtonProps = {
  style?: StyleObj,
  title: string,
  onPress: () => void
}

function Button(props: ButtonProps) {
  const { style, title, onPress } = props;

  return (
    <TouchableOpacity
      style={ [styles.button, style] }
      onPress={ onPress }
    >
      <Text style={ styles.text }>{ title }</Text>
    </TouchableOpacity>
  );
}

export default Button;
