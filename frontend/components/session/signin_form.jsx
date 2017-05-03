import React from 'react';

const SigninForm = ({ handleSubmit, demologinTwo, demologin, loginusername, updateForm, loginPassword }) => {
  return(
    <form className="login group" onSubmit={handleSubmit} >
      <div className="demologin">
        <button type="button" className="demologin-harry" onClick={demologinTwo}>Login as Tyrion</button>
        <button type="button" className="demologin-arya" onClick={demologin}>Login as Arya</button>
      </div>

      <div className="username-field">
      <label>username</label>
        <input type="text"
            className = "loginusername"
            value={loginusername}
            onChange = {updateForm}>
        </input>
      </div>

      <div className="password-field">
      <label>Password</label>
        <input type="password"
            className = "loginPassword"
            value={loginPassword}
            onChange = {updateForm}>
        </input>
      </div>
      <input className="submit-button" type="submit" value="Log in" />
    </form>
  );
}
export default SigninForm;
