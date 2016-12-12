import {RECEIVE_CURRENT_USER, RECEIVE_LOGIN_ERRORS, RECEIVE_SIGNUP_ERRORS} from '../actions/session_actions';


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
    default:
      return state;
  }
};

export default SessionReducer;
