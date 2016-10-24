import React from 'react';
import DeleteButton from '../../delete/delete_button';
import {Link} from 'react-router';
class Comment extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var authorName = this.props.comment.author_name;
    return (
      <li className = "comment" key = {this.props.comment.id}>
      <Link to = {{pathname: `/user/${authorName}`}}>
        {authorName}</Link>
      <main>{this.props.comment.body}</main>
      <DeleteButton {...this.props}/>
      </li>
    );
  }
}

export default Comment;
