import {RECEIVE_POST, RECEIVE_POSTS, RECEIVE_POST_ERRORS, REMOVE_POST} from '../actions/post_actions';
import {RECEIVE_COMMENT} from '../actions/comment_actions';
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
    case REMOVE_POST:
      let clone = merge({}, state);
      var index;

      for(var i=0; i<clone.posts.length; i++){
        if(clone.posts[i].id === action.post.id){
          index = i;
        }
      }

      if (index > -1) {
        clone.posts.splice(index, 1);
      }
      return clone;

    case RECEIVE_COMMENT:
      let post_id = action.comment.post_id;
      let targetPost;
      let index;
      let cloneState = merge({}, state);

      for(var i=0; i<cloneState.posts.length; i++){
        if(cloneState.posts[i].id === post_id){
          targetPost = cloneState.posts[i];
          index = i;
        }
      }

      cloneState.posts = cloneState.posts || [];
      targetPost.comments = targetPost.comments || [];

      targetPost.comments.push(action.comment);
      if (index > -1){
        cloneState.posts.splice(index, 1);
        cloneState.posts.unshift(targetPost);
      }
      return cloneState;

    case RECEIVE_POST_ERRORS:
      return { posts: state.posts, postErrors: action.postErrors };
    default:
      return state;
  }
};

export default PostReducer;
