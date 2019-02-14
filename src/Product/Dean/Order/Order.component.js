// @flow
import React, { Component, Fragment } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { connect } from 'react-redux';
import { I18n } from '@my/framework';
import { LabelInput, Screen } from '@my/components';
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
  // TODO: add propr type (StudentInfo)
  student: any,
  date: string,
  mark: string,
  lecturer: string,
  subject: string,
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
          : (
            <Fragment>
              <View style={ styles.container }>
                <LabelInput
                  label={ I18n.translate('order.studentName') }
                  value={ `${this.props.student.surname} ${this.props.student.name} ${this.props.student.middleName}` }
                  editable={ false }
                />
                <LabelInput
                  label={ I18n.translate('order.studentId') }
                  value={ this.props.student.studentId }
                  editable={ false }
                />
                <LabelInput
                  label={ I18n.translate('order.lecturer') }
                  value={ this.props.lecturer }
                  editable={ false }
                />
                <View style={ styles.dateView }>
                  <LabelInput
                    label={ I18n.translate('order.dateFrom') }
                    value={ this.props.startDate }
                    editable={ false }
                    containerViewStyle={ styles.datePicker }
                  />
                  <LabelInput
                    label={ I18n.translate('order.dateTo') }
                    value={ this.props.endDate }
                    editable={ false }
                    containerViewStyle={ styles.datePicker }
                  />
                </View>
                <LabelInput
                  label={ I18n.translate('order.subject') }
                  value={ this.props.subject }
                  editable={ false }
                />

                {this.props.date
                  ? <LabelInput
                    label={ I18n.translate('order.date') }
                    value={ this.props.date }
                    editable={ false }
                  />
                  : null
                }

                { this.props.mark
                  ? <LabelInput
                    label={ I18n.translate('order.mark') }
                    value={ this.props.mark }
                    editable={ false }
                  />
                  : null
                }
              </View>
            </Fragment>
          ) }
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
