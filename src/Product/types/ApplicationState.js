// @flow
import type { LogInState } from '../Authentication';
import type { StudentState } from '../Student';

export type ApplicationState = {
  logInReducer: LogInState,
  studentReducer: StudentState
}
