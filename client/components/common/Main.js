import React from "react";
import { Link } from "react-router";

const Main = props => (
  <div>
    <h1>
      <Link to="/">Picture Gallery</Link>
    </h1>
    {React.cloneElement(props.children, props)}
  </div>
)

export default Main;
