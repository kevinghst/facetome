import React from 'react';
import {Link} from 'react-router';
import Message from './message';

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
    let that = this;
    let objDiv = document.getElementById('messages');
    objDiv.scrollTop = objDiv.scrollHeight;

    let pusher = new Pusher('1dfe5c568d3c1fc1e1e1', {
      encrypted: true
    });
    let channel = pusher.subscribe('chat_' + this.props.currentConvo);
    channel.bind('message_sent', function(data) {
      that.props.fetchConvos(that.props.currentUser.id);
    });
  }

  componentDidUpdate() {
   let objDiv = document.getElementById('messages');
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
            <img src={window.assets.chatExit}/>
          </div>
        </div>

        <ul id="messages" className="messages">
          {
            messages.map((message, idy) =>
              <Message currentUser={currentUser} lastmessage={messages[idy-1]} message={message} key={idy} />
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

export default Convo;
