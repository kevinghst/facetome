import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import ProfileReducer from './profile_reducer';
import OwnRequestsReducer from './own_request_reducer';
import OtherRequestsReducer from './other_request_reducer';
import FriendshipReducer from './friendship_reducer';
import PostReducer from './post_reducer';


const rootReducer = combineReducers({
  session: SessionReducer,
  profile: ProfileReducer,
  ownRequests: OwnRequestsReducer,
  otherRequests: OtherRequestsReducer,
  friends: FriendshipReducer,
  posts: PostReducer
});

export default rootReducer;
