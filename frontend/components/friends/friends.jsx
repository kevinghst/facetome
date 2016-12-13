import React from 'react';
import { Link, withRouter } from 'react-router';

class Friends extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    if (this.props.currentUser.id){
      this.props.fetchFriends(this.props.currentUser.id);
    }
  }

  componentDidUpdate(prevProps){
    if(prevProps.params !== this.props.params){
      this.props.fetchFriends(this.props.currentUser.id);
    }
  }

  render(){


  }

}

export default Friends;
