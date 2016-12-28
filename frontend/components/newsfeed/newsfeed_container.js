import {connect} from 'react-redux';
import NewsFeed from './newsfeed';
import {createPost, fetchNewsFeed, fetchWall, deletePost, updatePost} from '../../actions/post_actions';
import {fetchProfile} from '../../actions/profile_actions';
import {createComment, deleteComment} from '../../actions/comment_actions';
import {createLike, deleteLike} from '../../actions/like_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.postSlice.posts,
    postErrors: state.postSlice.postErrors,
    currentUser: state.session.currentUser,
    targetusername: ownProps.params.username,
    profile: state.profile,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createPost: (post) => dispatch(createPost(post)),
    updatePost: (formData) => dispatch(updatePost(formData)),
    createLike: (like) => dispatch(createLike(like)),
    deleteLike: (like_id) => dispatch(deleteLike(like_id)),
    fetchNewsFeed: (user_id) => dispatch(fetchNewsFeed(user_id)),
    fetchWall:(user_id) => dispatch(fetchWall(user_id)),
    fetchProfile: (username) => dispatch(fetchProfile(username)),
    deletePost: (post_id) => dispatch(deletePost(post_id)),
    createComment: (comment) => dispatch(createComment(comment)),
    deleteComment: (comment_id) => dispatch(deleteComment(comment_id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsFeed);
