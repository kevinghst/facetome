import React from 'react';
import { Link, withRouter } from 'react-router';
import merge from 'lodash/merge';



class UserProfile extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      username: "",
      gender: "",
      birthday: "",
      hometown: "",
      occupation: ""
    };

    this.updateValue = this.updateValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateValue(e) {
    let profileType = e.currentTarget.className;
    let updatedValue = e.currentTarget.value;
    this.setState({ [profileType]: updatedValue });
  }

  handleSubmit(e) {
    var formData = new FormData();
    formData.append("user[username]", this.props.currentUser.username);
    formData.append("user[gender]", this.state.gender);
    this.props.updateProfile(formData);
  }

  render(){
    let profilePairs = Object.assign({}, this.props.profile);
    delete profilePairs["photo_url"];
    delete profilePairs["background_url"];
    delete profilePairs["id"];
    let profileKeys = Object.keys(profilePairs);

    let profileTriple = (
      <ul className="profileTriple">
        {
          profileKeys.map((key, idx) =>
            <li key={idx} className="profile-line">
              <div className="profileKeys">{key}</div>
              <div className="profileValues">{profilePairs[key]}</div>
              <input type="text" className={`${key}`} onChange={this.update}/>
            </li>
        )}
      </ul>
    );

    return(
      <div className="profile-main">
        <h2 className="profile-header">About</h2>

        <div className="profile-content">
          {profileTriple}
        </div>
      </div>
    );
  }
}

export default UserProfile;
