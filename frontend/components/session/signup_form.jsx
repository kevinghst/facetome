import React from 'react';

class SignupForm extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <section className="content-signup">

        <h2>Sign Up</h2>
        <div>It's free and always will be.</div>

        <form className = "signup" onSubmit={this.props.handleSubmit} >
          <input type="text"
              className = "firstname"
              placeholder="First name"
              value={this.props.firstname}
              onChange = {this.props.updateForm}>
          </input>

          <input type="text"
              className = "lastname"
              value={this.props.lastname}
              placeholder="Last name"
              onChange = {this.props.updateForm}>
          </input>

          <input type="text"
              className = "signupusername"
              value={this.props.signupusername}
              placeholder="username"
              onChange = {this.props.updateForm}>
          </input>

          <input type="password"
              className = "signupPassword"
              placeholder="Password"
              value={this.props.signupPassword}
              onChange = {this.props.updateForm}>
          </input>

          <div className="lowerhalf-signup group">
            <div className="birth-gender-button">
              <section className="birthdate-container">
                <h2>Birthday</h2>
                <div className="birthdate">
                  <select className = "birthmonth"
                    value={this.props.birthmonth}
                    onChange={this.props.updateForm} >
                    { this.props.months.map((month, i) => {
                      return <option value={month} key={i}>{month}</option>;
                    }) }
                  </select>

                  <select className = "birthday"
                    value={this.props.birthday}
                    onChange={this.props.updateForm} >
                    { this.props.days.map((day, i) => {
                      return <option value={day} key={i}>{day}</option>;
                    }) }
                  </select>

                  <select className = "birthyear"
                    value={this.props.birthyear}
                    onChange={this.props.updateForm} >
                    { this.props.years.map((year, i) => {
                      return <option value={year} key={i}>{year}</option>;
                    }) }
                  </select>
                </div>
              </section>

              <div className="gender-form">
                <label className="female">
                  <input className="gender"
                         onChange = {this.props.updateForm}
                         type="radio"
                         name="gender"
                         value="female">
                  </input>
                  <div>Female</div>
                </label>

                <label className="male">
                  <input className="gender"
                         onChange = {this.props.updateForm}
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
    );
  }
}

export default SignupForm;
