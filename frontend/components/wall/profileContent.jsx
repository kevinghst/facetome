import React from 'react';

const ProfileContent = ({ profilePairs }) => {
  return(
    <ul className="profileContent">
        <li className="profileContent-line">
          <div className="profile-icon"></div>
          <div className="profile-kind">Firstname</div>
          <div className="profile-substance">{profilePairs.firstname}</div>
        </li>
        <li className="profileContent-line">
          <div className="profile-icon"></div>
          <div className="profile-kind">Lastname</div>
          <div className="profile-substance">{profilePairs.lastname}</div>
        </li>
        <li className="profileContent-line">
          <div className="profile-icon"></div>
          <div className="profile-kind">Gender</div>
          <div className="profile-substance">{profilePairs.gender}</div>
        </li>
        <li className="profileContent-line">
          <div className="profile-icon">
            <img src={window.assets.birthdayIcon}/>
          </div>
          <div className="profile-kind">Birthday</div>
          <div className="profile-substance">{profilePairs.birthday}</div>
        </li>
        <li className="profileContent-line">
          <div className="profile-icon">
            <img src={window.assets.hometownIcon}/>
          </div>
          <div className="profile-kind">HomeTown</div>
          <div className="profile-substance">{profilePairs.hometown}</div>
        </li>
        <li className="profileContent-line">
          <div className="profile-icon work-icon">
            <img src={window.assets.workIcon}/>
          </div>
          <div className="profile-kind">Occupation</div>
          <div className="profile-substance">{profilePairs.occupation}</div>
        </li>
    </ul>
  );
}

export default ProfileContent;
