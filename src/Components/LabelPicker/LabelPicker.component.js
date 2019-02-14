// @flow
import React from 'react';
import { Picker, View } from 'react-native';
import { FormLabel, FormValidationMessage } from 'react-native-elements';
import type { ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';
import styles from './LabelPicker.styles';

export type PickerItem = {
  label: string,
  value: string
}

// FIXME: add Picker styles.
type LabelPickerProps = {
  errorMessage?: string,
  isError?: boolean,
  pickerItems: PickerItem[],
  label: string,
  selectedValue?: string,
  style?: ViewStyleProp,
  onValueChange: () => void
}

function LabelPicker(props: LabelPickerProps) {
  const {
    errorMessage,
    isError,
    label,
    pickerItems,
    selectedValue,
    style,
    onValueChange,
    ...rest
  } = props;

  const pickerItemComponents: any = pickerItems
    ? pickerItems.map((picker, index) =>
      // eslint-disable-next-line react/no-array-index-key
      <Picker.Item key={ index } label={ picker.label } value={ picker.value } />)
    : null;

  return (
    <View style={ [styles.container, style] }>
      <FormLabel>{ label }</FormLabel>
      <Picker
        style={ styles.picker }
        selectedValue={ selectedValue }
        onValueChange={ onValueChange }
        { ...rest }
      >
        { pickerItemComponents }
      </Picker>
      {isError
        ? <FormValidationMessage>{errorMessage || '* Обязательное поле'}</FormValidationMessage>
        : null
      }
    </View>
  );
}

export default LabelPicker;
