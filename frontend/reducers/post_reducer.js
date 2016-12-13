import {RECEIVE_POST, RECEIVE_POST_ERRORS} from '../actions/post_actions';
import {merge} from 'lodash';

const initState = {
  posts: {},
  postErrors: [],
};

const PostReducer = (state = initState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_POST:
      let postsClone = merge({}, state.posts, { [action.post.id]: action.post });
      return { posts: postsClone, postErrors: state.postErrors };
    case RECEIVE_POST_ERRORS:
      return { posts: state.posts, postErrors: action.postErrors };
    default:
      return state;
  }
};

export default PostReducer;
