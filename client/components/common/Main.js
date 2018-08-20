// import React from "C:/Users/PRIYATANDON/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react";
import React from "react";
import { Link } from "react-router";
import C from "../../data/constants";
// import Pagination from "./Pagination";
// import Header from "./Header";
// import Pagination from "./Pagination";

const Main = props =>
    // console.log(props)
    (
        <div className='main-wrapper'>fhfh
     <h1>
      <Link to={C.LINK_TO_HOME}>This is issue Page </Link>
    </h1>
    {React.cloneElement(props.children, props)} 
    {/* <Header />
    <Pagination */}
    
    

  </div>
    )
// }

// class Main extends React.Component{
//     render(){
//         console.log(this.props)
//         return(
//           <div>
//               <h1>This is issue page</h1>
//               {React.cloneElement(
//                   <IssueListingPage />,
//                   [this.props],
//                   [props.children])}
//           </div>
//         )
//     }
// }


  

export default Main;