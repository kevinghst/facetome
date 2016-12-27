import React from 'react';
import { Link, withRouter } from 'react-router';
import Comments from './comments';

class PostItem extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      editing: false,
      displayHidden: false,
      body: this.props.post.body
    };
    this.changeHiddenState = this.changeHiddenState.bind(this);
    this.updateForm = this.updateForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateForm(e){
    e.preventDefault();
    let updatedValue = e.currentTarget.value;
    this.setState({ body: updatedValue });
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({ editing: false });
    this.props.updatePost(this.props.post.id, this.state.body);
  }

  changeHiddenState(e){
    e.preventDefault();
    this.setState({ displayHidden: !this.state.displayHidden });
  }

  render() {
    const { post, deletePost, handler, displayDelete, currentUser, updateComment,
            submitComment, commentBody, dynamicSet, deleteComment, currentPostId,
            updatePost } = this.props;

    let postImage = (
      <div className="post-img">
        <img src={post.image_url}/>
      </div>
    );

    let nameLink;
    if (post.target_id === post.author_id){
      nameLink = (<Link className="post-name-link-real"
                        to={`/home/${post.author.username}`}
                        >{post.author.firstname} {post.author.lastname}
                  </Link>);
    } else {
      nameLink = (
        <div className="authorToTarget">
          <Link className="post-name-link-real"
                to={`/home/${post.author.username}`}
                >{post.author.firstname} {post.author.lastname}
          </Link>
          <img src={window.smalltriangle}/>
          <Link className="post-name-link-real"
                to={`/home/${post.target.username}`}
                > {post.target.firstname} {post.target.lastname}
          </Link>
        </div>
      );
    }

    let removeEdit;
    if(currentUser && (currentUser.username === post.author.username || currentUser.username === post.target.username)){
      removeEdit = (
        <div className="deleteEdit">
          <div className="deleteContainer">
            <button className="deletePost" value={`${post.id}`} onClick={deletePost}>Delete</button>
            <div className="borderline"></div>
          </div>
          <button className="editPost" onClick={ ()=>this.setState({ editing: true})}>Edit</button>
        </div>
      );
    }

    if (this.state.editing){
      return (
         <div>
            <form className="newsfeed-postform" onSubmit={this.handleSubmit}>
              <div className="newsfeed-post-content">
                <div className="newsfeed-post-body group">
                  <Link className="poster-thumb-img" to={`/home/${currentUser.username}`}>
                    <img src={currentUser.photo_url}/>
                  </Link>

                  <textarea className="newsfeed-post-textarea"
                            value= { this.state.body }
                            onChange = {this.updateForm}
                  ></textarea>

                </div>
              </div>
              <input className="post-submit-button" type="submit" value="Save" />
            </form>
          </div>
      );
    } else {
        return(
          <li className="post-item">
            <div className="post-content">
              <div className="post-author-thumb">
                <Link className="post-thumb-img" to={`/home/${post.author.username}`}>
                  <img src={post.author.photo_url}/>
                </Link>
                <div className="post-name-link">
                  {nameLink}
                  <div className="post-date">{post.date} at {post.time}</div>
                </div>
              </div>

              <div className="post-text">
                {post.body}
              </div>

              { (post.image_url.indexOf("/assets/monolith") === -1) && postImage }
            </div>

            <Comments updateComment={updateComment}
                      post={post}
                      currentUser={currentUser}
                      submitComment={submitComment}
                      commentBody={commentBody}
                      displayHidden={this.state.displayHidden}
                      changeHiddenState={this.changeHiddenState}
                      deleteComment={deleteComment}
                      currentPostId={currentPostId}
              />

            <div className="dropdown">
              <a href='#'>
                <img src={window.dropdown}/>
                { removeEdit }
              </a>
            </div>

          </li>
        );
    }
  }


};


export default PostItem;
