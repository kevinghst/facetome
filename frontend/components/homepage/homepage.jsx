import React from 'react';
import { Link, withRouter } from 'react-router';
import SearchBar from '../searchbar';
import Chat from '../chat';

class RequestList extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let requestIds = this.props.requestIds;
    let requests = this.props.requests;
    return(
      <ul className="requests">
        {
          requestIds.map((id, idx) =>
            <li className="request-line" key={idx}>
              <div className="friend-thumb">
                <Link className="friend-thumb-img" to={`/home/${requests[id].requester_username}`}>
                  <img src={requests[id].requester.photo_url}/>
                </Link>
                <Link to={`/home/${requests[id].requester_username}`}>{requests[id].requester_username}</Link>
              </div>

              <button className= {`${requests[id].requester_user_id} friend-thumb-accept`} onClick={this.props.acceptRequest}>Accept Request</button>
            </li>
          )
        }
      </ul>
    );
  }
}

class HomePage extends React.Component{
  constructor(props){
    super(props);

    this.state = { showFriendRequests: false,
                   letters: ""};

    this.add = this.add.bind(this);
    this.logoutnow = this.logoutnow.bind(this);
    this.acceptRequest = this.acceptRequest.bind(this);
    this.showRequests = this.showRequests.bind(this);
    // this.createMessage = this.createMessage.bind(this);
  }

  componentDidMount(){
      this.props.fetchOtherRequests(this.props.currentUser.id);
      this.props.fetchOwnRequests(this.props.currentUser.id);
      this.props.fetchFriends(this.props.currentUser.id);
      this.props.fetchConvos(this.props.currentUser.id);
      this.props.fetchAllUsers(this.props.fetchAllUsers);

    if (this.props.loggedIn === false){
      this.props.router.push("/login");
    }
  }

  componentDidUpdate(prevProps){
    if(prevProps.params !== this.props.params){
      this.setState({letters: ""});
    }
  }

  add(e){
    let name = e.target.value;
    this.setState({letters: name});
  }

  showRequests(e){
    e.preventDefault();
    this.setState({ showFriendRequests: !this.state.showFriendRequests });
  }

  logoutnow(){
      this.props.logout().then(() => {
        this.props.router.push("/login");
      });
    }

  acceptRequest(e){
    e.preventDefault();
    let requestee_id = this.props.currentUser.id;
    let requester_id = parseInt(e.currentTarget.className);
    this.props.acceptFriend({ user_id: requestee_id, friend_id: requester_id });
    this.props.deleteRequest(requester_id, requestee_id);
  }

  // createMessage(e){
  //   e.preventDefault();
  //   let sender_id = parseInt(e.currentTarget.className.split(" ")[0]);
  //   let sendee_id = parseInt(e.currentTarget.className.split(" ")[1]);
  //   let message = e.currentTarget.value;
  //   this.props.createMessage({sender_id: sender_id, sendee_id: sendee_id, body: message});
  // }


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
      let requestCounts = requestIds.length;
      let requestBadge;

      if (requestCounts !== 0){
        requestBadge = (
          <strong className="request-badge">{requestCounts}</strong>
        );
      }

      otherRequestTabs = (
        <div className="friendRequest-tab">
          <div className="sub-friendRequest-tab">
            <a onClick={this.showRequests.bind(this)} href='#'>
              <img src={window.friendship_logo}/>
              { requestBadge }
            </a>
            {this.state.showFriendRequests && < RequestList
                  requestIds={requestIds}
                  requests = {requests}
                  acceptRequest = {this.acceptRequest}
              />}
          </div>
        </div>
      );
    }

    return(
    <div className="universe">
      <header className="home-header">
        <nav className="home-nav group">

          <div className="logo-search">
            <div className="home-logo-thumb">
              <img src={window.fb_mini_logo}/>
            </div>

            <SearchBar users={this.props.allUsers}
                       usersNames={this.props.allUsersNames}
                       add={this.add}
                       letters={this.state.letters}/>
          </div>

          <ul className="home-list-right group">
            <li className="group">{userLink}</li>
            <li><Link className="nav-button" to={`/home`}>Home</Link></li>
            <li>
              <ul className="triple-logos">
                <li>{otherRequestTabs}</li>
              </ul>
            </li>
            <li className="logout-button">{logOutButton}</li>
          </ul>
        </nav>
      </header>

      <Chat friends={this.props.friends}
            convos={this.props.convos}
            currentUser={this.props.currentUser}
            createMessage={this.props.createMessage}
      />

      {this.props.children}
    </div>
    );
  }
}

export default HomePage;
