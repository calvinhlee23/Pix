import React from  'react';
import CommentSection from './comment/comment_section';
import {Link} from "react-router";
import DeleteButton from '../delete/delete_button';
class Frame extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      commentBody: "",
    };
  }

  submitComment (event) {
    if (event.key === "Enter") {
      // postCommment: (imageId, comment)
      this.props.postComment(this.props.image.id, this.state.commentBody);
      this.setState({commentBody: ""});
    }
  }


  write(event) {
    var body = event.currentTarget.value;
    this.setState({commentBody: body});
  }


  render() {
    var userName = this.props.image.user.user_name;
    return(
      <li key = {this.props.image.id} className = "frame">
      <h2 className = "frame-userName">
      <Link to = {{pathname: `/user/${userName}`}}>{userName}</Link>
      </h2>
        <img src = {this.props.image.cloud_url} className = "frame-Image"/>
        <DeleteButton image = {this.props.image}
                      deleteThis = {this.props.deleteThis}
                      currentUser = {this.props.currentUser}/>
        <div>{this.props.image.created_at}</div>
        <section className = "frame-commentSection">
          <CommentSection comments = {this.props.image.comments}
                          deleteThis = {this.props.deleteThis}
                          currentUser = {this.props.currentUser}/>
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
