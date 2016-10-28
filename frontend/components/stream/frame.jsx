import React from  'react';
import CommentSection from './comment/comment_section';
import {Link, hashHistory} from "react-router";
import DeleteButton from '../delete/delete_button';
import Like from './like/like';

class Frame extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      commentBody: "",
      likeNum: 0,
      likeAbility: "Like"
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

  handlImageClick(image) {
    event.preventDefault();
  }

  render() {
    var userName = this.props.image.user.user_name;
    return(
      <li key = {this.props.image.id} className = "frame">
      <h2 className = "frame-userName">
      <Link to = {{pathname: `/user/${userName}`}}>{userName}</Link>
      </h2>
      <div className = "delete-wrapper">
      <DeleteButton image = {this.props.image}
      deleteThis = {this.props.deleteThis.bind(this)}
      currentUser = {this.props.currentUser}/>
      </div>
      <div className = "img-create-descript" id = "info">
      {this.props.image.created_at} ago
      </div>
        <div className = "img-wrapper">
        <img src = {this.props.image.cloud_url}
              className = "frame-Image"
              onClick = {this.handlImageClick.bind(this)}/>
        </div>

        <Like {...this.props}/>

        <section className = "frame-commentSection">
          <CommentSection comments = {this.props.image.comments}
                          deleteThis = {this.props.deleteThis}
                          currentUser = {this.props.currentUser}/>
        </section>
        <div className = "input-wrapper">
          <input type = "text" className = "commentSubmit"
          onChange = {this.write.bind(this)}
          onKeyDown = {this.submitComment.bind(this)}
          value = {this.state.commentBody}
          placeholder = "leave a comment"/>
        </div>
      </li>
    );
  }
}


export default Frame;
