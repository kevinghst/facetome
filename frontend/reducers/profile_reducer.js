import {RECEIVE_CURRENT_PROFILE} from '../actions/profile_actions';

const ProfileReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_PROFILE:
    debugger
      return action.currentProfile;
    default:
      return state;
  }
};

export default ProfileReducer;
