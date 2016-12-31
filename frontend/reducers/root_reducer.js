import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import ProfileReducer from './profile_reducer';
import OwnRequestsReducer from './own_request_reducer';
import OtherRequestsReducer from './other_request_reducer';
import FriendshipReducer from './friendship_reducer';
import UserFriendshipReducer from './user_friendship_reducer';
import PostReducer from './post_reducer';
import UserReducer from './user_reducer';
import ConvoReducer from './convo_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  profile: ProfileReducer,
  ownRequests: OwnRequestsReducer,
  otherRequests: OtherRequestsReducer,
  friends: FriendshipReducer,
  postSlice: PostReducer,
  userFriends: UserFriendshipReducer,
  users: UserReducer,
  convos: ConvoReducer
});

export default rootReducer;
