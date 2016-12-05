import {connect} from 'react-redux';
import SessionForm from './session_form';
import {signup, login} from '../../actions/session_actions';

const mapStateToProps = (state) => {
  const log = !!state.session.currentUser;
  return {
    loggedIn: log,
    errors: state.session.errors,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  var type = 'login';
  var process = (user) => dispatch(login(user));
  if (ownProps.location.pathname === '/signup'){
    type = 'signup';
    process = (user) => dispatch(signup(user));
  }
  return {
    formType: type,
    processForm: process,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
