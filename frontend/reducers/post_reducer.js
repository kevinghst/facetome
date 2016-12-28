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
      for(var x=0; x < postsCloneTwo.length; x++){
        if(postsCloneTwo[x].id === action.post.id){
          postsCloneTwo.splice(x, 1, action.post);
          break;
        }
      }
      return { posts: postsCloneTwo, postErrors: state.postErrors };

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
        cloneState.posts.splice(index, 1, targetPost);
      }
      return cloneState;

    case RECEIVE_LIKE:
      let lc_post_id = action.like.post_id;
      let lc_targetPost;
      let lc_index;
      let lc_cloneState = merge({}, state);

      for(var z=0; z<lc_cloneState.posts.length; z++){
        if(lc_cloneState.posts[z].id === lc_post_id){
          lc_targetPost = lc_cloneState.posts[z];
          lc_index = z;
        }
      }

      lc_cloneState.posts = lc_cloneState.posts || [];
      lc_targetPost.likes = lc_targetPost.likes || [];

      lc_targetPost.likes.push(action.like);
      if (lc_index > -1){
        lc_cloneState.posts.splice(lc_index, 1, lc_targetPost);
      }
      return lc_cloneState;

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
        rm_cloneState.posts.splice(rm_index, 1, rm_targetPost);
      }
      return rm_cloneState;

    case REMOVE_LIKE:
      let lr_post_id = action.like.post_id;
      let lr_targetPost;
      let lr_index;
      let lr_cloneState = merge({}, state);
      let lr_indox;
      for(var lr=0; lr< lr_cloneState.posts.length; lr++){
        if(lr_cloneState.posts[lr].id === lr_post_id){
          lr_targetPost = lr_cloneState.posts[lr];
          lr_index = lr;
        }
      }
      lr_cloneState.posts = lr_cloneState.posts || [];
      lr_targetPost.likes = lr_targetPost.likes || [];
      for(var lr_j=0; lr_j<lr_targetPost.likes.length; lr_j++){
        if(lr_targetPost.likes[lr_j].id === action.like.id){
          lr_indox = lr_j;
        }
      }
      if(lr_indox > -1){
        lr_targetPost.likes.splice(lr_indox, 1);
      }
      if(lr_index > -1){
        lr_cloneState.posts.splice(lr_index, 1, lr_targetPost);
      }
      return lr_cloneState;

    case RECEIVE_POST_ERRORS:
      return { posts: state.posts, postErrors: action.postErrors };
    default:
      return state;
  }
};

export default PostReducer;
