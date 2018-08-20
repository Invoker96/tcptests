import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import openedIssues from "./openedIssues";
import closedIssues from "./closedIssues";
 const rootReducer = combineReducers({ openedIssues, closedIssues, routing: routerReducer });
 
 export default rootReducer;
