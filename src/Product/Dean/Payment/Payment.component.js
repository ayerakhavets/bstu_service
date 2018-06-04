// @flow
import React, { Component, Fragment } from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import {
  HeaderRight,
  LabelInput,
  LabelPicker,
  MyButton,
  Screen,
  type PickerItem
} from '../../../Components';
import {
  changeDate,
  changeMoneyAmount,
  changePaymentType,
  openImagePicker,
  removePaymentRequest,
  uploadPaymentRequest,
  type UploadPaymentType
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
  navigation: Object,
  paymentType: string,
  paymentTypes: PickerItem[],
  removePaymentRequest: () => void,
  uploadPaymentRequest: (type: UploadPaymentType) => void
}

// FIXME: use https://github.com/wix/react-native-calendars instead of DatePicker.
class Payment extends Component<PaymentProps> {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    const onPress = () => Alert.alert(
      'Удаление',
      'Подтвердите удаление платежа',
      [
        { text: 'Отменить', style: 'cancel' },
        { text: 'Удалить', onPress: params.removePayment }
      ]
    );

    return (
    // eslint-disable-next-line react/jsx-no-bind
      <HeaderRight iconName="delete" onIconPress={ onPress } />
    );
  };

  componentWillMount() {
    this.props.navigation.setParams({ removePayment: this.props.removePaymentRequest });
  }

  editPayment = () => this.props.uploadPaymentRequest('EDIT')

  render() {
    const { date, image, moneyAmount, navigation, paymentType } = this.props;
    // FIXME: use constants for params.
    const screenType = navigation.getParam('intent', 'ADD');
    const imageSource = image.url || `file://${image.path}`;
    const submitButtonText = screenType === 'EDIT'
      ? 'Сохранить изменения'
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
                  />
                  <Text>BYN</Text>
                </View>
              </View>
              <LabelInput
                keyboardType="numeric"
                maxLength={ 8 }
                containerViewStyle={ styles.input }
                value={ this.props.date }
                editable={ false }
              />
              <LabelPicker
                enabled={ false }
                isError={ isDataEmpty }
                errorMessage="* Заполните все поля"
                label="Тип услуги"
                pickerItems={ this.props.paymentTypes }
                selectedValue={ this.props.paymentType }
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
  onDateChange: changeDate,
  onChangeMoneyAmount: changeMoneyAmount,
  onChangePaymentType: changePaymentType,
  onOpenImagePicker: openImagePicker,
  removePaymentRequest,
  uploadPaymentRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
