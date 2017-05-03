import React from 'react';
import { Link, withRouter } from 'react-router';

class ImageUpload extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      imageFile: null,
      imageUrl: null
    };

    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleSubmit(e){
      let phototype = "photo";
      if (this.props.phototype === "coverphoto") {
        phototype = "background";
      }

      let formData = new FormData();
      formData.append("user[username]", this.props.currentUser.username);
      formData.append(`user[${phototype}]`, this.state.imageFile);

      this.props.updateProfile(formData).then(()=>{
        this.props.router.push(`/home/${this.props.currentUser.username}`);
      });
    }

  updateFile(e){
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function() {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    }.bind(this);
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  render(){
    let firstname;
    if(this.props.currentUser){
      firstname = this.props.currentUser.firstname;
    }

    return(
      <div>
        <h2>Set {this.props.phototype}</h2>

        <input type="file" onChange={this.updateFile}/>
        <button onClick={this.handleSubmit}>Save</button>
        <img src={this.state.imageUrl}/>
      </div>
    );

  }
}

export default ImageUpload;
