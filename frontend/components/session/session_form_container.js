import {connect} from 'react-redux';
import SessionForm from './session_form';
import {signup, login} from '../../actions/session_actions';

const mapStateToProps = (state) => {
  let log = !!state.session.currentUser;
  let months = ["Month", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  let days = ["Day"];
  for (let i = 1; i <= 31; i++) {
    days.push(i);
  }
  let years = ["Year"];
  for (let j = 2016; j >= 1950; j--) {
    years.push(j);
  }

  let signupArray = [];
  if (state.session.signupErrors){
    state.session.signupErrors.forEach((el) => {
      if (el === "Password is too short (minimum is 6 characters)"){
        signupArray.push("Password is too short! (minimum 6)");
      }
      else {
        let appended = el + "!";
        signupArray.push(appended);
      }
    });
  }

  let loginArray = [];
  if (state.session.loginErrors){
    state.session.loginErrors.forEach((el) => {
      loginArray.push(el + "!");
    });
  }

  return {
    months: months,
    years: years,
    days: days,
    loggedIn: log,
    signupErrors: signupArray,
    loginErrors: loginArray,
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
