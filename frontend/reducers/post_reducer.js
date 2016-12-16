import {RECEIVE_POST, RECEIVE_POSTS, RECEIVE_POST_ERRORS, REMOVE_POST} from '../actions/post_actions';
import {RECEIVE_COMMENT, REMOVE_COMMENT} from '../actions/comment_actions';
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

    case REMOVE_COMMENT:
      let rm_post_id = action.comment.post_id;
      let rm_targetPost;
      let rm_index;
      let rm_cloneState = merge({}, state);
      let indox;

      for(var i=0; i< rm_cloneState.posts.length; i++){
        if(rm_cloneState.posts[i].id === rm_post_id){
          rm_targetPost = rm_cloneState.posts[i];
          rm_index = i;
        }
      }

      rm_cloneState.posts = rm_cloneState.posts || [];
      rm_targetPost.comments = rm_targetPost.comments || [];

      for(var j=0; j<rm_targetPost.comments.length; j++){
        if(rm_targetPost.comments[j].id === action.comment.id){
          indox = j;
        }
      }

      if(indox > -1){
        rm_targetPost.comments.splice(indox, 1);
      }

      if(index > -1){
        rm_cloneState.posts.splice(rm_index, 1);
        rm_cloneState.posts.unshift(rm_targetPost);
      }
      return rm_cloneState;

    case RECEIVE_POST_ERRORS:
      return { posts: state.posts, postErrors: action.postErrors };
    default:
      return state;
  }
};

export default PostReducer;
