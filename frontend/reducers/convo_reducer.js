import {RECEIVE_CONVOS, RECEIVE_MESSAGE} from '../actions/convo_actions';
import { merge } from 'lodash';

const ConvoReducer = (state={}, action) => {
  switch(action.type){
    case RECEIVE_CONVOS:
      return merge({}, action.convos);
    case RECEIVE_MESSAGE:
      let clone = merge({}, state);
      let convoNames = action.message.convo.names;
      clone[convoNames].messages.push(action.message);
      return clone;
    default:
      return state;
  }
};

export default ConvoReducer;
