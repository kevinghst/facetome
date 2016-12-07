import React from 'react';
import { Link, withRouter } from 'react-router';

class HomePage extends React.Component{
  constructor(props){
    super(props);
    this.logoutnow = this.logoutnow.bind(this);
  }

  componentDidMount(){
    if (this.props.loggedIn === false){
      this.props.router.push("/log");
    }
  }

  logoutnow(){
    this.props.logout().then(() => {
      this.props.router.push("/log");
    });
  }

  render(){
    let content;
    if (this.props.loggedIn){
      content = (
        <button
          onClick={this.logoutnow}
        >Log Out</button>
      );
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
      </div>
    );
  }
}

export default HomePage;
