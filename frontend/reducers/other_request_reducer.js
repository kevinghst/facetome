import {RECEIVE_OTHER_REQUESTS, REMOVE_REQUEST} from '../actions/request_actions';
import { merge } from 'lodash';


const OtherRequestsReducer = (state = {}, action) => {

  Object.freeze(state);
  switch(action.type){
    case RECEIVE_OTHER_REQUESTS:
      return merge({}, action.otherRequests);
    case REMOVE_REQUEST:
      let clone = merge({}, state);
      delete clone[action.request.id];
      return clone;
    default:
      return state;
  }
};

export default OtherRequestsReducer;
