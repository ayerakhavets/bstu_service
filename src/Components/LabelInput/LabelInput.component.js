// @flow
import React from 'react';
import { View } from 'react-native';
import type { StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import styles from './LabelInput.styles';

type LabelInputProps = {
  containerViewStyle?: StyleObj,
  errorMessage?: string,
  label?: string
}

function LabelInput(props: LabelInputProps) {
  const { containerViewStyle, errorMessage, label, ...rest } = props;

  return (
    <View style={ [styles.container, containerViewStyle] }>
      { label && <FormLabel>{ label }</FormLabel> }
      <FormInput
        { ...rest }
      />
      { errorMessage
        ? <FormValidationMessage>{ errorMessage }</FormValidationMessage>
        : null }
    </View>
  );
}

export default LabelInput;
