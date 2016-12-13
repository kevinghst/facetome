import React from 'react';
import { Link, withRouter } from 'react-router';
import merge from 'lodash/merge';



class UserProfile extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      editable: false,
      firstname: "",
      lastname: "",
      gender: "",
      hometown: "",
      occupation: ""
    };

    this.updateValue = this.updateValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submitChange = this.submitChange.bind(this);
  }

  updateValue(e) {
    let profileType = e.currentTarget.className;
    let updatedValue = e.currentTarget.value;
    this.setState({ [profileType]: updatedValue });
  }

  submitChange(e){
    let profileType = e.currentTarget.value;
    if(this.state[[profileType]] !== ""){
      var formData = new FormData();
      formData.append("user[username]", this.props.currentUser.username);
      formData.append(`user[${profileType}]`, this.state[[profileType]]);
      this.props.updateProfile(formData);
      this.setState( {[profileType]: "" } );
    }
  }

  componentDidMount(){
    if(this.props.currentUser.id === this.props.profile.id){
      this.setState({ editable: true });
    }
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
    delete profilePairs["birthday"];
    let profileKeys = Object.keys(profilePairs);

    let profileTriple = (
      <ul className="profileTriple">
        {
          profileKeys.map((key, idx) =>
            <li key={idx} className="profile-line">
              <div className="profileKeys">{key}</div>
              <div className="profileValues">{profilePairs[key]}</div>

              {this.state.editable &&
                <input type="text" className={`${key}`} value={this.state[[key]]} onChange={this.updateValue}/>
              }

              {this.state.editable &&
                <button className= "edit-profile-button" value={`${key}`} onClick={this.submitChange}>Edit</button>
              }
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
