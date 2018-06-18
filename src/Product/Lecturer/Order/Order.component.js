// @flow
import React, { Component, Fragment } from 'react';
import {
  ActivityIndicator,
  View
} from 'react-native';
import { connect } from 'react-redux';
import DatePicker from 'react-native-datepicker';
import {
  LabelInput,
  MyButton,
  Screen
} from '../../../Components';
import { type StudetnInfo } from '../../types';
import {
  approveOrderRequest,
  changeDate,
  closeOrderRequest,
  changeMark
} from './Order.actions';
import {
  selectDate,
  selectStartDate,
  selectEndDate,
  selectMark,
  selectLecturer,
  selectSubject,
  selectIsLoading,
  selectStatus
} from './Order.selectors';
import styles, { colors } from './Order.styles';
import { selectCurrentStudent } from '../StudentList';

type PaymentProps = {
  currentUser: StudetnInfo,
  date: string,
  mark: string,
  lecturer: string,
  subject: string,
  status: string,
  startDate: string,
  endDate: string,
  isLoading: boolean,
  onSetOrderRequest: () => void,
  onChangeMark: (mark: string) => void,
  onChangeDate: (date: string) => void
}

// eslint-disable-next-line
class Payment extends Component<PaymentProps> {
  render() {
    return (
      <Screen>
        { this.props.isLoading
          ? <ActivityIndicator size="large" />
          : <Fragment>
            <View style={ styles.container }>
              <LabelInput
                label="ФИО студента"
                value={ `${this.props.currentUser.surname} ${this.props.currentUser.name} ${this.props.currentUser.middleName}` }
                editable={ false }
              />
              <LabelInput
                label="Номер студенческого билета "
                value={ this.props.currentUser.studentId }
                editable={ false }
              />
                     <LabelInput
                label="Преподаватель"
                value={ this.props.lecturer }
                editable={ false }
              />
                  <LabelInput
                label="Начало сдачи"
                value={ this.props.startDate }
                editable={ false }
              />
                  <LabelInput
                label="Конец сдачи"
                value={ this.props.endDate }
                editable={ false }
              />
              <LabelInput
                label="Название дисциплины"
                value={ this.props.subject }
                editable={ false }
              />
              {
                this.props.status === 'planning' 
                ? <DatePicker
                  cancelBtnText="Закрыть"
                  confirmBtnText="Ок"
                  customStyles={{
                    placeholderText: styles.datePlaceholderText
                  }}
                  date={ this.props.date }
                  format="DD MM YYYY"
                  placeholder="Дата"
                  style={ styles.datePicker }
                  onDateChange={ this.props.onChangeDate }
                /> 
                : <LabelInput
                label="Дата сдачи"
                value={ this.props.date }
                editable={ false }
              />}
              {
                this.props.status === 'set' 
                ? <LabelInput
                isError={ !this.props.mark }
                label="Оценка"
                maxLength={ 2 }
                keyboardType="numeric"
                value={ this.props.mark }
                onChangeText={ this.props.onChangeMark }
              />
              :<LabelInput
              label="Оценка"
              value={ this.props.mark }
              editable={ false }
            />
              }
              <MyButton
                icon={{ name: 'done' }}
                containerViewStyle={ styles.buttonAdd }
                title={
                  this.props.status === 'planning' 
                  ? "Назначить дату"
                  : "Оценить"
                }
                onPress={ this.props.status === 'planning' 
                ? this.props.onSetOrderRequest
                :  this.props.onMarkOrder 
              }
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
  mark: selectMark(state),
  status: selectStatus(state),
  lecturer: selectLecturer(state),
  subject: selectSubject(state),
  startDate: selectStartDate(state),
  endDate: selectEndDate(state),
  isLoading: selectIsLoading(state)
});

const mapDispatchToProps = {
  onSetOrderRequest: approveOrderRequest,
  onChangeDate: changeDate,
  onMarkOrder: closeOrderRequest,
  onChangeMark: changeMark
};

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
