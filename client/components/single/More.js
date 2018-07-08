import React from "react";

const More = props => {
  if (props.numberOfComments > 3) {
    return (
      <span className="show" onClick={props.handleClick}>
        {props.top ? "Show More..." : "Show Less..."}
      </span>
    );
  }
  return null;
};

export default More;
