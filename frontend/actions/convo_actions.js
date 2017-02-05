import * as APIUtil from '../util/convo_api_util';

export const RECEIVE_CONVOS = "RECEIVE_CONVOS";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";

export const receiveConvos = convos => {
  return {
    type: RECEIVE_CONVOS,
    convos
  };
};

export const receiveMessage = message => {
  return {
    type: RECEIVE_MESSAGE,
    message
  };
};

export function fetchConvos(user_id){
  return (dispatch) => {
    return APIUtil.fetchConvos(user_id).then(
      (convos) => dispatch(receiveConvos(convos))
    );
  };
}

export function createMessage(message){
  return (dispatch) => {
    return APIUtil.createMessage(message).then(
      (message) => dispatch(receiveMessage(message))
    );
  };
}
