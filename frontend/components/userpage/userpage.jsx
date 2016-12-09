import React from 'react';
import { Link, withRouter } from 'react-router';

class UserPage extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchProfile(currentUser);
  }

  render(){
    let email;
    let firstname;
    if(this.props.currentUser){
      email = this.props.currentUser.email;
      firstname = this.props.currentUser.firstname;
    }


    return(
      <div>
        {this.props.children}

        <header className="header">
          <ul className="rightList">
            <li><Link to={`home/${this.props.currentUser.email}`}>{firstname}</Link></li>
            <li><Link to="/home">Home</Link></li>
          </ul>
        </header>

        <section className="profile-pics">
          {this.props.profile.email}
          <img src={this.props.profile.photo_url}/>
          <img src={this.props.profile.background_url}/>
        </section>


      </div>
    );
  }
}

export default UserPage;
