import React from 'react';
import { Link, withRouter } from 'react-router';
import Comments from '../comments';
import PostItem from '../postitem';

class Wall extends React.Component{
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
    this.deleteComment = this.deleteComment.bind(this);
  }

  componentDidUpdate(prevProps){
    if(prevProps.params !== this.props.params){
      this.props.fetchWall(this.props.targetusername);
    }
  }

  componentDidMount(){
    this.props.fetchWall(this.props.targetusername);
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

  deleteComment(e){
    e.preventDefault();
    var commentId = e.currentTarget.value;
    this.props.deleteComment(commentId);
  }


  handleSubmit(e){
    e.preventDefault(e);
    this.setState({
      displayPhoto: false,
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
    this.setState({ target_id: this.props.profile.id });
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
    let placeHolder;
    if(this.props.currentUser){
      currentUser = this.props.currentUser;
      if(this.props.currentUser.id === this.props.profile.id){
        placeHolder = "What's on your mind?";
      }
      else{
        placeHolder = `Write something to ${this.props.profile.firstname}`;
      }
    }

    let postForm;

    if(this.props.friendNames.includes(this.props.targetusername) || currentUser.username === this.props.targetusername){
      postForm = (
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
                        placeholder={placeHolder}
                        onChange = {this.updateForm}
              ></textarea>

            {this.state.displayPhoto && postPhoto}

            </div>
          </div>

          <input className="post-submit-button" type="submit" value="Post" />
        </form>
      );
    }

    return(
      <main className="main-feed">

        <section className="left-pane">

        </section>

        <section className="newsfeed-post-section wall">

          {postForm}

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
                                          commentBody={this.state.commentBody}
                                          dynamicSet={this.dynamicSet}
                                          deleteComment={this.deleteComment}/>)
            }
          </ul>
        </section>
      </main>
    );
  }
}


export default Wall;
