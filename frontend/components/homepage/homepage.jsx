import React from 'react';
import { Link, withRouter } from 'react-router';
import SearchBar from './searchbar';
import Chat from './chat/chat';
import RequestList from './requestList';

class HomePage extends React.Component{
  constructor(props){
    super(props);

    this.state = { showFriendRequests: false,
                   letters: ""};

    this.add = this.add.bind(this);
    this.logoutnow = this.logoutnow.bind(this);
    this.acceptRequest = this.acceptRequest.bind(this);
    this.showRequests = this.showRequests.bind(this);
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

  render(){
    let logOutButton, userLink, userthumb, otherRequestTabs, requestBadge;

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

    if (this.props.otherRequests) {
      let requests = this.props.otherRequests;
      let requestIds = Object.keys(requests);
      let requestCounts = requestIds.length;

      if (requestCounts !== 0){
        requestBadge = (
          <strong className="request-badge">{requestCounts}</strong>
        );
      }

      otherRequestTabs = (
        <div className="friendRequest-tab">
          <div className="sub-friendRequest-tab">
            <a onClick={this.showRequests.bind(this)} href='#'>
              <img src={window.assets.friendship_logo}/>
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
            <Link className="home-logo-thumb" to={`/home`}>
              <img src={window.assets.fb_mini_logo}/>
            </Link>

            <SearchBar
              users={this.props.allUsers}
             usersNames={this.props.allUsersNames}
             add={this.add}
             letters={this.state.letters}
            />
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

      <Chat
        friends={this.props.friends}
        convos={this.props.convos}
        currentUser={this.props.currentUser}
        createMessage={this.props.createMessage}
        friendNames={this.props.friendNames}
        fetchConvos={this.props.fetchConvos}
      />

      {this.props.children}
    </div>
    );
  }
}

export default HomePage;
