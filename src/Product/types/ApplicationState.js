// @flow
import type { AuthenticationState } from '../Authentication';
import type { DeanState } from '../Dean';
import type { LecturerState } from '../Lecturer';
import type { StudentState } from '../Student';

export type ApplicationState = {
  authentication: AuthenticationState,
  dean: DeanState,
  lecturer: LecturerState,
  student: StudentState
}
