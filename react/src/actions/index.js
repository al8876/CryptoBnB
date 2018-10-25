import * as ContactActions from './contacts';
import * as MemberActions from './members';
import * as ProjectActions from './projects';
import * as TaskActions from './tasks';

export const actionCreators = Object.assign({}, ContactActions, MemberActions, ProjectActions, TaskActions);
