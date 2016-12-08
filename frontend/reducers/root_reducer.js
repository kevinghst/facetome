import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import ProfileReducer from './profile_reducer';


const rootReducer = combineReducers({
  session: SessionReducer,
  profile: ProfileReducer,
});

export default rootReducer;
