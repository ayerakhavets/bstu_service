// @flow
import React, { Component, Fragment } from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  View
} from 'react-native';
import { connect } from 'react-redux';
import DatePicker from 'react-native-datepicker';
import {
  HeaderRight,
  LabelInput,
  MyButton,
  Screen
} from '@my/components';
import { type StudetnInfo } from '../../types';
import {
  approvePaymentRequest,
  changeStartDate,
  changeEndDate,
  declinePaymentRequest,
  removePaymentRequest
} from './Payment.actions';
import type { PaymentImage } from './Payment.reducer';
import {
  selectDate,
  selectStartDate,
  selectEndDate,
  selectImage,
  selectLecturer,
  selectSubject,
  selectIsLoading,
  selectMoneyAmount,
  selectPaymentType
} from './Payment.selectors';
import styles, { colors } from './Payment.styles';
import { selectCurrentStudent } from '../StudentList';

type PaymentProps = {
  currentUser: StudetnInfo,
  date: string,
  lecturer: string,
  subject: string,
  startDate: string,
  endDate: string,
  image: PaymentImage,
  isLoading: boolean,
  moneyAmount: string,
  navigation: Object,
  paymentType: string,
  onApprovePaymentRequest: () => void,
  onChangeStartDate: (date: string) => void,
  onChangeEndDate: (date: string) => void,
  onDeclinePaymentRequest: () => void,
  onRemovePaymentRequest: () => void
}

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

    return {
      // eslint-disable-next-line react/jsx-no-bind
      headerRight: <HeaderRight iconName="delete" onIconPress={ onPress } />
    };
  };

  componentWillMount() {
    this.props.navigation.setParams({ removePayment: this.props.onRemovePaymentRequest });
  }

  render() {
    return (
      <Screen>
        { this.props.isLoading
          ? <ActivityIndicator size="large" />
          : <Fragment>
            <Image
              source={{ uri: this.props.image.url }}
              style={ styles.image }
              resizeMethod="resize"
            />
            <View style={ styles.container }>
              <LabelInput
                label="ФИО"
                value={ `${this.props.currentUser.surname}${this.props.currentUser.name}${this.props.currentUser.middleName}` }
                editable={ false }
              />
              <LabelInput
                label="Номер билета"
                value={ this.props.currentUser.studentId }
                editable={ false }
              />
              <LabelInput
                label="Сумма"
                value={ `${this.props.moneyAmount} BYN` }
                editable={ false }
              />
              <LabelInput
                label="Дата"
                value={ this.props.date }
                editable={ false }
              />
              <LabelInput
                label="Тип платежа"
                value={ this.props.paymentType }
                editable={ false }
              />
              <LabelInput
                label="Название дисциплины"
                value={ this.props.subject }
                editable={ false }
              />
              <LabelInput
                label="Преподаватель"
                value={ this.props.lecturer }
                editable={ false }
              />
              <View style={ styles.dateView }>
                <DatePicker
                  cancelBtnText="Закрыть"
                  confirmBtnText="Ок"
                  customStyles={{
                    placeholderText: styles.datePlaceholderText
                  }}
                  date={ this.props.startDate }
                  format="DD MM YYYY"
                  placeholder="Начало сдачи"
                  style={ styles.datePicker }
                  onDateChange={ this.props.onChangeStartDate }
                />
                <DatePicker
                  cancelBtnText="Закрыть"
                  confirmBtnText="Ок"
                  customStyles={{
                    placeholderText: styles.datePlaceholderText
                  }}
                  date={ this.props.endDate }
                  format="DD MM YYYY"
                  placeholder="Конец сдачи"
                  style={ styles.datePicker }
                  onDateChange={ this.props.onChangeEndDate }
                />
              </View>
              <MyButton
                icon={{ name: 'done' }}
                containerViewStyle={ styles.buttonAdd }
                title="Одобрить"
                onPress={ this.props.onApprovePaymentRequest }
              />
              <MyButton
                backgroundColor={ colors.red }
                icon={{ name: 'clear' }}
                containerViewStyle={ styles.buttonAdd }
                title="Отклонить"
                onPress={ this.props.onDeclinePaymentRequest }
              />
            </View>
          </Fragment> }
      </Screen>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: selectCurrentStudent(state),
  date: selectDate(state),
  lecturer: selectLecturer(state),
  subject: selectSubject(state),
  startDate: selectStartDate(state),
  endDate: selectEndDate(state),
  image: selectImage(state),
  isLoading: selectIsLoading(state),
  moneyAmount: selectMoneyAmount(state),
  paymentType: selectPaymentType(state)
});

const mapDispatchToProps = {
  onApprovePaymentRequest: approvePaymentRequest,
  onDeclinePaymentRequest: declinePaymentRequest,
  onRemovePaymentRequest: removePaymentRequest,
  onChangeStartDate: changeStartDate,
  onChangeEndDate: changeEndDate
};

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
