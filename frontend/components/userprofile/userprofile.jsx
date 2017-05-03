import React from 'react';
import { Link, withRouter } from 'react-router';
import merge from 'lodash/merge';
import InlineEditable from '../inlineEditable';

class UserProfile extends React.Component{
  constructor(props){
    super(props);
    this.updateValue = this.updateValue.bind(this);
  }

  updateValue(profileType, profileValue){
    var formData = new FormData();
    formData.append("user[username]", this.props.currentUser.username);
    formData.append(`user[${profileType}]`, profileValue);
    this.props.updateProfile(formData);
  }


  render(){
    let condition = true;
    if(this.props.currentUser && this.props.profile && (this.props.currentUser.id !== this.props.profile.id)){
      condition = false;
    }

    let profileKeys = Object.keys(this.props.selectedProfile);

    let profileTypes = (
      <ul className="profileTypes">
        {
          profileKeys.map((key, idx) =>
          <li className="profileform-type-li" key={idx}>
            {key}
          </li>
        )}
      </ul>
    );

    let profileForm=(
      <ul className="profileForm">
      {
        profileKeys.map((key, idx) =>
        <li className="profileform-li" key={idx}>
          <InlineEditable
            profileKey={key}
            profileValue={this.props.selectedProfile[key]}
            updateValue={this.updateValue}
            currentUser={this.props.currentUser}
            profile={this.props.profile}
          />
        </li>
      )}
      </ul>
    );

    return(
      <div className="profile-main">
        <h2 className="profile-header">About</h2>

        <div className="profile-content">
          {profileForm}
        </div>
      </div>
    );
  }
}

export default UserProfile;
