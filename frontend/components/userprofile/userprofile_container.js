import {connect} from 'react-redux';
import UserProfile from './userprofile';
import {fetchProfile, updateProfile} from '../../actions/profile_actions';

const mapStateToProps = (state) => {
  return {
    profile: state.profile,
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    fetchProfile: (user) => dispatch(fetchProfile(user)),
    updateProfile: (user) => dispatch(updateProfile(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
