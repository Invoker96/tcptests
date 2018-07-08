import React from "react";
import C from "../../data/constants"

const More = props => {
  if (props.numberOfComments > 3) {
    return (
      <span className="show" onClick={props.handleClick}>
        {props.top ? C.MORE_COMMENTS : C.LESS_COMMENTS}
      </span>
    );
  }
  return null;
};

export default More;
