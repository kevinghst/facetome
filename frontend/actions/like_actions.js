import * as APIUtil from '../util/like_api_util';

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

export const receiveLike = like => {
  return {
    type: RECEIVE_LIKE,
    like
  };
};

export const removeLike = like => {
  return {
    type: REMOVE_LIKE,
    like
  };
};

export function createLike(like){
  return (dispatch) => {
    return APIUtil.createLike(like).then(
      (like) => dispatch(receiveLike(like))
    );
  };
}

export function deleteLike(like_id){
  return(dispatch) => {
    return APIUtil.deleteLike(like_id).then(
      (like) => dispatch(removeLike(like))
    );
  };
}
