import {connect} from 'react-redux';
import HomePage from './homepage';
import {logout, deleteUser} from '../../actions/session_actions';
import {fetchOwnRequests, fetchOtherRequests, deleteRequest} from '../../actions/request_actions';
import {acceptFriend, fetchFriends} from '../../actions/friendship_actions';
import {getFriendsNames} from '../../reducers/selectors';

const mapStateToProps = (state) => {
  const log = !!state.session.currentUser;
  return {
    loggedIn: log,
    currentUser: state.session.currentUser,
    ownRequests: state.ownRequests,
    otherRequests: state.otherRequests,
    friends: state.friends,
    friendNames: getFriendsNames(state),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      logout: () => dispatch(logout()),
      deleteUser: (user) => dispatch(deleteUser(user)),
      fetchOwnRequests: (user) => dispatch(fetchOwnRequests(user)),
      fetchOtherRequests: (user) => dispatch(fetchOtherRequests(user)),
      deleteRequest: (requester_id, requestee_id) => dispatch(deleteRequest(requester_id, requestee_id)),
      acceptFriend: (friendship) => dispatch(acceptFriend(friendship)),
      fetchFriends: (user_id) => dispatch(fetchFriends(user_id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
