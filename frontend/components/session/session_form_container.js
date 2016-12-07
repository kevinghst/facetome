import {connect} from 'react-redux';
import SessionForm from './session_form';
import {signup, login} from '../../actions/session_actions';

const mapStateToProps = (state) => {
  const log = !!state.session.currentUser;
  const months = ["Month", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  var days = ["Day"];
  for (var i = 1; i <= 31; i++) {
    days.push(i);
  }
  var years = ["Year"];
  for (var j = 2016; j >= 1950; j--) {
    years.push(j);
  }

  return {
    months: months,
    years: years,
    days: days,
    loggedIn: log,
    errors: state.session.errors,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signup: user => dispatch(signup(user)),
    login: user => dispatch(login(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);



// else {
//   var tempState = { firstname:
//                     lastname:
//                     email:
//                     password:
//                     birthday:
//                     gender:
//
//
//                   };
