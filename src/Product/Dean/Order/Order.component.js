// @flow
import { connect } from 'react-redux';
import { Order } from '@my/components';
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

export default connect(mapStateToProps)(Order);
