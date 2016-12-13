import {connect} from 'react-redux';
import Friends from './friends';
import {getFriendsNames} from '../../reducers/selectors';
import {fetchFriends, deleteFriend} from '../../actions/friendship_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    friends: state.friends,
    friendNames: getFriendsNames(state),
    profile: state.profile,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      fetchFriends: (user_id) => dispatch(fetchFriends(user_id)),
      deleteFriend: (user_id, friend_id) => dispatch(deleteFriend(user_id, friend_id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Friends);
