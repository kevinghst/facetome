import {RECEIVE_POST, RECEIVE_POSTS, RECEIVE_POST_ERRORS, REMOVE_POST, CHANGE_POST} from '../actions/post_actions';
import {RECEIVE_COMMENT, REMOVE_COMMENT} from '../actions/comment_actions';
import {RECEIVE_LIKE, REMOVE_LIKE} from '../actions/like_actions';
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

    case CHANGE_POST:
      let postsCloneTwo = [].concat(state.posts);
      for(let x=0; x < postsCloneTwo.length; x++){
        if(postsCloneTwo[x].id === action.post.id){
          postsCloneTwo.splice(x, 1, action.post);
          break;
        }
      }
      return { posts: postsCloneTwo, postErrors: state.postErrors };

    case REMOVE_POST:
      let clone = merge({}, state);
      let index;

      for(let i=0; i<clone.posts.length; i++){
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
      var index;
      let cloneState = merge({}, state);

      for(let i=0; i<cloneState.posts.length; i++){
        if(cloneState.posts[i].id === post_id){
          targetPost = cloneState.posts[i];
          index = i;
        }
      }
      cloneState.posts = cloneState.posts || [];
      targetPost.comments = targetPost.comments || [];
      targetPost.comments.push(action.comment);
      if (index > -1){
        cloneState.posts.splice(index, 1, targetPost);
      }
      return cloneState;

    case RECEIVE_LIKE:
      let x_post_id = action.like.post_id;
      let x_targetPost;
      let x_index;
      let x_cloneState = merge({}, state);

      for(let z=0; z<x_cloneState.posts.length; z++){
        if(x_cloneState.posts[z].id === x_post_id){
          x_targetPost = x_cloneState.posts[z];
          x_index = z;
        }
      }

      x_cloneState.posts = x_cloneState.posts || [];
      x_targetPost.likes = x_targetPost.likes || [];

      x_targetPost.likes.push(action.like);
      if (x_index > -1){
        x_cloneState.posts.splice(x_index, 1, x_targetPost);
      }
      return x_cloneState;

    case REMOVE_COMMENT:
      let y_post_id = action.comment.post_id;
      let y_targetPost;
      let y_index;
      let y_cloneState = merge({}, state);
      let indox;
      for(let i=0; i< y_cloneState.posts.length; i++){
        if(y_cloneState.posts[i].id === y_post_id){
          y_targetPost = y_cloneState.posts[i];
          y_index = i;
        }
      }
      y_cloneState.posts = y_cloneState.posts || [];
      y_targetPost.comments = y_targetPost.comments || [];
      for(let j=0; j<y_targetPost.comments.length; j++){
        if(y_targetPost.comments[j].id === action.comment.id){
          indox = j;
        }
      }
      if(indox > -1){
        y_targetPost.comments.splice(indox, 1);
      }
      if(index > -1){
        y_cloneState.posts.splice(y_index, 1, y_targetPost);
      }
      return y_cloneState;

    case REMOVE_LIKE:
      let z_post_id = action.like.post_id;
      let z_targetPost;
      let z_index;
      let z_cloneState = merge({}, state);
      let z_indox;
      for(let z=0; z< z_cloneState.posts.length; z++){
        if(z_cloneState.posts[z].id === z_post_id){
          z_targetPost = z_cloneState.posts[z];
          z_index = z;
        }
      }
      z_cloneState.posts = z_cloneState.posts || [];
      z_targetPost.likes = z_targetPost.likes || [];
      for(let z_j=0; z_j<z_targetPost.likes.length; z_j++){
        if(z_targetPost.likes[z_j].id === action.like.id){
          z_indox = z_j;
        }
      }
      if(z_indox > -1){
        z_targetPost.likes.splice(z_indox, 1);
      }
      if(z_index > -1){
        z_cloneState.posts.splice(z_index, 1, z_targetPost);
      }
      return z_cloneState;

    case RECEIVE_POST_ERRORS:
      return { posts: state.posts, postErrors: action.postErrors };
    default:
      return state;
  }
};

export default PostReducer;
