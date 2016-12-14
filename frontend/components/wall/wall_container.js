import {connect} from 'react-redux';
import Wall from './wall';
import {createPost, fetchWall} from '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    postErrors: state.postSlice.postErrors,
    posts: state.postSlice.posts,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createPost: (post) => dispatch(createPost(post)),
    fetchWall: (user_id) => dispatch(fetchWall(user_id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wall);
