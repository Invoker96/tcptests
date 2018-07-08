import React from "react";

const Comment = ({ postId, comment, i, removeComment, top }) => {
  return (
    <div className="comment" key={i}>
      <p>
        <strong>{comment.user}</strong>
        {comment.text}
        <button
          className="remove-comment"
          onClick={() => removeComment(postId, i)}
        >
          &times;
        </button>
        <button
          className="edit-comment"
          onClick={() => editComment(postId, i)}
        >
          &#x270f;
        </button>
      </p>
    </div>
  );
};
export default Comment;
