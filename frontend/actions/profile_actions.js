import * as APIUtil from '../util/profile_api_util';

export const RECEIVE_CURRENT_PROFILE = "RECEIVE_CURRENT_PROFILE";

export const RECEIVE_USERS = "RECEIVE_USERS";

export const receiveCurrentProfile = currentProfile => {
  return {
    type: RECEIVE_CURRENT_PROFILE,
    currentProfile
  };
};

export const receiveUsers = users => {
  return {
    type: RECEIVE_USERS,
    users
  };
};

export function fetchAllUsers(){
  return (dispatch) => {
    return APIUtil.fetchAllUsers().then(
      (profiles) => dispatch(receiveUsers(profiles))
    );
  };
}

export function fetchProfile(username){
  return (dispatch) => {
    return APIUtil.fetchProfile(username).then(
      (currentProfile) => dispatch(receiveCurrentProfile(currentProfile))
    );
  };
}

export function updateProfile(user){
  return (dispatch) => {
    return APIUtil.updateProfile(user).then(
      (currentProfile) => dispatch(receiveCurrentProfile(currentProfile))
    );
  };
}
