import * as APIUtil from '../util/friendship_api_util';
import {createConvo} from '../util/convo_api_util';

export const RECEIVE_FRIEND = "RECEIVE_FRIEND";
export const RECEIVE_FRIENDS = "RECEIVE_FRIENDS";
export const REMOVE_FRIEND = "REMOVE_FRIEND";
export const RECEIVE_USER_FRIENDS = "RECEIVE_USER_FRIENDS";

export const receiveFriend = friend => {
  return {
    type: RECEIVE_FRIEND,
    friend
  };
};

export const receiveUserFriends = userFriends => {
  return {
    type: RECEIVE_USER_FRIENDS,
    userFriends
  };
};

export const receiveFriends = friends => {
  return {
    type: RECEIVE_FRIENDS,
    friends
  };
};

export const removeFriend = friend => {
  return {
    type: REMOVE_FRIEND,
    friend
  };
};

export function deleteFriend(user_id, friend_id) {
  return (dispatch) => {
    return APIUtil.deleteFriend(user_id, friend_id).then(
      (friend) => dispatch(removeFriend(friend))
    );
  };
}

export function acceptFriend(friendship) {
  return (dispatch) => {
    createConvo(friendship);
    return APIUtil.acceptFriend(friendship).then(
      (friend) => dispatch(receiveFriend(friend))
    );
  };
}

export function fetchFriends(user_id){
  return (dispatch) => {
    return APIUtil.fetchFriends(user_id).then(
      (friends) => dispatch(receiveFriends(friends))
    );
  };
}

export function fetchUserFriends(user_id){
  return (dispatch) => {
    return APIUtil.fetchFriends(user_id).then(
      (userFriends) => dispatch(receiveUserFriends(userFriends))
    );
  };
}
