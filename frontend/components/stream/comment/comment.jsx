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
      <div className = "comment-author-wrapper">
      <Link to = {{pathname: `/user/${authorName}`}}
        className = "comment-author">
        {authorName}:</Link>
        <DeleteButton {...this.props}/>
      </div>
      <main>{this.props.comment.body}
      </main>
      </li>
    );
  }
}

export default Comment;
