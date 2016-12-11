import {connect} from 'react-redux';
import ImageUpload from './image_upload';
import {fetchProfile, updateProfile} from '../../actions/profile_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    profile: state.profile,
    currentUser: state.session.currentUser,
    phototype: ownProps.params.photo,
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
)(ImageUpload);
