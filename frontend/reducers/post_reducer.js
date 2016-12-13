import {RECEIVE_POST, RECEIVE_POST_ERRORS} from '../actions/post_actions';

const initState = {
  posts: {},
  postErrors: [],
};

const PostReducer = (state = initState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_POST:
      let postsClone = merge({}, state.posts, { [action.id]: action });
      return { posts: postsClone, postErrors: state.postErrors };
    case RECEIVE_POST_ERRORS:
      return { posts: state.posts, postErrors: action.postErrors };
    default:
      return state;
  }
};

export default PostReducer;
