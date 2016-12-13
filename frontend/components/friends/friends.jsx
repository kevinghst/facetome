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
      this.props.fetchFriends(this.props.profile.id);

      if(this.props.currentUser.id === this.props.profile.id){
        this.setState({ editable: true });
      }
    }

  }

  unfriend(e){
    let user_id = this.props.currentUser.id;
    let friend_id = parseInt(e.currentTarget.value);
    this.props.deleteFriend(user_id, friend_id );
  }

  render(){
    let friends;

    if(this.props.currentUser){
      let friendKeys = Object.keys(this.props.friends);

      friends = (
        <ul className="user-friends group">
          {
            friendKeys.map((key, idx) =>
              <li key={idx} className="user-friends">
                <div className="user-friends-left">
                  <Link className="friend-image" to={`/home/${this.props.friends[key].username}`}>
                    <img src={this.props.friends[key].photo_url}/>
                  </Link>

                  <Link className="friend-name-link" to={`/home/${this.props.friends[key].username}`}>{this.props.friends[key].username}</Link>
                </div>

                {this.state.editable &&
                  <div className="user-friendStatus">
                    <div className="user-subfriendStatus">
                      <div>Friends</div>
                      <button
                        value = {`${this.props.friends[key].id}`}
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
