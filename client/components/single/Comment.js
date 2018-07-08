import React from "react";

const Comment = ({
  postId,
  comment,
  i,
  removeComment,
  editComment,
  top,
  handleUpdate
}) => (
  <div className="comment" key={i}>
    <p>
      <strong name="user">{comment.user}</strong>
      <span name="comment">{comment.text}</span>
      <button
        className="remove-comment"
        onClick={() => removeComment(postId, i)}
      >
        &times;
      </button>
      <button
        className="edit-comment"
        onClick={e => handleUpdate(e, postId, i)}
      >
        &#x270f;
      </button>
    </p>
  </div>
);
export default Comment;
