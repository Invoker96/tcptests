import React from "react";
import { Link } from "react-router";
import C from "../../data/constants"

const Main = props => (
  <div>
    <h1>
      <Link to={C.LINK_TO_HOME}>Picture Gallery</Link>
    </h1>
    {React.cloneElement(props.children, props)}
  </div>
)

export default Main;
