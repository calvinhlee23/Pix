import React from 'react';
import Comment from './comment';


class CommentSection extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(
        <ul className = "commentList">
          {this.props.comments.map((cm) => {
            return <Comment comment = {cm} key = {cm.id}/>;
          })}
        </ul>
    );
  }
}

export default CommentSection;
