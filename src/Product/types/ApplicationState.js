// @flow
import type { AuthenticationState } from '../Authentication';
import type { StudentState } from '../Student';
import type { DeanState } from '../Dean';

export type ApplicationState = {
  authentication: AuthenticationState,
  dean: DeanState,
  student: StudentState
}
