import {RECEIVE_FRIEND, RECEIVE_FRIENDS, REMOVE_FRIEND} from '../actions/friendship_actions';
import { merge } from 'lodash';

const FriendshipReducer = (state={}, action) => {
  switch (action.type) {
    case RECEIVE_FRIEND:
      return merge({}, state, { [action.friend.id]: action.friend });
    case RECEIVE_FRIENDS:
      return merge({}, action.friends);
    case REMOVE_FRIEND:
      let clone = merge({}, state);
      delete clone[action.friend.id];
      return clone;
    default:
      return state;
  }
};

export default FriendshipReducer;
