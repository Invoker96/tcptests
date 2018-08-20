import React from "react";


const Header = () => (
    <div>
        <h1 className="header-wrapper">
            <span>
                <a className="header-anchor" href="https://github.com/facebook/">facebook/</a>
            </span>
            <span>
                <a className="header-anchor " href="https://github.com/facebook/create-react-app">Create-react-app</a>
            </span>
        </h1>
        <a className="nav-issue-item" href ="https://github.com/facebook/create-react-app/issues ">
        <span className="span-issue">Issues</span>
        <span>281</span>
        </a>
    </div>
);

export default Header;