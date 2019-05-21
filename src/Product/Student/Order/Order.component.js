// @flow
import { connect } from 'react-redux';
import { Order } from '@my/components';
import {
  selectDate,
  selectEndDate,
  selectIsLoading,
  selectLecturer,
  selectMark,
  selectStartDate,
  selectStatus,
  selectStudent,
  selectSubject
} from './Order.selectors';
import type { ApplicationState } from '../../types';

const mapStateToProps = (state: ApplicationState) => ({
  date: selectDate(state),
  endDate: selectEndDate(state),
  isLoading: selectIsLoading(state),
  lecturer: selectLecturer(state),
  mark: selectMark(state),
  startDate: selectStartDate(state),
  status: selectStatus(state),
  student: selectStudent(state),
  subject: selectSubject(state)
});

export default connect(mapStateToProps)(Order);
