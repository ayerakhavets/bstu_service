// @flow
import React, { Component, Fragment } from 'react';
import {
  ActivityIndicator,
  Image,
  Text,
  TextInput,
  View
} from 'react-native';
import { connect } from 'react-redux';
import DatePicker from 'react-native-datepicker';
import { Icon } from 'react-native-elements';
import { Screen, LabelPicker, MyButton, type PickerItem } from '../../../Components';
import {
  addPaymentRequest,
  changeDate,
  changeMoneyAmount,
  changePaymentType,
  openImagePicker
} from './Payment.actions';
import type { PaymentImage } from './Payment.reducer';
import {
  selectDate,
  selectImage,
  selectIsLoading,
  selectMappedPaymentTypes,
  selectMoneyAmount,
  selectPaymentType
} from './Payment.selectors';
import styles, { colors } from './Payment.styles';

type PaymentProps = {
  date: string,
  image: PaymentImage,
  isLoading: boolean,
  moneyAmount: string,
  paymentType: string,
  paymentTypes: PickerItem[],
  addPaymentRequest: () => void,
  onChangeMoneyAmount: () => void,
  onChangePaymentType: () => void,
  onDateChange: () => void,
  onOpenImagePicker: () => void
}

// FIXME: use https://github.com/wix/react-native-calendars instead of DatePicker.
// eslint-disable-next-line react/prefer-stateless-function
class Payment extends Component<PaymentProps> {
  render() {
    const imageSource = this.props.image.url || `file://${this.props.image.path}`;
    const submitButtonText = this.props.image.url
      ? 'Сохранить'
      : 'Добавить';

    return (
      <Screen>
        { this.props.isLoading
          ? <ActivityIndicator size="large" />
          : <Fragment>
            <Image
              source={{ uri: imageSource }}
              style={ styles.image }
            />
            <View style={ styles.container }>
              <View style={ styles.rowContainer }>
                <View style={ styles.inputContainer }>
                  <TextInput
                    keyboardType="numeric"
                    maxLength={ 8 }
                    style={ styles.input }
                    value={ this.props.moneyAmount }
                    onChangeText={ this.props.onChangeMoneyAmount }
                  />
                  <Text>BYN</Text>
                </View>
                <Icon
                  color={ colors.greenDark }
                  containerViewStyle={ styles.buttonIcon }
                  name="insert-photo"
                  raised
                  reverse
                  size={ 20 }
                  onPress={ this.props.onOpenImagePicker }
                />
              </View>
              <DatePicker
                cancelBtnText="Закрыть"
                confirmBtnText="Ок"
                customStyles={{
                  placeholderText: styles.datePlaceholderText
                }}
                date={ this.props.date }
                format="DD MM YYYY"
                placeholder="Дата платежа"
                style={ styles.datePicker }
                onDateChange={ this.props.onDateChange }
              />
              <LabelPicker
                label="Тип услуги"
                pickerItems={ this.props.paymentTypes }
                selectedValue={ this.props.paymentType }
                onValueChange={ this.props.onChangePaymentType }
              />
              <MyButton
                containerViewStyle={ styles.buttonAdd }
                title={ submitButtonText }
                onPress={ this.props.addPaymentRequest }
              />
            </View>
          </Fragment> }
      </Screen>
    );
  }
}

const mapStateToProps = state => ({
  date: selectDate(state),
  image: selectImage(state),
  isLoading: selectIsLoading(state),
  moneyAmount: selectMoneyAmount(state),
  paymentType: selectPaymentType(state),
  paymentTypes: selectMappedPaymentTypes(state)
});

const mapDispatchToProps = {
  addPaymentRequest,
  onDateChange: changeDate,
  onChangeMoneyAmount: changeMoneyAmount,
  onChangePaymentType: changePaymentType,
  onOpenImagePicker: openImagePicker
};

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
