import {RECEIVE_CURRENT_USER, RECEIVE_LOGIN_ERRORS, RECEIVE_SIGNUP_ERRORS} from '../actions/session_actions';
import {RECEIVE_CURRENT_PROFILE} from '../actions/profile_actions';
import merge from 'lodash/merge';

const initState = {
  currentUser: null,
  signupErrors: [],
  loginErrors: [],
};

const SessionReducer = (state = initState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return {currentUser: action.currentUser, errors: []};
    case RECEIVE_LOGIN_ERRORS:
      return {currentUser: null, loginErrors: action.loginErrors};
    case RECEIVE_SIGNUP_ERRORS:
      return {currentUser: null, signupErrors: action.signupErrors};
    case RECEIVE_CURRENT_PROFILE:
      let clone = merge({}, state);
      clone.currentUser.photo_url = action.currentProfile.photo_url;
      return clone;
    default:
      return state;
  }
};

export default SessionReducer;
