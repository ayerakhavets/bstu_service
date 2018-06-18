// @flow
import React, { Component, Fragment } from 'react';
import {
  ActivityIndicator,
  View
} from 'react-native';
import { connect } from 'react-redux';
import {
  LabelInput,
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
  selectStudent,
  selectStartDate,
  selectEndDate,
  selectMark,
  selectLecturer,
  selectSubject,
  selectIsLoading,
  selectStatus
} from './Order.selectors';
import styles, { colors } from './Order.styles';


type PaymentProps = {
  student: string,
  date: string,
  mark: string,
  lecturer: string,
  subject: string,
  status: string,
  startDate: string,
  endDate: string,
  isLoading: boolean
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
                value={ this.props.student.surname }
                editable={ false }
              />
              <LabelInput
                label="Номер студенческого билета "
                value={ this.props.student.studentId }
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

              <LabelInput
                label="Дата сдачи"
                value={ this.props.date }
                editable={ false }
              />


              <LabelInput
                label="Оценка"
                value={ this.props.mark }
                editable={ false }
              />

            </View>
          </Fragment> }
      </Screen>
    );
  }
}

const mapStateToProps = state => ({
  student: selectStudent(state),
  date: selectDate(state),
  mark: selectMark(state),
  status: selectStatus(state),
  lecturer: selectLecturer(state),
  subject: selectSubject(state),
  startDate: selectStartDate(state),
  endDate: selectEndDate(state),
  isLoading: selectIsLoading(state)
});

export default connect(mapStateToProps)(Payment);
