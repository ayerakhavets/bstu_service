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
} from '@my/components';
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
import styles from './Order.styles';


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
                value={ `${this.props.student.surname} ${this.props.student.name} ${this.props.student.middleName}` }
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
              <View style={ styles.dateView }>
                <LabelInput
                  label="Начало сдачи"
                  value={ this.props.startDate }
                  editable={ false }
                  containerViewStyle={ styles.datePicker }
                />
                <LabelInput
                  label="Конец сдачи"
                  value={ this.props.endDate }
                  editable={ false }
                  containerViewStyle={ styles.datePicker }
                />
              </View>
              <LabelInput
                label="Название дисциплины"
                value={ this.props.subject }
                editable={ false }
              />

              {this.props.date
                ? <LabelInput
                  label="Дата сдачи"
                  value={ this.props.date }
                  editable={ false }
            />
                : null
              }

              { this.props.mark
                ? <LabelInput
                  label="Оценка"
                  value={ this.props.mark }
                  editable={ false }
                />
                : null
              }
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
