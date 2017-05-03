import React from 'react';
import { Link, withRouter } from 'react-router';
import SignupForm from './signup_form';
import SigninForm from './signin_form';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
       loginusername: "",
       loginPassword: "",
       firstname: "",
       lastname: "",
       signupusername: "",
       signupPassword: "",
       birthday: "",
       birthmonth: "",
       birthyear: "",
       gender: ""
    };

    this.updateForm = this.updateForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demologin = this.demologin.bind(this);
    this.demologinTwo = this.demologinTwo.bind(this);
  }

  updateForm(e){
    let stateType = e.currentTarget.className;
    let stateValue = e.currentTarget.value;
    this.setState({ [stateType]: stateValue });
  }

  handleSubmit(e){
    e.preventDefault();
    if (e.currentTarget.className === "login group"){
      let loginState = { username: this.state.loginusername,
                        password: this.state.loginPassword
                      };

      this.props.login(loginState).then((currentUser) => {
        this.props.router.push("/home");
      });
    }
    else {
      let birthdate = this.state.birthmonth + " " + this.state.birthday + ", " + this.state.birthyear;
      let signupState = { firstname: this.state.firstname,
                        lastname: this.state.lastname,
                        username: this.state.signupusername,
                        password: this.state.signupPassword,
                        birthday: this.state.birthday,
                        gender: this.state.gender
                      };
      this.props.signup(signupState).then((currentUser) => {
        this.props.router.push("/home");
      });
    }
  }

  demologinTwo(){
    let demoLoginState = {
      username: "tyrion",
      password: "tyrion"
    };
    this.props.login(demoLoginState).then((currentUser) => {
      this.props.router.push("/home");
    });
  }

  demologin(){
    let demoLoginState = {
      username: "aryastark",
      password: "aryastark"
    };
    this.props.login(demoLoginState).then((currentUser) => {
      this.props.router.push("/home");
    });
  }

  componentWillReceiveProps(){
    this.setState({ loginusername: "",
                    loginPassword: "",
                  });
  }

  render(){
    return (
      <div className="login-main">
        <header className="header">
          <nav className="log-in group">

            <Link to="/home" className="login-logo">facetome</Link>

            <SigninForm
              handleSubmit={this.handleSubmit}
              demologinTwo={this.demologinTwo}
              demologin={this.demologin}
              loginusername={this.state.loginusername}
              updateForm={this.updateForm}
              loginPassword={this.state.loginPassword}
            />
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
                <img src={window.assets.login_photo_one}/>
                <div>See photos and updates  from friends in News Feed.</div>
              </div>

              <div className="info-two group">
                <img src={window.assets.login_photo_two}/>
                <div>Share what's new  in your life on your Timeline.</div>
              </div>

              <div className="info-three group">
                <img src={window.assets.login_photo_three}/>
                <div>Find more  of what you're looking for with Facebook Search.</div>
              </div>
            </section>
          </section>

          <SignupForm
            handleSubmit={this.handleSubmit}
            firstname={this.state.firstname}
            updateForm={this.updateForm}
            lastname={this.state.lastname}
            signupusername={this.state.signupusername}
            signupPassword={this.state.signupPassowrd}
            birthmonth={this.state.birthmonth}
            birthday={this.state.birthday}
            months={this.props.months}
            days={this.props.days}
            years={this.props.years}
            signupErrors={this.props.signupErrors}
          />
        </section>
      </div>
    );
  }

}



export default SessionForm;
