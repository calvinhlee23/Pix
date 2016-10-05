import React from 'react';
import Comment from './comment';


class CommentSection extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      commentBody: ""
    };
  }


  submitComment (event) {
    if (event.key === "Enter") {
      console.log(this.state.commentBody);
    }
  }

  write(event) {
    var body = event.currentTarget.value;
    this.setState({commentBody: body});
  }

  render() {
    return(
      <div>
        <ul className = "commentList">
          {this.props.comments.map((cm, indx) => {
            return <Comment comment = {cm} key = {indx}/>;
          })}
        </ul>
        <input type = "text" className = "commentSubmit"
          onChange = {this.write.bind(this)}
          onKeyDown = {this.submitComment.bind(this)}
          value = {this.state.commentBody}/>

      </div>
    );
  }
}

export default CommentSection;
