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
import DatePicker from 'react-native-datepicker';
import { Icon as RNIcon } from 'react-native-elements';
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
  сhangeSubject,
  сhangeLecturer,
  openImagePicker,
  removePaymentRequest,
  uploadPaymentRequest,
  type UploadPaymentType
} from './Payment.actions';
import type { PaymentImage } from './Payment.reducer';
import {
  selectDate,
  selectLecturer,
  selectSubject,
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
  lecturer: string,
  subject: string,
  moneyAmount: string,
  // FIXME: use proper type for navigation.
  navigation: Object,
  paymentType: string,
  paymentTypes: PickerItem[],
  onChangeMoneyAmount: () => void,
  onChangePaymentType: () => void,
  onChangeSubject: (subject: string) => void,
  onChangeLecturer: (lecturer: string) => void,
  onDateChange: () => void,
  onOpenImagePicker: () => void,
  removePaymentRequest: () => void,
  uploadPaymentRequest: (type: UploadPaymentType) => void
}

// FIXME: use https://github.com/wix/react-native-calendars instead of DatePicker.
class Payment extends Component<PaymentProps> {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    const screenType = navigation.getParam('intent', 'ADD');
    const onPress = () => Alert.alert(
      'Удаление',
      'Подтвердите удаление платежа',
      [
        { text: 'Отменить', style: 'cancel' },
        { text: 'Удалить', onPress: params.removePayment }
      ]
    );

    return {
      headerRight: screenType === 'EDIT'
        // eslint-disable-next-line react/jsx-no-bind
        ? <HeaderRight iconName="delete" onIconPress={ onPress } />
        : null
    };
  };

  componentWillMount() {
    this.props.navigation.setParams({ removePayment: this.props.removePaymentRequest });
  }

  addPayment = () => this.props.uploadPaymentRequest('ADD');

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
    console.log('-==', this.props.subject,
      this.props.onChangeSubject,
      this.props.lecturer,
      this.props.onChangeLecturer);
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
                <RNIcon
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
                label="Тип услуги"
                pickerItems={ this.props.paymentTypes }
                selectedValue={ this.props.paymentType }
                onValueChange={ this.props.onChangePaymentType }
              />
              <LabelPicker
                label="Название дисциплины"
                pickerItems={ [
                  { label: '', value: '' },
                  { label: 'БД', value: 'БД' },
                  { label: 'СУБД', value: 'СУБД' }
                ] }
                selectedValue={ this.props.subject }
                onValueChange={ this.props.onChangeSubject }
              />
              <LabelPicker
                isError={ isDataEmpty }
                errorMessage="* Заполните все поля"
                label="Преподаватель"
                pickerItems={ [
                  { label: '', value: '' },
                  { label: 'Иванов И. И', value: 'Иванов И. И' }
                ] }
                selectedValue={ this.props.lecturer }
                onValueChange={ this.props.onChangeLecturer }
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
  lecturer: selectLecturer(state),
  subject: selectSubject(state),
  paymentType: selectPaymentType(state),
  paymentTypes: selectMappedPaymentTypes(state)
});

const mapDispatchToProps = {
  onChangeSubject: сhangeSubject,
  onChangeLecturer: сhangeLecturer,
  onDateChange: changeDate,
  onChangeMoneyAmount: changeMoneyAmount,
  onChangePaymentType: changePaymentType,
  onOpenImagePicker: openImagePicker,
  removePaymentRequest,
  uploadPaymentRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
