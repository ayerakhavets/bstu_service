// @flow
import React from 'react';
import { View } from 'react-native';
import type { StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import styles from './LabelInput.styles';

// FIXME: add TextInput styles
type LabelInputProps = {
  containerViewStyle?: StyleObj,
  isError?: boolean,
  errorMessage?: string,
  label?: string
}

function LabelInput(props: LabelInputProps) {
  const { containerViewStyle, isError, errorMessage, label, ...rest } = props;

  return (
    <View style={ [styles.container, containerViewStyle] }>
      { label && <FormLabel>{ label }</FormLabel> }
      <FormInput
        { ...rest }
      />
      {errorMessage || isError
        ? <FormValidationMessage>{errorMessage || '* Обязательное поле'}</FormValidationMessage>
        : null
      }
    </View>
  );
}

export default LabelInput;
