import React from  'react';
import CommentSection from './comment/comment_section';

class Frame extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      commentBody: "",
    };
  }

  submitComment (event) {
    if (event.key === "Enter") {
      $.ajax({
        url: "api/comments",
        method: "POST",
        data: {comment: {body: this.state.commentBody,
                         image_id: this.props.image.id}},
        success: (() => {
          this.forceUpdate();
        }).bind(this)
      });

      event.currentTarget.value = "";
    }
  }

  write(event) {
    var body = event.currentTarget.value;
    this.setState({commentBody: body});
  }

  componentWIllReceiveProps() {
    this.props.forceUpdate();
  }
  render() {
    return(
      <li key = {this.props.image.id} className = "frame">
        <h1 className = "frame-userName">{this.props.image.user.user_name}</h1>
        <img src = {this.props.image.cloud_url} className = "frame-Image"/>
        <div>{this.props.image.created_at}</div>
        <section className = "frame-commentSection">
          <CommentSection comments = {this.props.image.comments}/>
          <input type = "text" className = "commentSubmit"
            onChange = {this.write.bind(this)}
            onKeyDown = {this.submitComment.bind(this)}
            value = {this.state.commentBody}/>
        </section>
      </li>
    );
  }
}


export default Frame;
