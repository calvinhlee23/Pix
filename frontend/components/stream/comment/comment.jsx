import React from 'react';


class Comment extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className = "comment" key = {this.props.comment.id}>
      <a className = "comment-username">
        {this.props.comment.author_name}</a>
      <main>{this.props.comment.body}</main>
      </li>
    );
  }
}

export default Comment;
