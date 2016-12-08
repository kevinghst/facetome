import {connect} from 'react-redux';
import HomePage from './homepage';
import {logout, deleteUser} from '../../actions/session_actions';

const mapStateToProps = (state) => {
  const log = !!state.session.currentUser;
  return {
    loggedIn: log,
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      logout: () => dispatch(logout()),
      deleteUser: (user) => dispatch(deleteUser(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
