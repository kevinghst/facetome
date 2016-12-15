import React from 'react';
import { Link } from 'react-router';

const Comments = ({updateComment, post, currentUser, submitComment, commentBody}) => {


  let comments = post.comments || [];
  let hiddencomments;
  let firstThree;
  if(comments.length > 3){
    firstThree = comments.slice(Math.max(comments.length-3, 1));
    hiddencomments = comments.filter(function(x) { return firstThree.indexOf(x) < 0 });
  } else {
    firstThree = comments;
  }

  commentBody = commentBody || "";
  currentUser = currentUser || {};

  

  return (
    <section className= 'comment-section'>

      <ul className= "actual-comments">
        {
          firstThree.map((comment) =>
          <li key={comment.id}>

            <div className="comment-thumb-img">
              <Link  to={`/home/${comment.author.username}`}>
                <img src={comment.author.photo_url}/>
              </Link>
            </div>

            <div className="comment-main">
              <div className="comment-text">
                <Link className="commenter-link" to={`/home/${comment.author.username}`}>
                  <div>{comment.author.firstname} {post.author.lastname}</div>
                </Link>
                <div className="comment-body">
                  {comment.body}
                </div>
              </div>

              <div className="comment-date">
                {comment.date} at {comment.time}
              </div>
            </div>
          </li>
        )}
      </ul>

      <section className="section-create-post">
        <Link className="commenter-link" to={`/home/${currentUser.username}`}>
          <img src={currentUser.photo_url}/>
        </Link>

        <form className={`create-comment-form ${post.id}`} onSubmit={submitComment}>
          <input className="comment-input"
                 value={commentBody}
                 placeholder="Write a comment..."
                 onChange= {updateComment}
          ></input>

        <input className="comment-submit-button" type="submit"></input>
        </form>
      </section>



    </section>
  );
};

export default Comments;
