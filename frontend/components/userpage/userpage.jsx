import React from 'react';
import { Link, withRouter } from 'react-router';

class UserPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      photo: null,
      background: null
    };
    this.updateCover = this.updateCover.bind(this);
    this.submitUpdate = this.submitUpdate.bind(this);
  }

  submitUpdate(){
    if (this.state.photo){
      var formData = new FormData();
      formData.append("user[username]", this.props.currentUser.username);
      formData.append(`user[photo]`, this.state.photo);
      this.props.updateProfile(formData);
    }
    else if (this.state.background){
      var formData = new FormData();
      formData.append("user[username]", this.props.currentUser.username);
      formData.append(`user[background]`, this.state.background);
      this.props.updateProfile(formData);
    }
  }

  updateCover(e){
    var file = e.currentTarget.files[0];
    var fileReader = new FileReader();
    fileReader.onloadend = function() {
        this.setState({ background: file });
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }


  }

  render(){
    this.props.fetchProfile(this.props.targetusername);
    this.submitUpdate();

    let username;
    let firstname;
    if(this.props.currentUser){
      username = this.props.currentUser.username;
      firstname = this.props.currentUser.firstname;
    }

    let updateCover;
    if(this.props.currentUser.id === this.props.profile.id){
      updateCover = ( <label className="update-cover" >
                        Edit Cover-Photo
                        <input type="file" onChange={this.updateCover}/>
                      </label> );
    }


    return(
      <section className="userpage">

        <div className="cover-photo">
          <img src={this.props.profile.background_url}/>
          <div className="profile-photo">
            <img src={this.props.profile.photo_url}/>
          </div>

          {updateCover}

          <ul className="user-nav-ul">
            <li><Link to={`/home/${username}`} className="user-nav-list">Timeline</Link></li>
            <li><Link to={`/home/${username}/about`} className="user-nav-list">About</Link></li>
          </ul>

          <section className="test">

          </section>
        </div>




        {this.props.children}

      </section>
    );
  }
}

export default UserPage;
