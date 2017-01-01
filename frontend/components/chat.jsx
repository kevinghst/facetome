import React from 'react';
import {Link} from 'react-router';

class Message extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const { currentUser, message} = this.props;
    let cu = currentUser || {};
    const fromMe = cu.id === message.sender_id ? 'from-me' : '';
    return(
      <li className={`message ${fromMe}`}>
        <div className={`message-body`}>{message.body}</div>
      </li>
    );
  }
}

class Convo extends React.Component{
  constructor(props){
    super(props);
    this.state = { newMessage: "" };

    this.updateMessage = this.updateMessage.bind(this);
    this.createMessage = this.createMessage.bind(this);
  }

  createMessage(e){
    e.preventDefault();
    this.setState({ newMessage: "" });
    let sender_id = parseInt(e.currentTarget.className.split(" ")[0]);
    let sendee_id = parseInt(e.currentTarget.className.split(" ")[1]);
    this.props.createMessage({sender_id: sender_id, sendee_id: sendee_id, body: this.state.newMessage});
  }

  updateMessage(e){
    e.preventDefault();
    let msg = e.currentTarget.value;
    this.setState({ newMessage: msg });
  }

  componentDidMount(){
    const objDiv = document.getElementById('messages');
    objDiv.scrollTop = objDiv.scrollHeight;
  }

  componentDidUpdate() {
   const objDiv = document.getElementById('messages');
   objDiv.scrollTop = objDiv.scrollHeight;
 }

  render(){
    const { currentProfilePic, currentFriendname, currentUser,currentConvo, convos, createMessage, friendId, hideConvo } = this.props;
    let messages = convos[currentConvo].messages;
    let cu = currentUser || {};
    return(
      <div className="convo-box">
        <div className="convo-top-bar">
          <Link className="convo-header" to={`/home/${currentFriendname}`}>{currentFriendname}</Link>
          <div className="exitChat" onClick={hideConvo}>
            <img src={window.chatExit}/>
          </div>
        </div>

        <ul id="messages" className="messages">
          {
            messages.map((message, idy) =>
              <Message currentUser={currentUser} message={message} key={idy} />
            )
          }
        </ul>

        <form onSubmit={this.createMessage} className={`${cu.id} ${friendId}`}>
          <input type="text"
                 className={`chatInput`}
                 value={this.state.newMessage}
                 onChange={this.updateMessage}
                 placeholder= "Type a message..."
          ></input>
        </form>

      </div>
    );
  }
}

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
    const { friends, convos, currentUser, createMessage, friendNames } = this.props;
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
