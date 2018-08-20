import React from "react";
import openedIssues from "../../data/openedIssues";
import closedIssues from "../../data/closedIssues";

class Pagination extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        openedIssues:[...openedIssues],
        currentPage: 1,
        issuesPerPage: 10
      };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(event) {
      this.setState({
        currentPage: Number(event.target.id)
      });
    }
  
    render() {
      const { openedIssues, currentPage, issuesPerPage } = this.state;
  
     
      const indexOfLastIssue=currentPage*issuesPerPage;
    const indexOfFirstIssue=indexOfLastIssue-issuesPerPage;
    const currentIssues=openedIssues.slice(indexOfFirstIssue,indexOfLastIssue);
  
      const renderIssues = currentIssues.map((items, index) => {
        return <li key={index}>{items}</li>;
      });
  
    const pageNumbers=[];
    for(let i=1;i<=Math.ceil(openedIssues.length/issuesPerPage);i++){
        pageNumbers.push(i);
    }
  
      const renderPageNumbers = pageNumbers.map(number => {
        return (
          <li
            key={number}
            id={number}
            onClick={this.handleClick}
          >
            {number}
          </li>
        );
      });
  
      return (
        <div>
          <ul>
            {renderIssues}
          </ul>
          <ul id="page-numbers">
            {renderPageNumbers}
          </ul>
        </div>
      );
    }
  }
