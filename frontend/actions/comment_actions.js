import * as APIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export const receiveComment = comment => {
  return {
    type: RECEIVE_COMMENT,
    comment
  };
};

export const removeComment = comment => {
  return {
    type: REMOVE_COMMENT,
    comment
  };
};

export function createComment(comment){
  return(dispatch) => {
    return APIUtil.createComment(comment).then(
      (comment) => dispatch(receiveComment(comment))
    );
  };
}

export function deleteComment(comment_id){
  return(dispatch) => {
    return APIUtil.deleteComment(comment_id).then(
      (comment) => dispatch(removeComment(comment))
    );
  };
}
