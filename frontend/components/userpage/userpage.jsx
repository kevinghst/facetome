import React from 'react';
import { Link, withRouter } from 'react-router';

class UserPage extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let email;
    if(this.props.currentUser){
      email = this.props.currentUser.email;
    }


    return(
      <div>
        This is {email}
        {this.props.children}
      </div>
    );
  }
}

export default UserPage;
