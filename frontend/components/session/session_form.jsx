import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { loginEmail: "",
                   loginPassword: "",

                   firstname: "",
                   lastname: "",
                   signupEmail: "",
                   signupPassword: "",
                   birthday: "",
                   birthmonth: "",
                   birthyear: "",
                   gender: ""
                 };

    this.updateForm = this.updateForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateForm(e){
    const stateType = e.currentTarget.className;
    const stateValue = e.currentTarget.value;
    this.setState({ [stateType]: stateValue });
  }

  handleSubmit(e){
    e.preventDefault();
    if (e.currentTarget.className === "login"){
      var loginState = { email: this.state.loginEmail,
                        password: this.state.loginPassword
                      };

      this.props.login(loginState).then((currentUser) => {
        this.props.router.push("/home");
      });
    }
    else {
      var birthdate = this.state.birthmonth + " " + this.state.birthday + ", " + this.state.birthyear;
      var signupState = { firstname: this.state.firstname,
                        lastname: this.state.lastname,
                        email: this.state.signupEmail,
                        password: this.state.signupPassword,
                        birthday: this.state.birthday,
                        gender: this.state.gender
                      };
      this.props.signup(signupState).then((currentUser) => {
        this.props.router.push("/home");
      });
    }

  }

  componentWillReceiveProps(){
    this.setState({ loginEmail: "",
                    loginPassword: "",
                  });
  }

  render(){

    return (
      <div>
        <h2>Log In
          <form className = "login" onSubmit={this.handleSubmit} >
            <label>Email
              <input type="text"
                  className = "loginEmail"
                  value={this.state.loginEmail}
                  onChange = {this.updateForm}>
              </input>
            </label>

            <label>Password
              <input type="text"
                  className = "loginPassword"
                  value={this.state.loginPassword}
                  onChange = {this.updateForm}>
              </input>
            </label>

            <input type="submit" value="Log in" />
          </form>
        </h2>

        <h2>Sign Up
          <form className = "signup" onSubmit={this.handleSubmit} >
            <label>First name
              <input type="text"
                  className = "firstname"
                  value={this.state.firstname}
                  onChange = {this.updateForm}>
              </input>
            </label>

            <label>Last name
              <input type="text"
                  className = "lastname"
                  value={this.state.lastname}
                  onChange = {this.updateForm}>
              </input>
            </label>

            <label>Email
              <input type="text"
                  className = "signupEmail"
                  value={this.state.signupEmail}
                  onChange = {this.updateForm}>
              </input>
            </label>

            <label>Password
              <input type="text"
                  className = "signupPassword"
                  value={this.state.signupPassword}
                  onChange = {this.updateForm}>
              </input>
            </label><br></br>

            <label>Birthday
              <select className = "birthmonth"
                value={this.state.birthmonth}
                onChange={this.updateForm} >
                { this.props.months.map((month, i) => {
                  return <option value={month} key={i}>{month}</option>;
                }) }
              </select>

              <select className = "birthday"
                value={this.state.birthday}
                onChange={this.updateForm} >
                { this.props.days.map((day, i) => {
                  return <option value={day} key={i}>{day}</option>;
                }) }
              </select>

              <select className = "birthyear"
                value={this.state.birthyear}
                onChange={this.updateForm} >
                { this.props.years.map((year, i) => {
                  return <option value={year} key={i}>{year}</option>;
                }) }
              </select>


            </label>

            <input className="gender"
                   onChange = {this.updateForm}
                   type="radio"
                   name="gender"
                   value="male">
            </input> Male

            <input className="gender"
                   onChange = {this.updateForm}
                   type="radio"
                   name="gender"
                   value="female">
            </input> Female <br></br>


            <input type="submit" value="Create Account" />

          </form>
        </h2>

      </div>
    );
  }

}



export default SessionForm;
