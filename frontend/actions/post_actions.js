import * as APIUtil from '../util/post_api_util';

export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_POST_ERRORS = "RECEIVE_POST_ERRORS";

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



export function createPost(post){
  return (dispatch) => {
    return APIUtil.createPost(post).then(
        (post) => dispatch(receivePost(post)),
        (err) => dispatch(receivePostErrors(err.responseJSON))
    );
  };
}
