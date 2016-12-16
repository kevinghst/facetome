import React from 'react';
import { Link, withRouter } from 'react-router';

class UserPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      photo: null,
      background: null,
      showDelete: false
    };
    this.updateCover = this.updateCover.bind(this);
    this.updatePhoto = this.updatePhoto.bind(this);
    this.submitUpdate = this.submitUpdate.bind(this);
    this.acceptRequest = this.acceptRequest.bind(this);
    this.sendRequest = this.sendRequest.bind(this);
    this.unfriend = this.unfriend.bind(this);
    this.showDelete = this.showDelete.bind(this);
  }

  acceptRequest(){
    let requestee_id = this.props.currentUser.id;
    let requester_id = parseInt(this.props.profile.id);
    this.props.acceptFriend({ user_id: requestee_id, friend_id: requester_id });
    this.props.deleteRequest(requester_id, requestee_id);
  }

  sendRequest(){
    let requester_id = this.props.currentUser.id;
    let requestee_id = parseInt(this.props.profile.id);
    this.props.friendRequest({ requester_user_id: requester_id, requestee_user_id: requestee_id });
  }

  unfriend(){
    let user_id = this.props.currentUser.id;
    let friend_id = this.props.profile.id;
    this.props.deleteFriend(user_id, friend_id )
  }

  submitUpdate(){
    if (this.state.photo){
      var formData = new FormData();
      formData.append("user[username]", this.props.currentUser.username);
      formData.append(`user[photo]`, this.state.photo);
      this.props.updateProfile(formData);
    }
    else if (this.state.background){
      var formData = new FormData();
      formData.append("user[username]", this.props.currentUser.username);
      formData.append(`user[background]`, this.state.background);
      this.props.updateProfile(formData);
    }
  }

  updateCover(e){
    debugger
    var file = e.currentTarget.files[0];
    var fileReader = new FileReader();
    fileReader.onloadend = function() {
        this.setState({ background: file }, this.submitUpdate);
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  updatePhoto(e){
    var file = e.currentTarget.files[0];
    var fileReader = new FileReader();
    fileReader.onloadend = function() {
        this.setState({ photo: file }, this.submitUpdate);
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  componentDidMount(){
    this.props.fetchProfile(this.props.targetusername);
  }

  componentDidUpdate(prevProps){
    if(prevProps.params !== this.props.params){
      this.props.fetchProfile(this.props.targetusername);
    }
  }

  showDelete(e){
    e.preventDefault();
    this.setState({showDelete: !this.state.showDelete});
  }

  render(){
    let username;
    let firstname;
    if(this.props.currentUser){
      username = this.props.currentUser.username;
      firstname = this.props.currentUser.firstname;
    }

    let updateCover;
    let updatePhoto;
    let friendStatus;
    if(this.props.currentUser && (this.props.currentUser.id === this.props.profile.id)){
      updateCover = ( <label className="update-cover" >
                        <input type="file" onChange={this.updateCover}/>
                      </label> );

      updatePhoto = ( <label className="update-photo" >
                        <input type="file" onChange={this.updatePhoto}/>
                      </label> );

    } else {
      if(this.props.friendNames.includes(this.props.targetusername)){
        friendStatus = (
          <div className="friendStatus">
            <div className="subfriendStatus">
              <div>Friends</div>
              <button
                className="unfriend-button"
                onClick={this.unfriend}
              >Unfriend</button>
            </div>
          </div>

        );
      } else {
        if(this.props.ownRequests.includes(this.props.profile.id)){
          friendStatus = (
            <div className="friendStatus">Friend Request Sent</div>
          );
        }
        else if(this.props.otherRequestsNames.includes(this.props.profile.id)){
          friendStatus = (
            <button
              className="friendStatus"
              onClick={this.acceptRequest}
            >Accept Request</button>
          );
        }
        else {
          friendStatus = (
            <button
              className="friendStatus"
              onClick={this.sendRequest}
            >Request</button>

          );
        }
      }
    }

    return(
      <section className="userpage">

        <div className="cover-photo">
          <img src={this.props.profile.background_url}/>
          <div className="profile-photo">
            <img src={this.props.profile.photo_url}/>
          </div>

          {updateCover}
          {updatePhoto}
          {friendStatus}

          <ul className="user-nav-ul">
            <li><Link to={`/home/${this.props.targetusername}`} className="user-nav-list">Timeline</Link></li>
            <li><Link to={`/home/${this.props.targetusername}/about`} className="user-nav-list">About</Link></li>
            <li><Link to={`/home/${this.props.targetusername}/friends`} className="user-nav-list">Friends</Link></li>
          </ul>

          <section className="test">

          </section>
        </div>

        {this.props.children}

      </section>
    );
  }
}


export default UserPage;
