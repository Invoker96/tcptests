import React from "react";
import Comment from "./Comment";
import TopComments from "./TopComments";
import More from "./More";

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      top: true,
      author: "",
      comment: ""
    };
    this.handleClick = e => {
      e.preventDefault();
      this.setState({ top: !this.state.top });
    };
    this.handleChangeAuthor = e => {
      this.setState({
        author: e.target.value
      });
    };
    this.handleChangeComment = e => {
      this.setState({
        comment: e.target.value
      });
    };
    this.handleSubmit = e => {
      e.preventDefault();
      this.props.addComment(
        this.props.postId,
        this.state.author,
        this.state.comment
      );
      console.log(this.state);
      e.target.reset();
    };
    this.handleUpdate = (e, postId, i) => {
      const target = e.target.parentNode.children;
      const form =
        e.target.parentNode.parentNode.parentNode.children["submitComments"];
        form["author"].value=target["user"].textContent;
        form["comment"].value=target["comment"].textContent;
        this.setState({
          author: target["user"].textContent,
          comment: target["comment"].textContent
        });
        this.props.removeComment(postId, i)
    };
  }

  render() {
    return (
      <div className="comments">
        {this.props.postComments.map((comment, i) => {
          if (this.state.top) {
            return (
              <TopComments
                comment={comment}
                i={i}
                key={i}
                postId={this.props.postId}
                addComment={this.props.addComment}
                removeComment={this.props.removeComment}
                editComment={this.props.editComment}
                handleUpdate={this.handleUpdate}
              />
            );
          } else {
            return (
              <Comment
                comment={comment}
                i={i}
                key={i}
                postId={this.props.postId}
                addComment={this.props.addComment}
                removeComment={this.props.removeComment}
                editComment={this.props.editComment}
                handleUpdate={this.handleUpdate}
              />
            );
          }
        })}
        <form
          className="comment-form"
          name="submitComments"
          onSubmit={this.handleSubmit}
        >
          <input
            type="text"
            onChange={this.handleChangeAuthor}
            name="author"
            placeholder="author"
          />
          <input
            type="text"
            onChange={this.handleChangeComment}
            name="comment"
            placeholder="comment"
          />
          <input type="submit" hidden />
        </form>
        <More
          numberOfComments={this.props.postComments.length}
          handleClick={this.handleClick}
          top={this.state.top}
        />
      </div>
    );
  }
}

export default Comments;
