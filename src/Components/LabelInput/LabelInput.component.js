// @flow
import React from 'react';
import { Text, TextInput, View } from 'react-native';
import type { StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import styles from './LabelInput.styles';

type LabelInputProps = {
  value?: string,
  label: string,
  style?: StyleObj,
  onChangeText: () => void
}

function LabelInput(props: LabelInputProps) {
  const { value, label, style, onChangeText } = props;

  return (
    <View
      style={ [styles.container, style] }
    >
      <Text>{ label }</Text>
      <TextInput
        defaultValue={ value }
        onChangeText={ onChangeText }
      />
    </View>
  );
}

export default LabelInput;
