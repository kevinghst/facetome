import React from 'react';
import { Link, withRouter } from 'react-router';

class HomePage extends React.Component{
  constructor(props){
    super(props);
    this.logoutnow = this.logoutnow.bind(this);
  }

  componentDidMount(){
    if (this.props.loggedIn === false){
      this.props.router.push("/login");
    }
  }

  logoutnow(){
    if(this.props.currentUser.email === "guest@email.com"){
      this.props.deleteUser(this.props.currentUser).then(() => {
        this.props.router.push("/login");
      });
    }
    else {
      this.props.logout().then(() => {
        this.props.router.push("/login");
      });
    }
  }

  render(){
    let content;
    let link;
    if (this.props.loggedIn){
      content = (
        <button
          onClick={this.logoutnow}
        >Log Out</button>
      );
      link = (<Link to={`/home/${this.props.currentUser.email}`}>{this.props.currentUser.firstname}</Link>);
    }
    else {
      content = (
        <div></div>
      );
    }

    return(

      <div>
        <h1>Hey There!</h1>
        {content}

        {link}

        {this.props.children}
      </div>
    );
  }
}

export default HomePage;
