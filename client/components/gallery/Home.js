import React from "react";
import Photo from "../common/Photo";
import { Link } from "react-router";

const PhotoGrid = props => {
  const { increment, comments } = props;
  return (
    <div className="photo-grid">
      <div className="gallery">
        <p className="gallery-intro">Sed vitae lorem et risus lacinia gravida. Sed euismod nunc ut nibh rhoncus ullamcorper molestie ac turpis. Curabitur sed ex arcu. Sed volutpat dui ut tortor gravida vulputate. Nullam tincidunt tristique enim sit amet vehicula. Praesent et diam non lectus bibendum viverra. Integer odio dolor, ultrices ut leo ac, interdum malesuada felis. Donec ultrices dolor a nisi blandit, eu aliquet purus dapibus. Vestibulum neque turpis, convallis sed nunc sit amet, hendrerit scelerisque justo. Cras nec ultrices purus. Nam lacus justo, pretium in porta in, blandit sit amet tellus. Proin sit amet ornare felis, eget tempus magna.</p>
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
      <Link to="/view" className="show-gallery">Show All Pictures...</Link>
    </div>
  );
};

export default PhotoGrid;
