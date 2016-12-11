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
      this.props.logout().then(() => {
        this.props.router.push("/login");
      });
    }


  render(){
    let logOutButton;
    let userLink;
    let userthumb;

    if (this.props.loggedIn){
      logOutButton = (
        <button
          className="nav-button"
          onClick={this.logoutnow}
        >Log Out</button>
      );

      userthumb = (<div className="userthumb">
                    <img src={this.props.currentUser.photo_url}/>
                   </div>);

      userLink = (<Link className="nav-button user-link"
                        to={`/home/${this.props.currentUser.email}`}>
                        {userthumb}
                        <div>{this.props.currentUser.firstname}</div></Link>);
    }
    else {
      logOutButton = (
        <div></div>
      );
    }

    return(
    <div className="universe">
      <header className="home-header">
        <nav className="home-nav group">
          <div className="home-logo-thumb">
            <img src={window.fb_mini_logo}/>
          </div>

          <ul className="home-list-right group">
            <li className="group">{userLink}</li>
            <li><Link className="nav-button" to={`/home`}>Home</Link></li>
            <li>{logOutButton}</li>
          </ul>


        </nav>


      </header>
      {this.props.children}
    </div>
    );
  }
}

export default HomePage;
