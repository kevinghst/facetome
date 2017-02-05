import React from 'react';
import {Link} from 'react-router';

class Message extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const { currentUser, message, lastmessage} = this.props;
    let cu = currentUser || {};
    const fromMe = cu.id === message.sender_id ? 'from-me' : '';
    const diffFromLast = (lastmessage && lastmessage.sender_id !== message.sender_id) ? 'diffLast' : 'sameLast';
    return(
      <li className={`message ${fromMe} ${diffFromLast}`}>
        <div className={`message-body`}>{message.body}</div>
      </li>
    );
  }
}

export default Message;
