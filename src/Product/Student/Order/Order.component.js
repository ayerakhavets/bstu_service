// @flow
import React, { PureComponent, Fragment } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { connect } from 'react-redux';
import { Input } from 'react-native-elements';
import { I18n } from '@my/framework';
import { Screen } from '@my/components';
import {
  selectDate,
  selectStudent,
  selectStartDate,
  selectEndDate,
  selectMark,
  selectLecturer,
  selectSubject,
  selectIsLoading
} from './Order.selectors';
import styles from './Order.styles';


type PaymentProps = {
  student: Object,
  date: string,
  mark: string,
  lecturer: string,
  subject: string,
  startDate: string,
  endDate: string,
  isLoading: boolean
}

class Payment extends PureComponent<PaymentProps> {
  render() {
    return (
      <Screen>
        { this.props.isLoading
          ? <ActivityIndicator size="large" />
          : (
            <Fragment>
              <View style={ styles.container }>
                <Input
                  label={ I18n.translate('order.studentName') }
                  value={ `${this.props.student.surname} ${this.props.student.name} ${this.props.student.middleName}` }
                  editable={ false }
                />
                <Input
                  label={ I18n.translate('order.studentId') }
                  value={ this.props.student.studentId }
                  editable={ false }
                />
                <Input
                  label={ I18n.translate('order.lecturer') }
                  value={ this.props.lecturer }
                  editable={ false }
                />
                <View style={ styles.dateView }>
                  <Input
                    label={ I18n.translate('order.dateFrom') }
                    value={ this.props.startDate }
                    editable={ false }
                    containerViewStyle={ styles.datePicker }
                  />
                  <Input
                    label={ I18n.translate('order.dateTo') }
                    value={ this.props.endDate }
                    editable={ false }
                    containerViewStyle={ styles.datePicker }
                  />
                </View>
                <Input
                  label={ I18n.translate('order.subject') }
                  value={ this.props.subject }
                  editable={ false }
                />

                { this.props.date && <Input
                  label={ I18n.translate('order.date') }
                  value={ this.props.date }
                  editable={ false }
                /> }

                { this.props.mark && <Input
                  label={ I18n.translate('order.mark') }
                  value={ this.props.mark }
                  editable={ false }
                /> }
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
  lecturer: selectLecturer(state),
  subject: selectSubject(state),
  startDate: selectStartDate(state),
  endDate: selectEndDate(state),
  isLoading: selectIsLoading(state)
});

export default connect(mapStateToProps)(Payment);
