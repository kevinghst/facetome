import * as APIUtil from '../util/post_api_util';

export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_POST_ERRORS = "RECEIVE_POST_ERRORS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const REMOVE_POST = "REMOVE_POST";
export const CHANGE_POST = "CHANGE_POST";

export const receivePosts = posts => {
  return {
    type: RECEIVE_POSTS,
    posts
  };
};

export const changePost = post => {
  return {
    type: CHANGE_POST,
    post
  };
};

export const removePost = post => {
  return {
    type: REMOVE_POST,
    post
  };
};

export const receivePost = post => {
  return {
    type: RECEIVE_POST,
    post
  };
};

export const receivePostErrors = postErrors => {
  return {
      type: RECEIVE_POST_ERRORS,
      postErrors
  };
};

export function fetchNewsFeed(user_id){
  return (dispatch) => {
    return APIUtil.fetchNewsFeed(user_id).then(
      (posts) => dispatch(receivePosts(posts))
    );
  };
}

export function createPost(post){
  return (dispatch) => {
    return APIUtil.createPost(post).then(
        (post) => dispatch(receivePost(post)),
        (err) => dispatch(receivePostErrors(err.responseJSON))
    );
  };
}

export function updatePost(formData){
  return (dispatch) => {
    return APIUtil.updatePost(formData).then(
      (post) => dispatch(changePost(post)),
      (err) => dispatch(receivePostErrors(err.responseJSON))
    );
  };
}

export function deletePost(post_id){
  return (dispatch) => {
    return APIUtil.deletePost(post_id).then(
      (post) => dispatch(removePost(post))
    );
  };
}

export function fetchWall(username){
  return (dispatch) => {
    return APIUtil.fetchWall(username).then(
      (posts) => dispatch(receivePosts(posts))
    );
  };
}
