import React from "react";
import Photo from "../common/Photo";
import Comments from "./Comments";

const Single = props => {
  const { addComment, removeComment, comments, increment } = props;
  const { postId } = props.params;
  const i = props.posts.findIndex(post => post.code === postId);
  const post = props.posts[i];
  const postComments = props.comments[postId] || [];

  return (
    <div className="single-photo">
      <Photo comments={comments} i={i} post={post} increment={increment} />
      <Comments
        postComments={postComments}
        removeComment={removeComment}
        addComment={addComment}
        postId={postId}
      />
    </div>
  );
};

export default Single;