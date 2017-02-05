import * as APIUtil from '../util/request_api_util';

export const RECEIVE_REQUEST = "RECEIVE_REQUEST";
export const REMOVE_REQUEST = "REMOVE_REQUEST";
export const RECEIVE_OWN_REQUESTS = "RECEIVE_OWN_REQUESTS";
export const RECEIVE_OTHER_REQUESTS = "RECEIVE_OTHER_REQUESTS";


export const receiveRequest = request => {
  return {
      type: RECEIVE_REQUEST,
      request
  };
};

export const removeRequest = request => {
  return {
      type: REMOVE_REQUEST,
      request
  };
};


export const receiveOwnRequests = ownRequests => {
  return {
    type: RECEIVE_OWN_REQUESTS,
    ownRequests
  };
};

export const receiveOtherRequests = otherRequests => {
  return {
    type: RECEIVE_OTHER_REQUESTS,
    otherRequests
  };
};

export function friendRequest(request){
  return (dispatch) => {
    return APIUtil.friendRequest(request).then(
      (request) => dispatch(receiveRequest(request))
    );
  };
}

export function deleteRequest(requester_id, requestee_id){
  return (dispatch) => {
    return APIUtil.deleteRequest(requester_id, requestee_id).then(
      (request) => dispatch(removeRequest(request))
    );
  };
}

export function fetchOwnRequests(user_id){
  return (dispatch) => {
    return APIUtil.fetchOwnRequests(user_id).then(
      (ownRequests) => dispatch(receiveOwnRequests(ownRequests))
    );
  };
}

export function fetchOtherRequests(user_id){
  return (dispatch) => {
    return APIUtil.fetchOtherRequests(user_id).then(
      (otherRequests) => dispatch(receiveOtherRequests(otherRequests))
    );
  };
}
