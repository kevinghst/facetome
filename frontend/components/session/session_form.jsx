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
    this.demologin = this.demologin.bind(this);
  }

  updateForm(e){
    const stateType = e.currentTarget.className;
    const stateValue = e.currentTarget.value;
    this.setState({ [stateType]: stateValue });
  }

  handleSubmit(e){
    e.preventDefault();
    if (e.currentTarget.className === "login group"){
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

  demologin(){
    var demoLoginState = { email: "harrypotter",
                          password: "harrypotter"
                    };

    this.props.login(demoLoginState).then((currentUser) => {
      this.props.router.push("/home");
    });
  }

  componentWillReceiveProps(){
    this.setState({ loginEmail: "",
                    loginPassword: "",
                  });
  }

  render(){

    return (
      <div className="login-main">

        <header className="header">
          <nav className="log-in group">


            <Link to="/home" className="login-logo">facetome</Link>

            <form className="login group" onSubmit={this.handleSubmit} >

              <button className="demologin" onClick={this.demologin}>Demo Login</button>

              <div className="email-field">
              <label>Email</label>
                <input type="text"
                    className = "loginEmail"
                    value={this.state.loginEmail}
                    onChange = {this.updateForm}>
                </input>
              </div>

              <div className="password-field">
              <label>Password</label>
                <input type="password"
                    className = "loginPassword"
                    value={this.state.loginPassword}
                    onChange = {this.updateForm}>
                </input>
              </div>

              <input className="submit-button" type="submit" value="Log in" />

            </form>

          </nav>
        </header>

        <section className="content group">

          <ul className="loginErrors">
            {
              this.props.loginErrors.map((error, i) => {
                return <li key={i}>{error}</li>;
              })
            }
          </ul>

          <section className="content-info">
            <h2>Connect with friends and the world around you on Facetome.</h2>

            <section className="info-list">
              <div className="info-one group">
                <img src={window.login_photo_one}/>
                <div>See photos and updates  from friends in News Feed.</div>
              </div>

              <div className="info-two group">
                <img src={window.login_photo_two}/>
                <div>Share what's new  in your life on your Timeline.</div>
              </div>

              <div className="info-three group">
                <img src={window.login_photo_three}/>
                <div>Find more  of what you're looking for with Facebook Search.</div>
              </div>

            </section>
          </section>

          <section className="content-signup">

            <h2>Sign Up</h2>
            <div>It's free and always will be.</div>

            <form className = "signup" onSubmit={this.handleSubmit} >
              <input type="text"
                  className = "firstname"
                  placeholder="First name"
                  value={this.state.firstname}
                  onChange = {this.updateForm}>
              </input>

              <input type="text"
                  className = "lastname"
                  value={this.state.lastname}
                  placeholder="Last name"
                  onChange = {this.updateForm}>
              </input>

              <input type="text"
                  className = "signupEmail"
                  value={this.state.signupEmail}
                  placeholder="Email"
                  onChange = {this.updateForm}>
              </input>

              <input type="password"
                  className = "signupPassword"
                  placeholder="Password"
                  value={this.state.signupPassword}
                  onChange = {this.updateForm}>
              </input>

              <div className="lowerhalf-signup group">
                <div className="birth-gender-button">
                  <section className="birthdate-container">
                    <h2>Birthday</h2>
                    <div className="birthdate">
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
                    </div>
                  </section>

                  <div className="gender-form">
                    <label className="female">
                      <input className="gender"
                             onChange = {this.updateForm}
                             type="radio"
                             name="gender"
                             value="female">
                      </input>
                      <div>Female</div>
                    </label>

                    <label className="male">
                      <input className="gender"
                             onChange = {this.updateForm}
                             type="radio"
                             name="gender"
                             value="male">
                      </input>
                      <div>Male</div>
                    </label>
                  </div>

                  <button className="sign-up-button" type="submit">Sign Up</button>
                </div>
                <ul className="signupErrors">
                  {
                    this.props.signupErrors.map((error, i) => {
                      return <li key={i}>{error}</li>;
                    })
                  }
                </ul>
              </div>

            </form>

          </section>

        </section>
      </div>
    );
  }

}



export default SessionForm;
