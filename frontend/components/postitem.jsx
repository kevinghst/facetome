import React from 'react';
import { Link, withRouter } from 'react-router';
import Comments from './comments';

class PostItem extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      displayHidden: false
    };
    this.changeHiddenState = this.changeHiddenState.bind(this);
  }

  changeHiddenState(e){
    e.preventDefault();
    this.setState({ displayHidden: !this.state.displayHidden });
  }

  render() {
    const { post, deletePost, handler, displayDelete, currentUser, updateComment,
            submitComment, commentBody, dynamicSet, deleteComment } = this.props;

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

    let removePost;
    if(currentUser && (currentUser.username === post.author.username || currentUser.username === post.target.username)){
      removePost = (
        <button className="deletePost" value={`${post.id}`} onClick={deletePost}>Delete</button>
      );
    }

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
          />

        <div className="dropdown">
          <a href='#'>
            <img src={window.dropdown}/>
            { removePost }
          </a>
        </div>

      </li>
    );
  }


};


export default PostItem;
