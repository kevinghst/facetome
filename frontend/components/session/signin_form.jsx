import React from 'react';

class SigninForm extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <form className="login group" onSubmit={this.props.handleSubmit} >
        <div className="demologin">
          <button type="button" className="demologin-harry" onClick={this.props.demologinTwo}>Login as Tyrion</button>
          <button type="button" className="demologin-arya" onClick={this.props.demologin}>Login as Arya</button>
        </div>

        <div className="username-field">
        <label>username</label>
          <input type="text"
              className = "loginusername"
              value={this.props.loginusername}
              onChange = {this.props.updateForm}>
          </input>
        </div>

        <div className="password-field">
        <label>Password</label>
          <input type="password"
              className = "loginPassword"
              value={this.props.loginPassword}
              onChange = {this.props.updateForm}>
          </input>
        </div>
        <input className="submit-button" type="submit" value="Log in" />
      </form>
    );
  }
}

export default SigninForm;
