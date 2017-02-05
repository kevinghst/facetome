import React from 'react';
import {Link, withRouter} from 'react-router';

class PostForm extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let postPhoto = (<div className="newsfeed-photo-upload">
                       <img src={this.props.imageUrl}/>
                     </div>);

    return(
      <form className="newsfeed-postform" onSubmit={this.props.handleSubmit}>
        <label className="newsfeed-image-upload">
          <div>Photo</div>
          <input type="file" onChange={this.props.updateImage}></input>
        </label>

        <div className="newsfeed-post-content">
          <div className="newsfeed-post-body group">
            <Link className="poster-thumb-img" to={`/home/${this.props.currentUser.username}`}>
              <img src={this.props.currentUser.photo_url}/>
            </Link>

            <textarea className="newsfeed-post-textarea"
                      value={this.props.body}
                      placeholder={this.props.placeHolder}
                      onChange = {this.props.updateForm}
            ></textarea>

          {this.props.displayPhoto && postPhoto}
          </div>
        </div>
        <input className="post-submit-button" type="submit" value="Post" />
      </form>
    );
  }
}


export default PostForm;
