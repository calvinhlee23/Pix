import React from 'react';
import Comment from './comment';

class CommentSection extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(
        <ul className = "comment-list">
          {this.props.comments.map((cm) => {
            return <Comment comment = {cm}
                            key = {cm.id}
                            deleteThis = {this.props.deleteThis}
                            currentUser = {this.props.currentUser}/>;

          })}
        </ul>
    );
  }
}

export default CommentSection;
