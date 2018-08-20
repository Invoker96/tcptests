// import React from "C:/Users/PRIYATANDON/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react";
import React from "react";
import { Link } from "react-router";
import C from "../../data/constants";
// import Pagination from "./Pagination";
import Header from "./Header";
import Pagination from "./Pagination";
class IssueListingPage extends React.Component{
  render(){
    return(
      <div className='main-wrapper'>
    <h1>
      <Link to={C.LINK_TO_HOME}>This is issue Page </Link>
    </h1>
    {/* {React.cloneElement(props.children, props)} */}
    <Header />
    <Pagination
    
    />

  </div>
    )
  }
}
// export const IssueListingPage = (props) => (
//   <div className='main-wrapper'>
//     <h1>
//       <Link to={C.LINK_TO_HOME}>This is issue Page </Link>
//     </h1>
//     {/* {React.cloneElement(props.children, props)} */}
//     <Header />
//     <Pagination
    
//     />

//   </div>
// );
export default IssueListingPage;