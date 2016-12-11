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

  componentDidMount(){
    this.props.fetchProfile(this.props.targetEmail);
    this.submitUpdate();
  }

  submitUpdate(){
    if (this.state.photo){
      var formData = new FormData();
      formData.append("user[email]", this.props.currentUser.email);
      formData.append(`user[photo]`, this.state.photo);
      this.props.updateProfile(formData);
    }
    else if (this.state.background){
      var formData = new FormData();
      formData.append("user[email]", this.props.currentUser.email);
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

    this.submitUpdate();

    let email;
    let firstname;
    if(this.props.currentUser){
      email = this.props.currentUser.email;
      firstname = this.props.currentUser.firstname;
    }

    return(
      <section className="userpage">

        <div className="cover-photo">
          <img src={this.props.profile.background_url}/>
          <div className="profile-photo">
            <img src={this.props.profile.photo_url}/>
          </div>

          <label className="update-cover" >
            Edit Cover-Photo
            <input type="file" onChange={this.updateFile}/>
          </label>

          <ul className="user-nav-ul">
            <li><Link to={`/home/${email}`} className="user-nav-list">Timeline</Link></li>
            <li><Link to={`/home/${email}/about`} className="user-nav-list">About</Link></li>
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
