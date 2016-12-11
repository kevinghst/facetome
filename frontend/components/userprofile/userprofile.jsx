import React from 'react';
import { Link, withRouter } from 'react-router';
import merge from 'lodash/merge';

class UserProfile extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      gender: "",
      birthday: "",
      hometown: "",
      occupation: ""
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(e) {
    debugger
    let profileType = e.currentTarget.className;
    let updatedValue = e.currentTaret.value;
    this.setState({ [profileType]: updatedValue });
  }

  handleSubmit(e) {
    var formData = new FormData();
    formData.append("user[email]", this.props.currentUser.email);
    formData.append("user[gender]", this.state.gender);
    this.props.updateProfile(formData);
  }

  render(){
    debugger
    let profilePairs = Object.assign({}, this.props.profile);
    delete profilePairs["photo_url"];
    delete profilePairs["background_url"];
    delete profilePairs["id"];
    let profileKeys = Object.keys(profilePairs);

    let profile = (
      <ul>
        {
          profileKeys.map((key, idx) =>
            <li key={idx}>
              <div>{key}</div>
            </li>
        )}
      </ul>
    );

    let profileValues = (
      <ul>
        {
          profileKeys.map((key, idx) =>
            <li key={idx}>
              <div>{profilePairs[key]}</div>
            </li>
        )}
      </ul>
    );

    let profileEdits = (
      <ul>
        {
          profileKeys.map((key, idx) =>
            <li key={idx}>
              <input type="text"
                     className={key}
                     onChange={this.update}

              />
            </li>
        )}
      </ul>
    );


    return(
      <div>
        {profile}
        {profileValues}
        {profileEdits}

        <button onClick={this.handleSubmit}>Update Profile</button>

      </div>
    );
  }
}

export default UserProfile;
