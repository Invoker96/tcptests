import React from "react";
import Comment from "./Comment";
import TopComments from "./TopComments";
import More from "./More";

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = { top: true };
    this.handleClick = e => {
      e.preventDefault();
      this.setState({ top: !this.state.top });
    };
    this.handleSubmit = e => {
      e.preventDefault();
      const author = this.refs.author.value;
      const comment = this.refs.comment.value;
      this.props.addComment(this.props.postId, author, comment);
      this.refs.commentForm.reset();
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
              />
            );
          }
        })}
        <form
          ref="commentForm"
          className="comment-form"
          onSubmit={this.handleSubmit}
        >
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
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
