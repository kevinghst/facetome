import React from 'react';
import {Link, withRouter} from 'react-router';

const PostForm = ({ imageUrl, handleSubmit, updateImage, currentUser, body, placeHolder, updateForm, displayPhoto }) => {
  let postPhoto = (<div className="newsfeed-photo-upload">
                     <img src={imageUrl}/>
                   </div>);
  return(
    <form className="newsfeed-postform" onSubmit={handleSubmit}>
      <label className="newsfeed-image-upload">
        <div>Photo</div>
        <input type="file" onChange={updateImage}></input>
      </label>

      <div className="newsfeed-post-content">
        <div className="newsfeed-post-body group">
          <Link className="poster-thumb-img" to={`/home/${currentUser.username}`}>
            <img src={currentUser.photo_url}/>
          </Link>

          <textarea className="newsfeed-post-textarea"
                    value={body}
                    placeholder={placeHolder}
                    onChange = {updateForm}
          ></textarea>

        {displayPhoto && postPhoto}
        </div>
      </div>
      <input className="post-submit-button" type="submit" value="Post" />
    </form>
  )
}

export default PostForm;
