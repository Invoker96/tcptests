import React from "react";
import Photo from "../../common/Photo";

const PhotoGrid = props => {
  const { increment, comments } = props;
  return (
    <div className="photo-grid">
      {props.posts.map((post, i) => (
        <Photo
          comments = {comments}
          increment = {increment}
          key={i}
          i={i}
          post={post}
        />
      ))}
    </div>
  );
};

export default PhotoGrid;
