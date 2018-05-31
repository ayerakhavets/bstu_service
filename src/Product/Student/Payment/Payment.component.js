// @flow
import React, { Component, Fragment } from 'react';
import {
  ActivityIndicator,
  Image,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import DatePicker from 'react-native-datepicker';
import { Icon } from 'react-native-elements';
import {
  LabelInput,
  LabelPicker,
  MyButton,
  Screen,
  type PickerItem
} from '../../../Components';
import {
  uploadPaymentRequest,
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
  // FIXME: use proper type for navigation.
  navigation: Objcet,
  paymentType: string,
  paymentTypes: PickerItem[],
  uploadPaymentRequest: (type) => void,
  onChangeMoneyAmount: () => void,
  onChangePaymentType: () => void,
  onDateChange: () => void,
  onOpenImagePicker: () => void
}

// FIXME: use https://github.com/wix/react-native-calendars instead of DatePicker.
// eslint-disable-next-line react/prefer-stateless-function
class Payment extends Component<PaymentProps> {
  addPayment = () => this.props.uploadPaymentRequest('ADD');

  editPayment = () => this.props.uploadPaymentRequest('EDIT')

  render() {
    const { date, image, moneyAmount, navigation, paymentType } = this.props;
    // FIXME: use constants for params.
    const screenType = navigation.getParam('intent', 'ADD');
    const imageSource = image.url || `file://${this.props.image.path}`;
    const submitButtonText = screenType === 'EDIT'
      ? 'Сохранить'
      : 'Добавить';
    const isDataEmpty = !paymentType || !moneyAmount || !date || !image.name;

    return (
      <Screen>
        { this.props.isLoading
          ? <ActivityIndicator size="large" />
          : <Fragment>
            <Image
              source={{ uri: imageSource }}
              style={ styles.image }
              resizeMethod="resize"
            />
            <View style={ styles.container }>
              <View style={ styles.rowContainer }>
                <View style={ styles.inputContainer }>
                  <LabelInput
                    keyboardType="numeric"
                    maxLength={ 8 }
                    containerViewStyle={ styles.input }
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
                date={ date }
                format="DD MM YYYY"
                placeholder="Дата платежа"
                style={ styles.datePicker }
                onDateChange={ this.props.onDateChange }
              />
              <LabelPicker
                isError={ isDataEmpty }
                errorMessage="* Заполните все поля"
                label="Тип услуги"
                pickerItems={ this.props.paymentTypes }
                selectedValue={ this.props.paymentType }
                onValueChange={ this.props.onChangePaymentType }
              />
              <MyButton
                containerViewStyle={ styles.buttonAdd }
                title={ submitButtonText }
                onPress={ screenType === 'EDIT'
                  ? this.editPayment
                  : this.addPayment }
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
  uploadPaymentRequest,
  onDateChange: changeDate,
  onChangeMoneyAmount: changeMoneyAmount,
  onChangePaymentType: changePaymentType,
  onOpenImagePicker: openImagePicker
};

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
