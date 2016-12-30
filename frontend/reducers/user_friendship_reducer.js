import {RECEIVE_USER_FRIENDS, REMOVE_FRIEND} from '../actions/friendship_actions';
import { merge } from 'lodash';

const UserFriendshipReducer = (state={}, action) => {
  switch (action.type) {
    case RECEIVE_USER_FRIENDS:
      return merge({}, action.userFriends);
    case REMOVE_FRIEND:
      let clone = merge({}, state);
      delete clone[action.friend.id];
      return clone
    default:
      return state;
  }
};

export default UserFriendshipReducer;
