import React from 'react';
import { Link, withRouter } from 'react-router';

class SelectedFriends extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const {friends} = this.props;
    let friendKeys = this.props.selectedFriendKeys;

    let selectedFriends = (
      <ul className="selected-friends">
        {
          friendKeys.map((key, idx) =>
            <li key={idx} className="selected-friend">
              <Link className="selected-friend-image" to={`/home/${friends[key].username}`}>
                <img src={friends[key].photo_url}/>
                <div className="selected-friend-name">
                  <div>{friends[key].firstname} {friends[key].lastname}</div>
                </div>
              </Link>
            </li>
        )}
      </ul>
    );

    return(
      <div>
        {selectedFriends}
      </div>
    );
  }
}

export default SelectedFriends;
