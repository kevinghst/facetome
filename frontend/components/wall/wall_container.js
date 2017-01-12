import {connect} from 'react-redux';
import Wall from './wall';
import {createPost, fetchWall, deletePost, updatePost} from '../../actions/post_actions';
import {getFriendsNames, getSelectedFriends} from '../../reducers/selectors';
import {createComment, deleteComment} from '../../actions/comment_actions';
import {createLike, deleteLike} from '../../actions/like_actions';
import {fetchUserFriends} from '../../actions/friendship_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    postErrors: state.postSlice.postErrors,
    posts: state.postSlice.posts,
    profile: state.profile,
    targetusername: ownProps.params.username,
    friendNames: getFriendsNames(state),
    params: ownProps.params,
    userFriends: state.userFriends,
    selectedFriendKeys: getSelectedFriends(state),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchUserFriends: (id) => dispatch(fetchUserFriends(id)),
    createPost: (post) => dispatch(createPost(post)),
    updatePost: (formData) => dispatch(updatePost(formData)),
    createLike: (like) => dispatch(createLike(like)),
    deleteLike: (like_id) => dispatch(deleteLike(like_id)),
    fetchWall: (user_id) => dispatch(fetchWall(user_id)),
    deletePost: (post_id) => dispatch(deletePost(post_id)),
    createComment: (comment) => dispatch(createComment(comment)),
    deleteComment: (comment_id) => dispatch(deleteComment(comment_id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wall);
