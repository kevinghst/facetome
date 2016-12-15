import {connect} from 'react-redux';
import NewsFeed from './newsfeed';
import {createPost, fetchNewsFeed, fetchWall, deletePost} from '../../actions/post_actions';
import {fetchProfile} from '../../actions/profile_actions';
import {createComment} from '../../actions/comment_actions';


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
    fetchNewsFeed: (user_id) => dispatch(fetchNewsFeed(user_id)),
    fetchWall:(user_id) => dispatch(fetchWall(user_id)),
    fetchProfile: (username) => dispatch(fetchProfile(username)),
    deletePost: (post_id) => dispatch(deletePost(post_id)),
    createComment: (comment) => dispatch(createComment(comment))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsFeed);
