import React from 'react';
import { Link } from 'react-router';

const Comments = ({updateComment, post, currentUser, submitComment, commentBody, displayHidden, changeHiddenState, deleteComment}) => {


  let comments = post.comments || [];
  let firstThree;
  let hiddenText;
  if(comments.length > 3){
    firstThree = comments.slice(Math.max(comments.length-3, 1));
    let commentState = "comments";
    if(comments.length === 4){
      commentState = "comment";
    }

    hiddenText = <div className="hiddenTrigger">
                    <a  href='#'
                        onClick={changeHiddenState}
                     >View {comments.length - 3} more {commentState}</a>
                    </div>

  } else {
    firstThree = comments;
  }

  commentBody = commentBody || "";
  currentUser = currentUser || {};

  if(displayHidden){
    firstThree = comments;
    hiddenText = <div></div>
  }

  return (
    <section className= 'comment-section'>
      <ul className= "actual-comments">
        {hiddenText}

        {
          firstThree.map((comment) =>
          <li className="a-comment" key={comment.id}>

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

              <div className="remove-word">Remove this</div>

            </div>


            <input className="deleteButton"
                   type="image"
                   onClick={deleteComment}
                   value={comment.id}
            src={window.removeCross}/>


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
