import React from "react";
import Comment from "./Comment";

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = e => {
      e.preventDefault();
      console.log(props)
      const author = this.refs.author.value;
      const comment = this.refs.comment.value;
      this.props.addComment(this.props.postId, author, comment);
      this.refs.commentForm.reset();
    };
  }

  render() {
    return (
      <div className="comments">
        {this.props.postComments.map((comment, i) => (
          <Comment
            comment={comment}
            i={i}
            key={i}
            postId={this.props.postId}
            addComment={this.props.addComment}
            removeComment={this.props.removeComment}
          />
        ))}
        <form
          ref="commentForm"
          className="comment-form"
          onSubmit={this.handleSubmit}
        >
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}

export default Comments;
