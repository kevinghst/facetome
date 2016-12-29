import {RECEIVE_USERS} from '../actions/profile_actions';
import {merge} from 'lodash';

const UserReducer = (state=[], action) => {
  switch (action.type){
    case RECEIVE_USERS:
      return [].concat(action.users);
    default:
      return state;
  }
};

export default UserReducer;
