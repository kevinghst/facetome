import {connect} from 'react-redux';
import UserPage from './userpage';
import {fetchProfile, updateProfile} from '../../actions/profile_actions';
import {friendRequest} from '../../actions/request_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    profile: state.profile,
    currentUser: state.session.currentUser,
    targetusername: ownProps.params.username,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    fetchProfile: (username) => dispatch(fetchProfile(username)),
    updateProfile: (user) => dispatch(updateProfile(user)),
    friendRequest: (request) => dispatch(friendRequest(request))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
