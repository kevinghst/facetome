import {connect} from 'react-redux';
import UserPage from './userpage';
import {fetchProfile, updateProfile} from '../../actions/profile_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    profile: state.profile,
    currentUser: state.session.currentUser,
    targetEmail: ownProps.params.email,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    fetchProfile: (email) => dispatch(fetchProfile(email)),
    updateProfile: (user) => dispatch(updateProfile(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
