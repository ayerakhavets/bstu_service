// @flow
import React from 'react';
import { View } from 'react-native';
import type {
  ViewStyleProp
  // TextStyleProp,
  // ImageStyleProp,
} from 'react-native/Libraries/StyleSheet/StyleSheet';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { I18n } from '@my/framework';
import styles from './LabelInput.styles';
// FIXME: add TextInput styles
type LabelInputProps = {
  containerViewStyle?: ViewStyleProp,
  isError?: boolean,
  errorMessage?: string,
  label?: string
}

// FIXME: DEPRECATED IN FAVOR OF <INPUT> FROM RN-ELEMENTS
function LabelInput(props: LabelInputProps) {
  const { containerViewStyle, isError, errorMessage, label, ...rest } = props;

  return (
    <View style={ [styles.container, containerViewStyle] }>
      { label && <FormLabel>{ label }</FormLabel> }
      <FormInput
        { ...rest }
      />
      {errorMessage || isError
        ? <FormValidationMessage>{errorMessage || I18n.translate('components.field')}</FormValidationMessage>
        : null
      }
    </View>
  );
}

export default LabelInput;
