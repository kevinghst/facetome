import {RECEIVE_USER_FRIENDS} from '../actions/friendship_actions';
import { merge } from 'lodash';

const UserFriendshipReducer = (state={}, action) => {
  switch (action.type) {
    case RECEIVE_USER_FRIENDS:
      return merge({}, action.userFriends);
    default:
      return state;
  }
};

export default UserFriendshipReducer;
