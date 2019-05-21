// @flow
import React, { PureComponent, Fragment } from 'react';
import { I18n } from '@my/framework';

import { ActivityIndicator, View } from 'react-native';
import { Input } from 'react-native-elements';
import { Screen } from '@my/components';

import styles from './Order.styles';

import type { StudentInfo } from '../../Product/types';


type OrderProps = {
  date: string,
  endDate: string,
  isLoading: boolean,
  lecturer: string,
  mark: string,
  startDate: string,
  status: string, // TODO: make the string more specific.
  student: StudentInfo,
  subject: string,
}

class Order extends PureComponent<OrderProps> {
  render() {
    const {
      date,
      endDate,
      isLoading,
      lecturer,
      mark,
      startDate,
      status,
      student,
      subject
    } = this.props;

    return (
      <Screen>
        { isLoading
          ? <ActivityIndicator size="large" />
          : (
            <Fragment>
              <View style={ styles.container }>
                <Input
                  label={ I18n.translate('order.studentName') }
                  value={ `${student.surname} ${student.name} ${student.middleName}` }
                  editable={ false }
                />
                <Input
                  label={ I18n.translate('order.studentId') }
                  value={ student.studentId }
                  editable={ false }
                />
                <Input
                  label={ I18n.translate('order.lecturer') }
                  value={ lecturer }
                  editable={ false }
                />
                { status === 'planning' && (
                  <Fragment>
                    <Input
                      label={ I18n.translate('order.dateFrom') }
                      value={ startDate }
                      editable={ false }
                    />
                    <Input
                      label={ I18n.translate('order.dateTo') }
                      value={ endDate }
                      editable={ false }
                    />
                  </Fragment>
                ) }
                <Input
                  label={ I18n.translate('order.subject') }
                  value={ subject }
                  editable={ false }
                />
                { !!date && (
                  <Input
                    label={ I18n.translate('order.date') }
                    value={ date }
                    editable={ false }
                  />
                ) }
                { !!mark && (
                  <Input
                    label={ I18n.translate('order.mark') }
                    value={ mark }
                    editable={ false }
                  />
                ) }
              </View>
            </Fragment>
          ) }
      </Screen>
    );
  }
}

export default Order;
