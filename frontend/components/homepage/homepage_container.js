import {connect} from 'react-redux';
import HomePage from './homepage';
import {logout} from '../../actions/session_actions';

const mapStateToProps = (state) => {
  const log = !!state.session.currentUser;
  return {
    loggedIn: log,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
