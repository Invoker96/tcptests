import React from "react";
import Photo from "../common/Photo";
import { Link } from "react-router";
import C from "../../data/constants"

const PhotoGrid = props => {
  const { increment, comments } = props;
  return (
    <div className="photo-grid">
      <div className="gallery">
        <p className="gallery-intro">{C.INTRO}</p>
      </div>
      {props.posts.map((post, i) => {
        if (i < 3) {
          return (
            <Photo
              comments={comments}
              increment={increment}
              key={i}
              i={i}
              post={post}
            />
          )
        }
      })}
      <Link to={C.LINK_TO_GALLERY} className="show-gallery">{C.MORE_POSTS}</Link>
    </div>
  );
};

export default PhotoGrid;
