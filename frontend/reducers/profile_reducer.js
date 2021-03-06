import {RECEIVE_CURRENT_PROFILE, RECEIVE_UPDATED_PROFILE} from '../actions/profile_actions';

const ProfileReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_PROFILE:
      return action.currentProfile;
    case RECEIVE_UPDATED_PROFILE:
      return action.currentProfile;
    default:
      return state;
  }
};

export default ProfileReducer;
