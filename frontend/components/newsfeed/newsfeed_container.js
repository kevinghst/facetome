import {connect} from 'react-redux';
import NewsFeed from './newsfeed';
import {createPost, fetchNewsFeed} from '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.postSlice.posts,
    postErrors: state.postSlice.postErrors,
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createPost: (post) => dispatch(createPost(post)),
    fetchNewsFeed: (user_id) => dispatch(fetchNewsFeed(user_id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsFeed);
