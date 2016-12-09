import React from 'react';
import { Link, withRouter } from 'react-router';

class UserProfile extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchProfile(currentUser);
  }

  render(){

    let profilePairs = this.props.profile;
    let profileKeys = Object.keys(profilePairs);

    let profile = (
      <ul>
        {
          profileKeys.map((key, idx) =>
            <li key={idx}>
              <div>{key}</div>
              <div>{profilePairs[key]}</div>
            </li>
        )}
      </ul>
    );


    return(
      <div>
        {profile}
      </div>
    );
  }
}

export default UserProfile;
