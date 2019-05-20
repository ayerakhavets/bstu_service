// @flow
import React, { PureComponent, Fragment } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { connect } from 'react-redux';
import DatePicker from 'react-native-datepicker';
import { Input } from 'react-native-elements';
import { MyButton, Screen } from '@my/components';
import { type StudentInfo } from '../../types';
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
import styles from './Order.styles';
import { selectCurrentStudent } from '../StudentList';

type PaymentProps = {
  currentUser: StudentInfo,
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
  onMarkOrder: () => void,
  onChangeDate: (date: string) => void
}

class Payment extends PureComponent<PaymentProps> {
  render() {
    const studentName =
      `${this.props.currentUser.surname} ${this.props.currentUser.name} ${this.props.currentUser.middleName}`;

    return (
      <Screen>
        { this.props.isLoading
          ? <ActivityIndicator size="large" />
          : <Fragment>
            <View style={ styles.container }>
              <Input
                label="ФИО студента"
                value={ studentName }
                editable={ false }
              />
              <Input
                label="Номер студенческого билета "
                value={ this.props.currentUser.studentId }
                editable={ false }
              />
              <Input
                label="Преподаватель"
                value={ this.props.lecturer }
                editable={ false }
              />
              <View style={ styles.dateView1 }>
                <Input
                  label="Начало сдачи"
                  value={ this.props.startDate }
                  editable={ false }
                  containerViewStyle={ styles.datePicker2 }
                />
                <Input
                  label="Конец сдачи"
                  value={ this.props.endDate }
                  editable={ false }
                  containerViewStyle={ styles.datePicker2 }
                />
              </View>
              <Input
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
                  : <Input
                    label="Дата сдачи"
                    value={ this.props.date }
                    editable={ false }
                  />}
              {
                this.props.status === 'set'
                  ? <Input
                    isError={ !this.props.mark }
                    label="Оценка"
                    maxLength={ 2 }
                    keyboardType="numeric"
                    value={ this.props.mark }
                    onChangeText={ this.props.onChangeMark }
                  />
                  : this.props.mark
                    ? <Input
                      label="Оценка"
                      value={ this.props.mark }
                      editable={ false }
                    />
                    : null
              }
              <MyButton
                icon={{ name: 'done' }}
                containerViewStyle={ styles.buttonAdd }
                title={ this.props.status === 'planning'
                  ? 'Назначить дату'
                  : 'Оценить' }
                onPress={ this.props.status === 'planning'
                  ? this.props.onSetOrderRequest
                  : this.props.onMarkOrder }
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
