import React from 'react';
import { Link, withRouter } from 'react-router';

class HomePage extends React.Component{
  constructor(props){
    super(props);
    this.logoutnow = this.logoutnow.bind(this);
    this.acceptRequest = this.acceptRequest.bind(this);
  }

  componentDidMount(){
    if (currentUser.id){
      this.props.fetchOtherRequests(currentUser.id);
    }
    if (this.props.loggedIn === false){
      this.props.router.push("/login");
    }
  }

  logoutnow(){
      this.props.logout().then(() => {
        this.props.router.push("/login");
      });
    }

    acceptRequest(e){
      let requestee_id = this.props.currentUser.id;
      let requester_id = parseInt(e.currentTarget.className);
      this.props.deleteRequest(requester_id, requestee_id);
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
                        to={`/home/${this.props.currentUser.username}`}>
                        {userthumb}
                        <div>{this.props.currentUser.firstname}</div></Link>);
    }
    else {
      logOutButton = (
        <div></div>
      );
    }
    let otherRequestTabs;
    if (this.props.otherRequests) {
      let requests = this.props.otherRequests;
      let requestIds = Object.keys(requests);
      otherRequestTabs = (
        <ul>
          {
            requestIds.map((id, idx) =>
              <li key={idx}>
                <Link to={`/home/${requests[id].requester_username}`}>{requests[id].requester_username}</Link>
                <button className= {`${requests[id].requester_user_id}`} onClick={this.acceptRequest}>Accept Request</button>
              </li>
            )
          }
        </ul>
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
            <li>{otherRequestTabs}</li>
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
