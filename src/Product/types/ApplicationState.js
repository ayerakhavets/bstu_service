// @flow
import type { AuthenticationState } from '../Authentication';
import type { StudentState } from '../Student';

export type ApplicationState = {
  authentication: AuthenticationState,
  student: StudentState
}
