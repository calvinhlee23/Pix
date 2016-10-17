import React from 'react';
import DeleteButton from '../../delete/delete_button';

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
      <DeleteButton {...this.props}/>
      </li>
    );
  }
}

export default Comment;
