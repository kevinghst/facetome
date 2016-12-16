import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SIGNUP_ERRORS = "RECEIVE_SIGNUP_ERRORS";
export const RECEIVE_LOGIN_ERRORS = "RECEIVE_LOGIN_ERRORS";


export const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const receiveLoginErrors = loginErrors => {
  return {
    type: RECEIVE_LOGIN_ERRORS,
    loginErrors
  };
};

export const receiveSignupErrors = signupErrors => {
  return {
    type: RECEIVE_SIGNUP_ERRORS,
    signupErrors
  };
};

export function signup(user){
  return (dispatch) => {
    return APIUtil.signup(user).then(
      (currentUser) => dispatch(receiveCurrentUser(currentUser)),
      (err) => dispatch(receiveSignupErrors(err.responseJSON))
    );
  };
}

export function login(user){
  return (dispatch) => {
    return APIUtil.login(user).then(
      (currentUser) => dispatch(receiveCurrentUser(currentUser)),
      (err) => dispatch(receiveLoginErrors(err.responseJSON))
    );
  };
}

export function logout(){
  return (dispatch) => {
    return APIUtil.logout().then(
      (currentUser) => dispatch(receiveCurrentUser(null))
    );
  };
}

export function deleteUser(user){
  return (dispatch) => {
    return APIUtil.deleteUser(user).then(
        () => dispatch(receiveCurrentUser(null))
    );
  };
}
