import React from 'react';
import {Link} from 'react-router';
import Convo from './convo';

class Chat extends React.Component{
  constructor(props){
    super(props);
    this.state = { showChat: true,
                   showConvo: false,
                   currentConvo: null,
                   curentFriendname: null,
                   currentFriendId: null
                 }
    this.showChat = this.showChat.bind(this);
    this.showConvo = this.showConvo.bind(this);
    this.hideConvo = this.hideConvo.bind(this);
  }

  showChat(e){
    e.preventDefault();
    this.setState({ showConvo: false });
    this.setState({ showChat: !this.state.showChat });
  }

  hideConvo(e){
    e.preventDefault();
    this.setState( {showConvo: false} );
  }

  showConvo(e){
    e.preventDefault();
    let friendId = e.currentTarget.className.split(" ")[1];
    let username = e.currentTarget.className.split(" ")[2];
    let convoArray = [username, this.props.currentUser.username].sort();
    let convoNames = convoArray[0] + "AND" + convoArray[1];
    let userId = parseInt(e.currentTarget.className.split(" ")[1]);
    this.setState({ showConvo: true,
                    currentConvo: convoNames,
                    currentFriendname: username,
                    currentFriendId: friendId
                 });
  }

  render(){
    const { friends, convos, currentUser, createMessage, friendNames, fetchConvos } = this.props;
    let friendKeys = Object.keys(friends);
    let chatFriends = (
      <ul className="chat-friends">
        {
          friendKeys.map((key, idx) =>
            <li key={idx} className={`chat-friend ${friends[key].id} ${friends[key].username}`} onClick={this.showConvo}>
              <div className="chat-friend-image">
                <img src={friends[key].photo_url}/>
              </div>
              <div className="chat-friend-firstname">{friends[key].firstname}</div>
              <div>{friends[key].lastname}</div>
            </li>
          )
        }
      </ul>
    );

    const chatDisplay = this.state.showChat === true ? 'chat-expanded' : 'chat-hidden';

    return(
      <div className="chat-area group">
        {this.state.showConvo && <Convo
                                    currentFriendname={this.state.currentFriendname}
                                    currentUser={currentUser}
                                    currentConvo={this.state.currentConvo}
                                    convos={convos}
                                    createMessage={createMessage}
                                    friendId={this.state.currentFriendId}
                                    hideConvo={this.hideConvo}
                                    fetchConvos={fetchConvos}
                                  />}
        <div className={`${chatDisplay}`}>
          <div className={`chat-header`} onClick={this.showChat}>Chat</div>
          {this.state.showChat && chatFriends}
        </div>
      </div>

    );
  }

}

export default Chat;
