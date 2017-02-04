import {RECEIVE_OWN_REQUESTS, RECEIVE_REQUEST} from '../actions/request_actions';
import { merge } from 'lodash';



const OwnRequestsReducer = (state = [], action) => {

  let requestees = [];

  if (action.ownRequests)
  {
    let requestKeys = Object.keys(action.ownRequests);
    requestKeys.forEach((el)=>{
      requestees.push(action.ownRequests[el].requestee_user_id);
    });
  }

  Object.freeze(state);
  switch(action.type){
    case RECEIVE_OWN_REQUESTS:
      return [].concat(requestees);
    case RECEIVE_REQUEST:
      return [].concat(state).concat([action.request.requestee_user_id]);
    default:
      return state;
  }
};

export default OwnRequestsReducer;
