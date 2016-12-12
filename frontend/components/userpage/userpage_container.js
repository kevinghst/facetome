import {connect} from 'react-redux';
import UserPage from './userpage';
import {fetchProfile, updateProfile} from '../../actions/profile_actions';
import {friendRequest} from '../../actions/request_actions';
import {logout, deleteUser} from '../../actions/session_actions';
import {fetchOwnRequests, fetchOtherRequests, deleteRequest} from '../../actions/request_actions';
import {acceptFriend, fetchFriends, deleteFriend} from '../../actions/friendship_actions';
import {getFriendsNames, getOtherRequestsNames} from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    profile: state.profile,
    currentUser: state.session.currentUser,
    targetusername: ownProps.params.username,
    ownRequests: state.ownRequests,
    otherRequests: state.otherRequests,
    otherRequestsNames: getOtherRequestsNames(state),
    friends: state.friends,
    friendNames: getFriendsNames(state),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    fetchProfile: (username) => dispatch(fetchProfile(username)),
    updateProfile: (user) => dispatch(updateProfile(user)),
    friendRequest: (request) => dispatch(friendRequest(request)),
    fetchFriends: (user_id) => dispatch(fetchFriends(user_id)),
    acceptFriend: (friendship) => dispatch(acceptFriend(friendship)),
    deleteRequest: (requester_id, requestee_id) => dispatch(deleteRequest(requester_id, requestee_id)),
    deleteFriend: (user_id, friend_id) => dispatch(deleteFriend(user_id, friend_id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
