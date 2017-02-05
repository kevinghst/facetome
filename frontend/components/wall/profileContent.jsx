import React from 'react';

class ProfileContent extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <ul className="profileContent">
          <li className="profileContent-line">
            <div className="profile-icon"></div>
            <div className="profile-kind">Firstname</div>
            <div className="profile-substance">{this.props.profilePairs.firstname}</div>
          </li>
          <li className="profileContent-line">
            <div className="profile-icon"></div>
            <div className="profile-kind">Lastname</div>
            <div className="profile-substance">{this.props.profilePairs.lastname}</div>
          </li>
          <li className="profileContent-line">
            <div className="profile-icon"></div>
            <div className="profile-kind">Gender</div>
            <div className="profile-substance">{this.props.profilePairs.gender}</div>
          </li>
          <li className="profileContent-line">
            <div className="profile-icon">
              <img src={window.assets.birthdayIcon}/>
            </div>
            <div className="profile-kind">Birthday</div>
            <div className="profile-substance">{this.props.profilePairs.birthday}</div>
          </li>
          <li className="profileContent-line">
            <div className="profile-icon">
              <img src={window.assets.hometownIcon}/>
            </div>
            <div className="profile-kind">HomeTown</div>
            <div className="profile-substance">{this.props.profilePairs.hometown}</div>
          </li>
          <li className="profileContent-line">
            <div className="profile-icon work-icon">
              <img src={window.assets.workIcon}/>
            </div>
            <div className="profile-kind">Occupation</div>
            <div className="profile-substance">{this.props.profilePairs.occupation}</div>
          </li>
      </ul>
    );
  }
}

export default ProfileContent;
