import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import posts from "./posts";
import comments from "./commments";

const rootReducer = combineReducers({ posts, comments, routing: routerReducer });

export default rootReducer;
