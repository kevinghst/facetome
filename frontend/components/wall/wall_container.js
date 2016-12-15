import {connect} from 'react-redux';
import Wall from './wall';
import {createPost, fetchWall, deletePost} from '../../actions/post_actions';
import {getFriendsNames} from '../../reducers/selectors';
import {createComment} from '../../actions/comment_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    postErrors: state.postSlice.postErrors,
    posts: state.postSlice.posts,
    profile: state.profile,
    targetusername: ownProps.params.username,
    friendNames: getFriendsNames(state),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createPost: (post) => dispatch(createPost(post)),
    fetchWall: (user_id) => dispatch(fetchWall(user_id)),
    deletePost: (post_id) => dispatch(deletePost(post_id)),
    createComment: (comment) => dispatch(createComment(comment))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wall);
