import {connect} from 'react-redux';
import Friends from './friends';
import {getFriendsNames} from '../../reducers/selectors';
import {fetchFriends, deleteFriend, fetchUserFriends} from '../../actions/friendship_actions';
import {fetchProfile} from '../../actions/profile_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    friends: state.friends,
    targetusername: ownProps.params.username,
    friendNames: getFriendsNames(state),
    profile: state.profile,
    userFriends: state.userFriends,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      fetchUserFriends: (user_id) => dispatch(fetchUserFriends(user_id)),
      fetchProfile: (username) => dispatch(fetchProfile(username)),
      deleteFriend: (user_id, friend_id) => dispatch(deleteFriend(user_id, friend_id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Friends);
