import React from 'react';
import { Link, withRouter } from 'react-router';
import Comments from '../comments';

const PostItem = ({ post, deletePost, handler, displayDelete, currentUser, updateComment,
                    submitComment, commentBody }) => {
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


  return (
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
        />

      <div className="dropdown">
        <a href='#'>
          <img src={window.dropdown}/>
          { removePost }
        </a>
      </div>

    </li>
  );
};

class NewsFeed extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      displayDelete: false,
      displayPhoto: false,
      image: null,
      imageUrl: null,
      body: "",
      author_id: null,
      target_id: null,

      post_id: null,
      commentBody: ""
    };

    this.updateForm = this.updateForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateImage = this.updateImage.bind(this);
    this.handler = this.handler.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.updateComment = this.updateComment.bind(this);
    this.submitComment = this.submitComment.bind(this);
  }

  componentDidMount(){
    if(this.props.currentUser){
      this.props.fetchNewsFeed(this.props.currentUser.id);
    }
  }

  handler(e){
    e.preventDefault();
    this.setState({
      displayDelete: !this.state.displayDelete
    });
  }

  updateComment(e){
    const commentValue = e.currentTarget.value;
    this.setState({ commentBody: commentValue });
  }

  submitComment(e){
    e.preventDefault(e);
    this.setState({
      commentBody: null
    });

    const postId = e.currentTarget.className.split(" ")[1];

    var formData = new FormData();
    formData.append("comment[body]", this.state.commentBody);
    formData.append("comment[author_id]", this.props.currentUser.id);
    formData.append("comment[post_id]", postId);

    this.props.createComment(formData);
  }

  handleSubmit(e){
    e.preventDefault(e);
    this.setState({
      displayDelete: false,
      image: null,
      imageUrl: null,
      body: "",
      author_id: null,
      target_id: null
    });

    var formData = new FormData();
    formData.append("post[body]", this.state.body);
    if (this.state.image) {
      formData.append("post[image]", this.state.image);
    }
    formData.append("post[author_id]", this.state.author_id);
    formData.append("post[target_id]", this.state.target_id);

    this.props.createPost(formData);
  }

  updateForm(e){
    const stateValue = e.currentTarget.value;
    this.setState({ body: stateValue });
    this.setState({ author_id: this.props.currentUser.id });
    this.setState({ target_id: this.props.currentUser.id });
  }

  updateImage(e){
    this.setState( {displayPhoto: true} );
    var file = e.currentTarget.files[0];
    var fileReader = new FileReader();
    fileReader.onloadend = function(){
      this.setState({ image: file, imageUrl: fileReader.result });
    }.bind(this);

    if(file) {
      fileReader.readAsDataURL(file);
    }
  }

  deletePost(e){
    e.preventDefault();
    var postId = e.currentTarget.value;
    this.props.deletePost(postId);
  }

  render(){
    let posts = this.props.posts
    let postPhoto = (<div className="newsfeed-photo-upload">
                       <img src={this.state.imageUrl}/>
                     </div>);

    let currentUser = {};
    if(this.props.currentUser){
      currentUser = this.props.currentUser;
    }

    return(
      <main className="main-feed">
        <section className="left-feed">
        </section>
        <section className="newsfeed-post-section">



          <form className="newsfeed-postform" onSubmit={this.handleSubmit}>
            <label className="newsfeed-image-upload">
              <div>Photo</div>
              <input type="file" onChange={this.updateImage}></input>
            </label>

            <div className="newsfeed-post-content">
              <div className="newsfeed-post-body group">
                <Link className="poster-thumb-img" to={`/home/${currentUser.username}`}>
                  <img src={currentUser.photo_url}/>
                </Link>

                <textarea className="newsfeed-post-textarea"
                          value={this.state.body}
                          placeholder="What's on your mind?"
                          onChange = {this.updateForm}
                ></textarea>

              {this.state.displayPhoto && postPhoto}
              </div>
            </div>
            <input className="post-submit-button" type="submit" value="Post" />
          </form>



          <ul className="newsfeed-posts">
            {
              posts.map(post => <PostItem key={post.id}
                                          post={post}
                                          deletePost={this.deletePost}
                                          handler={this.handler}
                                          displayDelete={this.state.displayDelete}
                                          currentUser={this.props.currentUser}
                                          updateComment={this.updateComment}
                                          submitComment={this.submitComment}
                                          commentBody={this.state.commentBody} />)
            }
          </ul>


        </section>

        <section className="right-feed">

        </section>
      </main>
    );
  }
}

export default NewsFeed;
