import * as APIUtil from '../util/profile_api_util';

export const RECEIVE_CURRENT_PROFILE = "RECEIVE_CURRENT_PROFILE";

export const receiveCurrentProfile = currentProfile => {
  return {
    type: RECEIVE_CURRENT_PROFILE,
    currentProfile
  };
};

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
