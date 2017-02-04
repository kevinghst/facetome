import React from 'react';
import { Link, withRouter } from 'react-router';
import Comments from '../comments';
import PostItem from '../postitem';
import { StickyContainer, Sticky } from 'react-sticky';


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
    this.deleteComment = this.deleteComment.bind(this);
    this.updatePost = this.updatePost.bind(this);
    this.likePost = this.likePost.bind(this);
    this.unlikePost = this.unlikePost.bind(this);
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
    const postId = parseInt(e.currentTarget.className.split(" ")[1]);
    this.setState({ post_id: postId });
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

  updatePost(id, body){
    var formData = new FormData();
    formData.append("post[body]", body);
    formData.append("post[id]", id);
    this.props.updatePost(formData);
  }

  handleSubmit(e){
    e.preventDefault(e);
    this.setState({
      displayDelete: false,
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

  deleteComment(e){
    e.preventDefault();
    var commentId = e.currentTarget.value;
    this.props.deleteComment(commentId);
  }

  likePost(e){
    e.preventDefault();
    var postId = e.currentTarget.className;
    this.props.createLike({ liker_id: this.props.currentUser.id, post_id: postId});
  }

  unlikePost(e){
    e.preventDefault();
    var likeId = e.currentTarget.className;
    this.props.deleteLike(likeId);
  }

  render(){
    let posts = this.props.posts;
    let postPhoto = (<div className="newsfeed-photo-upload">
                       <img src={this.state.imageUrl}/>
                     </div>);

    let currentUser = {};
    if(this.props.currentUser){
      currentUser = this.props.currentUser;
    }
    return(
      <StickyContainer className="main-feed">
        <section className="left-feed">

          <Link className="userpage-link" to={`/home/${currentUser.username}`}>
            <div className="mini-userthumb">
              <img src={currentUser.photo_url}/>
            </div>
            <div className="mini-userlabel">{currentUser.firstname} {currentUser.lastname}</div>
          </Link>

          <Link className="newsfeed-link" to={`/home`}>
            <div className="newsfeedthumb">
              <img src={window.assets.newsfeed}/>
            </div>
            <div className="mini-newsfeedlabel">News Feed</div>
          </Link>
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
                                          commentBody={this.state.commentBody}
                                          dynamicSet={this.dynamicSet}
                                          deleteComment={this.deleteComment}
                                          currentPostId={this.state.post_id}
                                          updatePost={this.updatePost}
                                          likePost={this.likePost}
                                          unlikePost={this.unlikePost}/>)
            }
          </ul>


        </section>

        <section className="right-feed">
            <div className="nights-watch">
              <img src={window.assets.nightswatch}/>
            </div>

            <Sticky className="about-me" stickyClassName="sticky">
              <ul className="portfolio-list">
                <li className="portfolio">
                  <a href="http://www.wczhang.com" target="_blank">
                    <img src={window.assets.me}/>
                  </a>
                </li>

                <li className="linkedin">
                  <a href="https://www.linkedin.com/in/wancongzhang" target="_blank">
                    <img src={window.assets.linkedinlogo}/>
                  </a>
                </li>

                <li className="github">
                  <a href="https://github.com/kevinghst" target="_blank">
                    <img src={window.assets.gitlogo}/>
                  </a>
                </li>
              </ul>
            </Sticky>

        </section>


      </StickyContainer>
    );
  }
}

export default NewsFeed;
