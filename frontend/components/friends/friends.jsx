import React from 'react';
import { Link, withRouter } from 'react-router';

class Friends extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      editable: false
    };

    this.unfriend = this.unfriend.bind(this);
  }

  componentDidMount(){
    if (this.props.profile.id){
      this.props.fetchUserFriends(this.props.profile.id);
    }

  }

  unfriend(e){
    e.preventDefault();
    let user_id = this.props.currentUser.id;
    let friend_id = parseInt(e.currentTarget.value);
    this.props.deleteFriend(user_id, friend_id )
  }

  render(){

    let condition = true;
    if(this.props.currentUser && this.props.profile && (this.props.currentUser.id !== this.props.profile.id)){
      condition = false;
    }

    let friends;

    if(this.props.currentUser){
      let friendKeys = Object.keys(this.props.userFriends);

      friends = (
        <ul className="user-friends group">
          {
            friendKeys.map((key, idx) =>
              <li key={idx} className="user-friends">
                <div className="user-friends-left">
                  <Link className="friend-image" to={`/home/${this.props.userFriends[key].username}`}>
                    <img src={this.props.userFriends[key].photo_url}/>
                  </Link>

                  <Link className="friend-name-link" to={`/home/${this.props.userFriends[key].username}`}>{this.props.userFriends[key].username}</Link>
                </div>

                {condition &&
                  <div className="user-friendStatus">
                    <div className="user-subfriendStatus">
                      <div>Friends</div>
                      <button
                        value = {`${this.props.userFriends[key].id}`}
                        className="user-unfriend-button"
                        onClick={this.unfriend}
                      >Unfriend</button>
                    </div>
                  </div>
                }
              </li>
            )
          }
        </ul>
      );
    }

    return(
      <div className="profile-main">
        <h2 className="profile-header">Friends</h2>

        <div className="user-content">
          {friends}
        </div>
      </div>
    );

  }

}

export default Friends;
