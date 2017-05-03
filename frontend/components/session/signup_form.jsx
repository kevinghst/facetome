import React from 'react';

const SignupForm = ({ handleSubmit, firstname, updateForm, lastname, signupusername,
signupPassword, birthmonth, months, birthday, days, birthyear, years, signupErrors }) => {
  return(
    <section className="content-signup">

      <h2>Sign Up</h2>
      <div>It's free and always will be.</div>

      <form className = "signup" onSubmit={handleSubmit} >
        <input type="text"
            className = "firstname"
            placeholder="First name"
            value={firstname}
            onChange = {updateForm}>
        </input>

        <input type="text"
            className = "lastname"
            value={lastname}
            placeholder="Last name"
            onChange = {updateForm}>
        </input>

        <input type="text"
            className = "signupusername"
            value={signupusername}
            placeholder="username"
            onChange = {updateForm}>
        </input>

        <input type="password"
            className = "signupPassword"
            placeholder="Password"
            value={signupPassword}
            onChange = {updateForm}>
        </input>

        <div className="lowerhalf-signup group">
          <div className="birth-gender-button">
            <section className="birthdate-container">
              <h2>Birthday</h2>
              <div className="birthdate">
                <select className = "birthmonth"
                  value={birthmonth}
                  onChange={updateForm} >
                  { months.map((month, i) => {
                    return <option value={month} key={i}>{month}</option>;
                  }) }
                </select>

                <select className = "birthday"
                  value={birthday}
                  onChange={updateForm} >
                  { days.map((day, i) => {
                    return <option value={day} key={i}>{day}</option>;
                  }) }
                </select>

                <select className = "birthyear"
                  value={birthyear}
                  onChange={updateForm} >
                  { years.map((year, i) => {
                    return <option value={year} key={i}>{year}</option>;
                  }) }
                </select>
              </div>
            </section>

            <div className="gender-form">
              <label className="female">
                <input className="gender"
                       onChange = {updateForm}
                       type="radio"
                       name="gender"
                       value="female">
                </input>
                <div>Female</div>
              </label>

              <label className="male">
                <input className="gender"
                       onChange = {updateForm}
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
              signupErrors.map((error, i) => {
                return <li key={i}>{error}</li>;
              })
            }
          </ul>
        </div>
      </form>
    </section>
  );
}

export default SignupForm;
