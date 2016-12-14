import {RECEIVE_POST, RECEIVE_POSTS, RECEIVE_POST_ERRORS} from '../actions/post_actions';
import {merge} from 'lodash';

const initState = {
  posts: [],
  postErrors: [],
};

const PostReducer = (state = initState, action) => {

  Object.freeze(state);
  switch(action.type){
    case RECEIVE_POSTS:
      return { posts: action.posts, postErrors: state.postErrors };
    case RECEIVE_POST:
      let postsClone = [].concat(action.post).concat(state.posts);
      return { posts: postsClone, postErrors: state.postErrors };
    case RECEIVE_POST_ERRORS:
      return { posts: state.posts, postErrors: action.postErrors };
    default:
      return state;
  }
};

export default PostReducer;
