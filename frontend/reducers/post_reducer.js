import {RECEIVE_POST, RECEIVE_POSTS, RECEIVE_POST_ERRORS, REMOVE_POST, CHANGE_POST} from '../actions/post_actions';
import {RECEIVE_COMMENT, REMOVE_COMMENT} from '../actions/comment_actions';
import {RECEIVE_LIKE, REMOVE_LIKE} from '../actions/like_actions';
import {merge} from 'lodash';

const initState = {
  posts: [],
  postErrors: [],
};

const PostReducer = (state = initState, action) => {
  let index, clone, indox, targetPost, post_id, i, j;

  Object.freeze(state);
  switch(action.type){
    case RECEIVE_POSTS:
      return { posts: action.posts, postErrors: state.postErrors };

    case RECEIVE_POST:
      clone = [].concat(action.post).concat(state.posts);
      return { posts: clone, postErrors: state.postErrors };

    case CHANGE_POST:
      clone = [].concat(state.posts);
      for(let x=0; x < clone.length; x++){
        if(clone[x].id === action.post.id){
          clone.splice(x, 1, action.post);
          break;
        }
      }
      return { posts: clone, postErrors: state.postErrors };

    case REMOVE_POST:
      clone = merge({}, state);

      for(i=0; i<clone.posts.length; i++){
        if(clone.posts[i].id === action.post.id){
          index = i;
        }
      }

      if (index > -1) {
        clone.posts.splice(index, 1);
      }
      return clone;

    case RECEIVE_COMMENT:
      post_id = action.comment.post_id;

      clone = merge({}, state);

      for(i=0; i<clone.posts.length; i++){
        if(clone.posts[i].id === post_id){
          targetPost = clone.posts[i];
          index = i;
        }
      }
      clone.posts = clone.posts || [];
      targetPost.comments = targetPost.comments || [];
      targetPost.comments.push(action.comment);
      if (index > -1){
        clone.posts.splice(index, 1, targetPost);
      }
      return clone;

    case RECEIVE_LIKE:
      post_id = action.like.post_id;

      clone = merge({}, state);

      for(let z=0; z<clone.posts.length; z++){
        if(clone.posts[z].id === post_id){
          targetPost = clone.posts[z];
          index = z;
        }
      }

      clone.posts = clone.posts || [];
      targetPost.likes = targetPost.likes || [];

      targetPost.likes.push(action.like);
      if (index > -1){
        clone.posts.splice(index, 1, targetPost);
      }
      return clone;

    case REMOVE_COMMENT:
      post_id = action.comment.post_id;

      clone = merge({}, state);
      for(i=0; i< clone.posts.length; i++){
        if(clone.posts[i].id === post_id){
          targetPost = clone.posts[i];
          index = i;
        }
      }
      clone.posts = clone.posts || [];
      targetPost.comments = targetPost.comments || [];
      for(j=0; j<targetPost.comments.length; j++){
        if(targetPost.comments[j].id === action.comment.id){
          indox = j;
        }
      }
      if(indox > -1){
        targetPost.comments.splice(indox, 1);
      }
      if(index > -1){
        clone.posts.splice(index, 1, targetPost);
      }
      return clone;

    case REMOVE_LIKE:
      post_id = action.like.post_id;

      clone = merge({}, state);
      for(let z=0; z< clone.posts.length; z++){
        if(clone.posts[z].id === post_id){
          targetPost = clone.posts[z];
          index = z;
        }
      }
      clone.posts = clone.posts || [];
      targetPost.likes = targetPost.likes || [];
      for(j=0; j<targetPost.likes.length; j++){
        if(targetPost.likes[j].id === action.like.id){
          indox = j;
        }
      }
      if(indox > -1){
        targetPost.likes.splice(indox, 1);
      }
      if(index > -1){
        clone.posts.splice(index, 1, targetPost);
      }
      return clone;

    case RECEIVE_POST_ERRORS:
      return { posts: state.posts, postErrors: action.postErrors };
    default:
      return state;
  }
};

export default PostReducer;
